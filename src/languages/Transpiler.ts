import * as ANTLR from "antlr4ts";
import * as Tree from "antlr4ts/tree";
import { LanguageOptions } from "./LanguageOptions";
import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import { CommonVisitor } from "./common/CommonVisitor";
import { CommonLexer } from "./common/generated/CommonLexer";
import { CommonParser } from "./common/generated/CommonParser";
import { ASTNode } from "./CommonASTNode";
import { CommonErrorHandler } from "./common/CommonErrorHandler";
import { CommonLocalizedStrings } from "./common/CommonLocalizedStrings";

export interface ILexerFactory {
  new (inputStream: ANTLR.CharStream): CommonLexer;
}

export interface IParserFactory {
  new (tokenStream: ANTLR.CommonTokenStream): CommonParser;
}

export interface IVisitorFactory {
  new (errorHandler: CommonErrorHandler): CommonVisitor;
}

export interface ITranspiler {
  getLanguage: () => string;
  setLanguage: (language: string, localizedStrings: CommonLocalizedStrings) => Promise<void>;
  getTranspiledCode: (code: string) => string;
  dumpParseTree: (input: string) => string;
}

export class TranspilerFactory {
  language: string;
  localizedStrings: CommonLocalizedStrings;

  constructor(language: string, localizedStrings: CommonLocalizedStrings) {
    this.language = language;
    this.localizedStrings = localizedStrings;
  }

  build = async (): Promise<Transpiler> => {
    const transpiler = new Transpiler();

    await transpiler.setLanguage(this.language, this.localizedStrings);

    return transpiler;
  };
}

class Transpiler implements ITranspiler {
  private language: string | undefined;
  private localizedStrings: CommonLocalizedStrings | undefined;
  private lexerFactory: ILexerFactory | undefined;
  private parserFactory: IParserFactory | undefined;
  private visitorFactory: IVisitorFactory | undefined;

  getLanguage = (): string => {
    return this.language ?? "";
  };

  setLanguage = async (
    language: string,
    localizedStrings: CommonLocalizedStrings,
  ): Promise<void> => {
    if (!Object.keys(LanguageOptions).includes(language)) {
      throw new Error(`Language value not included in LanguageOptions: ${language}`);
    }

    this.language = language;
    this.localizedStrings = localizedStrings;

    const lexerModule = await import(`../languages/${this.language}/generated/CustomLexer`);
    this.lexerFactory = lexerModule.CustomLexer;

    const parserModule = await import(`../languages/${this.language}/generated/CustomParser`);
    this.parserFactory = parserModule.CustomParser;

    const visitorModule = await import(`../languages/${this.language}/CustomVisitor`);
    this.visitorFactory = visitorModule.CustomVisitor;
  };

  getTranspiledCode = (code: string): string => {
    //console.log(this.dumpTokens(code));
    //console.log(this.dumpParseTree(code));
    const transpiledCode = this.transpile(code);
    //console.log(transpiledCode);
    return transpiledCode;
  };

  dumpParseTree = (input: string): string => {
    const errorHandler = this.getErrorHandlerInstance();
    if (!errorHandler) {
      return "";
    }

    const lexerInstance = this.getLexerInstance(input, errorHandler);
    if (!lexerInstance) {
      return "";
    }

    const parserInstance = this.getParserInstance(lexerInstance, errorHandler);
    if (!parserInstance) {
      return "";
    }

    const tree = this.getParseTree(parserInstance);
    return this.dumpNode(tree, 0, parserInstance);
  };

  dumpTokens = (input: string): string => {
    let dumpStr = "";

    const errorHandler = this.getErrorHandlerInstance();
    if (!errorHandler) {
      return "";
    }

    const lexerInstance = this.getLexerInstance(input, errorHandler);
    if (!lexerInstance) {
      return "";
    }

    const tokens = this.getTokensList(lexerInstance);
    tokens.map((token) => {
      const tokenName = lexerInstance.vocabulary.getSymbolicName(token.type);
      const channelName = lexerInstance.channelNames[token.channel];
      const value = this.escapeChars(token.text ?? "");

      dumpStr += `${tokenName} (${channelName}): '${value}'\r\n`;
    });

    return dumpStr;
  };

  private getErrorHandlerInstance = (): CommonErrorHandler | undefined => {
    if (this.localizedStrings) {
      return new CommonErrorHandler(this.localizedStrings);
    }
  };

  private getLexerInstance = (
    input: string,
    errorHandler: CommonErrorHandler,
  ): CommonLexer | undefined => {
    if (!this.lexerFactory) {
      return;
    }

    const inputStream = ANTLR.CharStreams.fromString(input);
    const lexerInstance = new this.lexerFactory(inputStream);

    // use custom error handler
    lexerInstance.removeErrorListeners();
    lexerInstance.addErrorListener(errorHandler);

    return lexerInstance;
  };

  private getTokensList = (lexerInstance: CommonLexer): ANTLR.Token[] => {
    return lexerInstance.getAllTokens();
  };

  private getParserInstance = (
    lexerInstance: CommonLexer,
    errorHandler: CommonErrorHandler,
  ): CommonParser | undefined => {
    if (!this.parserFactory) {
      return;
    }

    const tokenStream = new ANTLR.CommonTokenStream(lexerInstance);
    const parserInstance = new this.parserFactory(tokenStream);

    // use custom error handler
    parserInstance.removeErrorListeners();
    parserInstance.addErrorListener(errorHandler);

    return parserInstance;
  };

  private getParseTree = (parserInstance: CommonParser): Tree.ParseTree => {
    return parserInstance.program();
  };

  private getVisitorInstance = (
    errorHandler: CommonErrorHandler,
  ): AbstractParseTreeVisitor<ASTNode> | undefined => {
    if (!this.visitorFactory) {
      return;
    }

    const visitor = new this.visitorFactory(errorHandler);

    // use custom error handler
    visitor.setErrorHandler(errorHandler);

    return visitor;
  };

  private transpile = (input: string): string => {
    const errorHandler = this.getErrorHandlerInstance();
    if (!errorHandler) {
      return "";
    }

    const lexerInstance = this.getLexerInstance(input, errorHandler);
    if (!lexerInstance) {
      return "";
    }

    const parserInstance = this.getParserInstance(lexerInstance, errorHandler);
    if (!parserInstance) {
      return "";
    }

    const tree = this.getParseTree(parserInstance);
    const visitor = this.getVisitorInstance(errorHandler);
    if (!visitor) {
      return "";
    }

    const output = visitor.visit(tree);
    return output.code;
  };

  private dumpNode = (
    node: Tree.ParseTree,
    level: number,
    parserInstance: CommonParser,
  ): string => {
    let nodeStr = " ".repeat(4 * level);

    if (node instanceof ANTLR.ParserRuleContext) {
      nodeStr += this.ruleNodeToString(node, parserInstance);

      for (let i = 0; i < node.childCount; ++i) {
        const child = node.getChild(i);
        nodeStr += this.dumpNode(child, level + 1, parserInstance);
      }
    } else if (node instanceof Tree.TerminalNode) {
      nodeStr += this.tokenNodeToString(node, parserInstance);
    }

    return nodeStr;
  };

  private ruleNodeToString = (
    node: ANTLR.ParserRuleContext,
    parserInstance: CommonParser,
  ): string => {
    let nodeStr = "";

    const ruleName = parserInstance.ruleNames[node.ruleIndex];
    nodeStr += `${ruleName}:\r\n`;

    if (node.exception) {
      nodeStr += "***ERROR***\r\n";
    }

    return nodeStr;
  };

  private tokenNodeToString = (node: Tree.TerminalNode, parserInstance: CommonParser): string => {
    let nodeStr = "";

    const token = node.symbol;
    const tokenValue = this.escapeChars(token.text ?? "");
    const tokenName = parserInstance.vocabulary.getSymbolicName(token.type);
    nodeStr += `'${tokenValue}' (${tokenName})\r\n`;

    if (node instanceof Tree.ErrorNode) {
      nodeStr += "***ERROR***\r\n";
    }

    return nodeStr;
  };

  private escapeChars = (input: string): string => {
    return input.replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t");
  };
}
