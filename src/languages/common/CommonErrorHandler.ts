import {
  ANTLRErrorListener,
  Lexer,
  ParserRuleContext,
  RecognitionException,
  Recognizer,
  Token,
} from "antlr4ts";
import { Interval } from "antlr4ts/misc/Interval";
import { ParseCancellationException } from "antlr4ts/misc/ParseCancellationException";
import { ASTNode, PanType } from "../CommonASTNode";
import { CommonLocalizedStrings } from "./CommonLocalizedStrings";
import { SymbolTable } from "../CommonSymbolTable";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class CommonErrorHandler implements ANTLRErrorListener<any> {
  localizedStrings: CommonLocalizedStrings;

  constructor(localizedStrings: CommonLocalizedStrings) {
    this.localizedStrings = localizedStrings;
  }

  syntaxError = (
    /* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
    recognizer: Recognizer<any, any>,
    offendingSymbol: any | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined,
    /* eslint-enable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
  ): void => {
    // if we don't have the offending token, print a generic error message
    // TODO: expand to show the line where the error occurred
    if (!offendingSymbol) {
      const errorTemplate = this.localizedStrings.ERROR_MESSAGE_TEMPLATE_UNKNOWN_TOKEN;
      const errorMessage = errorTemplate
        .replaceAll("${line}", `${line}`)
        .replaceAll("${charPositionInLine}", `${charPositionInLine}`);
      const cause = new Error(errorMessage);
      throw new ParseCancellationException(cause);
    }

    // get printable symbol description
    let symbolDescription = `"${offendingSymbol.text}"`;
    if (offendingSymbol.text == "<EOF>") {
      symbolDescription = this.localizedStrings.ERROR_MESSAGE_END_OF_CODE_TOKEN;
    } else if (offendingSymbol.text[0] == "\r" || offendingSymbol.text[0] == "\n") {
      symbolDescription = this.localizedStrings.ERROR_MESSAGE_END_OF_LINE_TOKEN;
    }

    // get error line
    const errorTemplate = this.localizedStrings.ERROR_MESSAGE_TEMPLATE_INVALID_SYNTAX;
    let errorMessage = errorTemplate
      .replaceAll("${line}", `${line}`)
      .replaceAll("${symbolDescription}", `${symbolDescription}`);

    const sourceLine = this.getSourceLineFromToken(offendingSymbol);
    if (sourceLine) {
      errorMessage += "\r\n" + sourceLine;
    }

    this.reportError(errorMessage);
  };

  getSourceLineFromToken(startToken: Token, endToken?: Token): string {
    if (!endToken) {
      endToken = startToken;
    }

    // obtain the list of tokens from this token's lexer
    const lexerInstance = startToken.tokenSource as Lexer;
    lexerInstance.reset();
    const tokensList = lexerInstance.getAllTokens();

    // go back until the first token in this line
    let lineStartTokenIndex = startToken.tokenIndex;
    while (lineStartTokenIndex > 0 && tokensList[lineStartTokenIndex - 1].line == startToken.line) {
      lineStartTokenIndex -= 1;
    }

    // ignore first token if it is a newline
    const lineStartTokenText = tokensList[lineStartTokenIndex].text ?? "";
    if (lineStartTokenText[0] == "\r" || lineStartTokenText[0] == "\n") {
      lineStartTokenIndex += 1;
    }

    // advance until the last token in this line
    let lineEndTokenIndex = endToken.tokenIndex;
    while (tokensList[lineEndTokenIndex + 1]?.line == endToken.line) {
      lineEndTokenIndex += 1;
    }

    // ignore last token if it is a newline or end-of-file
    const lineEndTokenText = tokensList[lineEndTokenIndex]?.text ?? "<EOF>";
    if (lineEndTokenText == "<EOF>" || lineEndTokenText[0] == "\r" || lineEndTokenText[0] == "\n") {
      lineEndTokenIndex -= 1;
    }

    // get the original source line
    const lineStartToken = tokensList[lineStartTokenIndex];
    const lineEndToken = tokensList[lineEndTokenIndex];
    const sourceInterval = new Interval(lineStartToken.startIndex, lineEndToken.stopIndex);
    const sourceLine = lexerInstance.inputStream.getText(sourceInterval);

    // create the output source line with an indication of where the error occurred
    let outputLine = "";
    if (sourceLine) {
      const numTabsInLine = sourceLine.split("\t").length - 1;
      const tabSize = 4; // TODO: config?

      outputLine = sourceLine + "\r\n";
      outputLine += "-".repeat(startToken.charPositionInLine + numTabsInLine * (tabSize - 1));
      if (endToken != startToken) {
        outputLine += "^".repeat(endToken.charPositionInLine - startToken.charPositionInLine + 1);
      } else {
        outputLine += "^".repeat(startToken.stopIndex - startToken.startIndex + 1);
      }
    }

    return outputLine;
  }

  assertNameNotDefined(
    symbolTable: SymbolTable,
    name: string,
    startToken: Token,
    endToken?: Token,
  ): void {
    const defined = symbolTable.findByNameInCurrentScope(name);
    if (!defined) {
      return;
    }

    const errorTemplate = this.localizedStrings.ERROR_MESSAGE_TEMPLATE_NAME_ALREADY_DEFINED;
    let errorMessage = errorTemplate
      .replaceAll("${line}", `${startToken.line}`)
      .replaceAll("${name}", `${name}`);

    const sourceLine = this.getSourceLineFromToken(startToken, endToken);
    if (sourceLine) {
      errorMessage += ":\r\n" + sourceLine;
    }

    this.reportError(errorMessage);
  }

  assertNameDefined(
    symbolTable: SymbolTable,
    name: string,
    startToken: Token,
    endToken?: Token,
  ): ASTNode | undefined {
    const defined = symbolTable.findByNameInCurrentScope(name);
    if (defined) {
      return defined;
    }

    const errorTemplate = this.localizedStrings.ERROR_MESSAGE_TEMPLATE_UNDECLARED_IDENTIFIER;
    let errorMessage = errorTemplate
      .replaceAll("${line}", `${startToken.line}`)
      .replaceAll("${name}", `${name}`);

    const sourceLine = this.getSourceLineFromToken(startToken, endToken);
    if (sourceLine) {
      errorMessage += ":\r\n" + sourceLine;
    }

    if (symbolTable.findByNameInGlobalScope(name)) {
      const hintTemplate = this.localizedStrings.ERROR_MESSAGE_GLOBAL_HINT;
      errorMessage += hintTemplate
        .replaceAll("${globalKeyword}", `${this.localizedStrings.KEYWORD_GLOBAL}`)
        .replaceAll("${name}", `${name}`);
    }

    this.reportError(errorMessage);
  }

  assertNameDefinedInGlobalScope(
    symbolTable: SymbolTable,
    name: string,
    startToken: Token,
    endToken?: Token,
  ): ASTNode | undefined {
    const defined = symbolTable.findByNameInGlobalScope(name);
    if (defined) {
      return defined;
    }

    const errorTemplate = this.localizedStrings.ERROR_MESSAGE_TEMPLATE_UNDECLARED_IDENTIFIER;
    let errorMessage = errorTemplate
      .replaceAll("${line}", `${startToken.line}`)
      .replaceAll("${name}", `${name}`);

    const sourceLine = this.getSourceLineFromToken(startToken, endToken);
    if (sourceLine) {
      errorMessage += ":\r\n" + sourceLine;
    }

    if (name == "print" || name == "println") {
      const hintTemplate = this.localizedStrings.ERROR_MESSAGE_WRITE_HINT;
      errorMessage += hintTemplate
        .replaceAll("${write}", `${this.localizedStrings.FUNCTION_WRITE}`)
        .replaceAll("${write_inline}", `${this.localizedStrings.FUNCTION_WRITE_INLINE}`);
    }

    this.reportError(errorMessage);
  }

  assertIdentifierTypeNotConst(node: ASTNode, startToken: Token, endToken?: Token): void {
    if (!node.type.isConst) {
      return;
    }

    const errorTemplate = this.localizedStrings.ERROR_MESSAGE_TEMPLATE_CONSTANT_REASSIGNMENT;
    let errorMessage = errorTemplate
      .replaceAll("${line}", `${startToken.line}`)
      .replaceAll("${name}", `${node.name}`)
      .replaceAll("${constantKeyword}", `${this.localizedStrings.KEYWORD_CONSTANT}`);

    const sourceLine = this.getSourceLineFromToken(startToken, endToken);
    if (sourceLine) {
      errorMessage += ":\r\n" + sourceLine;
    }

    this.reportError(errorMessage);
  }

  assertArgumentsNumber(
    name: string,
    argumentsExpected: number,
    argumentsGiven: number,
    context: ParserRuleContext,
  ): void {
    if (argumentsExpected == argumentsGiven) {
      return;
    }

    const errorTemplate = this.localizedStrings.ERROR_MESSAGE_TEMPLATE_ARGUMENTS_NUMBER;
    let errorMessage = errorTemplate
      .replaceAll("${line}", `${context.start.line}`)
      .replaceAll("${name}", `${name}`)
      .replaceAll("${argumentsExpected}", `${argumentsExpected}`)
      .replaceAll("${argumentsGiven}", `${argumentsGiven}`);

    const sourceLine = this.getSourceLineFromToken(context.start, context.stop);
    if (sourceLine) {
      errorMessage += ":\r\n" + sourceLine;
    }

    this.reportError(errorMessage);
  }

  assertNodeTypeAnyOf(node: ASTNode, expectedTypes: PanType[], context: ParserRuleContext): void {
    for (const expectedType of expectedTypes) {
      if (node.type.equalsExpected(expectedType)) {
        return;
      }
    }

    const errorTemplate = this.localizedStrings.ERROR_MESSAGE_TEMPLATE_TYPE_MISMATCH;
    const localizedExpectedTypes = expectedTypes.map((expectedType: PanType) => {
      return this.localizedStrings.KEYWORD_TYPES[expectedType.toString()];
    });
    const expectedTypeDescription = localizedExpectedTypes.join(
      `, ${this.localizedStrings.KEYWORD_OR} `,
    );
    const actualTypeDescription = this.localizedStrings.KEYWORD_TYPES[node.type.toString()];
    let errorMessage = errorTemplate
      .replaceAll("${line}", `${context.start.line}`)
      .replaceAll("${name}", `${context.text}`)
      .replaceAll("${expectedType}", `${expectedTypeDescription}`)
      .replaceAll("${actualType}", `${actualTypeDescription}`);

    const sourceLine = this.getSourceLineFromToken(context.start, context.stop);
    if (sourceLine) {
      errorMessage += ":\r\n" + sourceLine;
    }

    this.reportError(errorMessage);
  }

  assertNodeType(node: ASTNode, expectedType: PanType, context: ParserRuleContext): void {
    this.assertNodeTypeAnyOf(node, [expectedType], context);
  }

  assertNodeTypeLogical(node: ASTNode, context: ParserRuleContext): void {
    this.assertNodeType(node, PanType.logicalType(), context);
  }

  assertNodeTypeNumber(node: ASTNode, context: ParserRuleContext): void {
    this.assertNodeType(node, PanType.numberType(), context);
  }

  assertNodeTypeText(node: ASTNode, context: ParserRuleContext): void {
    this.assertNodeType(node, PanType.textType(), context);
  }

  reportError(message: string): void {
    const error = new Error(message);
    throw new ParseCancellationException(error);
  }
}
