import { CommonParserVisitor } from "./generated/CommonParserVisitor";
import { AbstractParseTreeVisitor, TerminalNode } from "antlr4ts/tree";
import * as CommonParser from "./generated/CommonParser";
import { SymbolTable } from "../CommonSymbolTable";
import { ASTNode, PanType } from "../CommonASTNode";
import { CommonStandardLibrary } from "./CommonStandardLibrary";
import { CommonErrorHandler } from "./CommonErrorHandler";
import { CommonLocalizedStrings } from "./CommonLocalizedStrings";

export class CommonVisitor
  extends AbstractParseTreeVisitor<ASTNode>
  implements CommonParserVisitor<ASTNode>
{
  protected symbolTable: SymbolTable = new SymbolTable();
  protected localizedStrings: CommonLocalizedStrings = new CommonLocalizedStrings();
  protected errorHandler: CommonErrorHandler = new CommonErrorHandler(this.localizedStrings);

  constructor() {
    super();
    this.symbolTable = CommonStandardLibrary.getStandardLibrarySymbolTable();
  }

  setErrorHandler(errorHandler: CommonErrorHandler): void {
    this.errorHandler = errorHandler;
  }

  defaultResult(): ASTNode {
    return new ASTNode();
  }

  visitProgram(ctx: CommonParser.ProgramContext): ASTNode {
    const newNode = new ASTNode();

    newNode.code = "{\r\n";

    // append code from the standard library
    newNode.code += this.symbolTable.getCode();

    // visit every top statement
    ctx.topStatement().map((topStatementCtx: CommonParser.TopStatementContext) => {
      newNode.code += super.visit(topStatementCtx).code + "\r\n";
    });

    newNode.code += "\r\n}";

    return newNode;
  }

  visitTopStatement(ctx: CommonParser.TopStatementContext): ASTNode {
    const newNode = new ASTNode();

    // visit the statement
    const statementCtx = ctx.getChild(0);
    newNode.code = super.visit(statementCtx).code;

    return newNode;
  }

  visitInnerStatement(ctx: CommonParser.InnerStatementContext): ASTNode {
    const newNode = new ASTNode();

    // visit the statement
    const statementCtx = ctx.getChild(0);
    newNode.code = super.visit(statementCtx).code;

    return newNode;
  }

  visitStatement(ctx: CommonParser.StatementContext): ASTNode {
    const newNode = new ASTNode();

    // visit the statement
    const statementCtx = ctx.getChild(0);
    newNode.code = super.visit(statementCtx).code + ";";

    return newNode;
  }

  visitGlobalStatement(ctx: CommonParser.GlobalStatementContext): ASTNode {
    const newNode = new ASTNode();

    // make sure the name is defined in the global scope
    const idTerminal = ctx.IDENTIFIER();
    const node = this.errorHandler.assertNameDefinedInGlobalScope(
      this.symbolTable,
      idTerminal.text,
      idTerminal.symbol,
    );

    // add the global identifier to the current inner scope
    if (node) {
      this.symbolTable.pushNode(node);
    }

    return newNode;
  }

  visitFunctionDeclaration(ctx: CommonParser.FunctionDeclarationContext): ASTNode {
    // TODO: if we allow user-created variadic functions, we
    // must check that the variadic parameter is the last parameter
    const newNode = new ASTNode();

    // make sure the name is not yet defined
    const idTerminal = ctx.IDENTIFIER();
    this.errorHandler.assertNameNotDefined(this.symbolTable, idTerminal.text, idTerminal.symbol);

    const optionalTypeCtx = ctx.type();
    const optionalParamListCtx = ctx.parameterList();
    let paramListNode: ASTNode | undefined;

    // inner scope must be active before we visit the parameter list
    this.symbolTable.pushScope(idTerminal.text);

    // add to global scope now to allow recursive functions
    newNode.name = idTerminal.text;
    if (optionalParamListCtx) {
      paramListNode = super.visit(optionalParamListCtx);
      newNode.argList = paramListNode.argList;
    }
    if (optionalTypeCtx) {
      const typeNode = super.visit(optionalTypeCtx);
      newNode.type = typeNode.type;
    }
    this.symbolTable.pushGlobalNode(newNode);

    newNode.code = `function ${idTerminal.text}(`;
    if (optionalParamListCtx && paramListNode) {
      newNode.code += paramListNode.code;
    }
    newNode.code += ") {\r\n";

    // visit every statement in the function's body
    ctx.innerStatement().map((innerStatementCtx: CommonParser.InnerStatementContext) => {
      newNode.code += super.visit(innerStatementCtx).code + "\r\n";
    });

    newNode.code += "}";

    this.symbolTable.popScope();

    return newNode;
  }

  visitParameterList(ctx: CommonParser.ParameterListContext): ASTNode {
    const newNode = new ASTNode();

    // these will have one of more TerminalNodes
    const idsTerminalList = ctx.IDENTIFIER();
    const typesCtxList = ctx.type();

    idsTerminalList.map((idTerminal: TerminalNode, i: number) => {
      // make sure the parameter name is not yet defined
      this.errorHandler.assertNameNotDefined(this.symbolTable, idTerminal.text, idTerminal.symbol);

      // add parameter to the inner scope
      const typeNode = super.visit(typesCtxList[i]);
      const node = new ASTNode();
      node.code = idTerminal.text;
      node.type = typeNode.type;
      node.name = idTerminal.text;
      this.symbolTable.pushNode(node);

      // also add to argList for the function's signature
      newNode.argList.push([idTerminal.text, typeNode.type]);

      newNode.code += idTerminal.text + ",";
    });

    return newNode;
  }

  visitVariableDeclaration(ctx: CommonParser.VariableDeclarationContext): ASTNode {
    const newNode = new ASTNode();

    // make sure the name is not yet defined
    const idTerminal = ctx.IDENTIFIER();
    this.errorHandler.assertNameNotDefined(this.symbolTable, idTerminal.text, idTerminal.symbol);

    // type-check declared type vs expression type
    const typeNode = super.visit(ctx.type());
    const exprNode = super.visit(ctx.expression());
    this.errorHandler.assertNodeType(exprNode, typeNode.type, ctx.expression());

    // add variable to the current scope
    newNode.name = idTerminal.text;
    newNode.type = typeNode.type;
    const constantTerminal = ctx.CONSTANT();
    if (constantTerminal) {
      newNode.type.isConst = true;
    }
    this.symbolTable.pushNode(newNode);

    if (constantTerminal) {
      newNode.code = `const ${idTerminal.text} = ${exprNode.code}`;
    } else {
      newNode.code = `let ${idTerminal.text} = ${exprNode.code}`;
    }

    return newNode;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visitLogicalType(ctx: CommonParser.LogicalTypeContext): ASTNode {
    const newNode = new ASTNode();

    newNode.type = PanType.logicalType();

    return newNode;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visitNumberType(ctx: CommonParser.NumberTypeContext): ASTNode {
    const newNode = new ASTNode();

    newNode.type = PanType.numberType();

    return newNode;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visitTextType(ctx: CommonParser.TextTypeContext): ASTNode {
    const newNode = new ASTNode();

    newNode.type = PanType.textType();

    return newNode;
  }

  visitParenthesisExpression(ctx: CommonParser.ParenthesisExpressionContext): ASTNode {
    const newNode = new ASTNode();

    const exprNode = super.visit(ctx.expression());
    newNode.code = `(${exprNode.code})`;
    newNode.type = exprNode.type;

    return newNode;
  }

  visitPlusExpression(ctx: CommonParser.PlusExpressionContext): ASTNode {
    const newNode = new ASTNode();

    // unary "+" requires number type
    const exprNode = super.visit(ctx.expression());
    this.errorHandler.assertNodeTypeNumber(exprNode, ctx.expression());

    newNode.code = `+${exprNode.code}`;
    newNode.type = exprNode.type;

    return newNode;
  }

  visitMinusExpression(ctx: CommonParser.MinusExpressionContext): ASTNode {
    const newNode = new ASTNode();

    // unary "-" requires number type
    const exprNode = super.visit(ctx.expression());
    this.errorHandler.assertNodeTypeNumber(exprNode, ctx.expression());

    newNode.code = `-${exprNode.code}`;
    newNode.type = exprNode.type;

    return newNode;
  }

  visitNotExpression(ctx: CommonParser.NotExpressionContext): ASTNode {
    const newNode = new ASTNode();

    // unary "!" requires logical type
    const exprNode = super.visit(ctx.expression());
    this.errorHandler.assertNodeTypeLogical(exprNode, ctx.expression());

    newNode.code = `!${exprNode.code}`;
    newNode.type = exprNode.type;

    return newNode;
  }

  visitPowerExpression(ctx: CommonParser.PowerExpressionContext): ASTNode {
    const newNode = new ASTNode();

    // binary "^" requires two number types
    const leftCtx = ctx.expression(0);
    const leftExprNode = super.visit(leftCtx);
    this.errorHandler.assertNodeTypeNumber(leftExprNode, leftCtx);

    const rightCtx = ctx.expression(1);
    const rightExprNode = super.visit(rightCtx);
    this.errorHandler.assertNodeTypeNumber(rightExprNode, rightCtx);

    newNode.code = `Math.pow(${leftExprNode.code}, ${rightExprNode.code})`;
    newNode.type = leftExprNode.type;

    return newNode;
  }

  visitMultiplyExpression(ctx: CommonParser.MultiplyExpressionContext): ASTNode {
    const newNode = new ASTNode();

    // binary "*" requires two number types
    const leftCtx = ctx.expression(0);
    const leftExprNode = super.visit(leftCtx);
    this.errorHandler.assertNodeTypeNumber(leftExprNode, leftCtx);

    const rightCtx = ctx.expression(1);
    const rightExprNode = super.visit(rightCtx);
    this.errorHandler.assertNodeTypeNumber(rightExprNode, rightCtx);

    newNode.code = `${leftExprNode.code}*${rightExprNode.code}`;
    newNode.type = leftExprNode.type;

    return newNode;
  }

  visitDivideExpression(ctx: CommonParser.DivideExpressionContext): ASTNode {
    // TODO: prevent division by zero in runtime
    const newNode = new ASTNode();

    // binary "/" requires two number types
    const leftCtx = ctx.expression(0);
    const leftExprNode = super.visit(leftCtx);
    this.errorHandler.assertNodeTypeNumber(leftExprNode, leftCtx);

    const rightCtx = ctx.expression(1);
    const rightExprNode = super.visit(rightCtx);
    this.errorHandler.assertNodeTypeNumber(rightExprNode, rightCtx);

    newNode.code = `${leftExprNode.code}/${rightExprNode.code}`;
    newNode.type = leftExprNode.type;

    return newNode;
  }

  visitRemainderExpression(ctx: CommonParser.RemainderExpressionContext): ASTNode {
    const newNode = new ASTNode();

    // binary "%" requires two number types
    const leftCtx = ctx.expression(0);
    const leftExprNode = super.visit(leftCtx);
    this.errorHandler.assertNodeTypeNumber(leftExprNode, leftCtx);

    const rightCtx = ctx.expression(1);
    const rightExprNode = super.visit(rightCtx);
    this.errorHandler.assertNodeTypeNumber(rightExprNode, rightCtx);

    newNode.code = `${leftExprNode.code}%${rightExprNode.code}`;
    newNode.type = leftExprNode.type;

    return newNode;
  }

  visitAddExpression(ctx: CommonParser.AddExpressionContext): ASTNode {
    const newNode = new ASTNode();

    // binary "+" requires two number types or two text types
    const leftCtx = ctx.expression(0);
    const leftExprNode = super.visit(leftCtx);
    const allowedTypes = [PanType.numberType(), PanType.textType()];
    this.errorHandler.assertNodeTypeAnyOf(leftExprNode, allowedTypes, leftCtx);

    // both types should be identical
    const rightCtx = ctx.expression(1);
    const rightExprNode = super.visit(rightCtx);
    this.errorHandler.assertNodeType(rightExprNode, leftExprNode.type, rightCtx);

    newNode.code = `${leftExprNode.code}+${rightExprNode.code}`;
    newNode.type = leftExprNode.type;

    return newNode;
  }

  visitSubtractExpression(ctx: CommonParser.SubtractExpressionContext): ASTNode {
    const newNode = new ASTNode();

    // binary "-" requires two number types
    const leftCtx = ctx.expression(0);
    const leftExprNode = super.visit(leftCtx);
    this.errorHandler.assertNodeTypeNumber(leftExprNode, leftCtx);

    const rightCtx = ctx.expression(1);
    const rightExprNode = super.visit(rightCtx);
    this.errorHandler.assertNodeTypeNumber(rightExprNode, rightCtx);

    newNode.code = `${leftExprNode.code}-${rightExprNode.code}`;
    newNode.type = leftExprNode.type;

    return newNode;
  }

  visitLessExpression(ctx: CommonParser.LessExpressionContext): ASTNode {
    const newNode = new ASTNode();

    // binary "<" requires two number types
    const leftCtx = ctx.expression(0);
    const leftExprNode = super.visit(leftCtx);
    this.errorHandler.assertNodeTypeNumber(leftExprNode, leftCtx);

    const rightCtx = ctx.expression(1);
    const rightExprNode = super.visit(rightCtx);
    this.errorHandler.assertNodeTypeNumber(rightExprNode, rightCtx);

    newNode.code = `${leftExprNode.code} < ${rightExprNode.code}`;
    newNode.type = PanType.logicalType();

    return newNode;
  }

  visitLessEqualExpression(ctx: CommonParser.LessEqualExpressionContext): ASTNode {
    const newNode = new ASTNode();

    // binary "<=" requires two number types
    const leftCtx = ctx.expression(0);
    const leftExprNode = super.visit(leftCtx);
    this.errorHandler.assertNodeTypeNumber(leftExprNode, leftCtx);

    const rightCtx = ctx.expression(1);
    const rightExprNode = super.visit(rightCtx);
    this.errorHandler.assertNodeTypeNumber(rightExprNode, rightCtx);

    newNode.code = `${leftExprNode.code} <= ${rightExprNode.code}`;
    newNode.type = PanType.logicalType();

    return newNode;
  }

  visitGreaterExpression(ctx: CommonParser.GreaterExpressionContext): ASTNode {
    const newNode = new ASTNode();

    // binary ">" requires two number types
    const leftCtx = ctx.expression(0);
    const leftExprNode = super.visit(leftCtx);
    this.errorHandler.assertNodeTypeNumber(leftExprNode, leftCtx);

    const rightCtx = ctx.expression(1);
    const rightExprNode = super.visit(rightCtx);
    this.errorHandler.assertNodeTypeNumber(rightExprNode, rightCtx);

    newNode.code = `${leftExprNode.code} > ${rightExprNode.code}`;
    newNode.type = PanType.logicalType();

    return newNode;
  }

  visitGreaterEqualExpression(ctx: CommonParser.GreaterEqualExpressionContext): ASTNode {
    const newNode = new ASTNode();

    // binary ">=" requires two number types
    const leftCtx = ctx.expression(0);
    const leftExprNode = super.visit(leftCtx);
    this.errorHandler.assertNodeTypeNumber(leftExprNode, leftCtx);

    const rightCtx = ctx.expression(1);
    const rightExprNode = super.visit(rightCtx);
    this.errorHandler.assertNodeTypeNumber(rightExprNode, rightCtx);

    newNode.code = `${leftExprNode.code} >= ${rightExprNode.code}`;
    newNode.type = PanType.logicalType();

    return newNode;
  }

  visitEqualExpression(ctx: CommonParser.EqualExpressionContext): ASTNode {
    const newNode = new ASTNode();

    // binary "==" requires two expressions with the same type
    const leftCtx = ctx.expression(0);
    const leftExprNode = super.visit(leftCtx);
    const rightCtx = ctx.expression(1);
    const rightExprNode = super.visit(rightCtx);
    this.errorHandler.assertNodeType(rightExprNode, leftExprNode.type, rightCtx);

    newNode.code = `${leftExprNode.code} == ${rightExprNode.code}`;
    newNode.type = PanType.logicalType();

    return newNode;
  }

  visitDifferentExpression(ctx: CommonParser.DifferentExpressionContext): ASTNode {
    const newNode = new ASTNode();

    // binary "!=" requires two expressions with the same type
    const leftCtx = ctx.expression(0);
    const leftExprNode = super.visit(leftCtx);
    const rightCtx = ctx.expression(1);
    const rightExprNode = super.visit(rightCtx);
    this.errorHandler.assertNodeType(rightExprNode, leftExprNode.type, rightCtx);

    newNode.code = `${leftExprNode.code} != ${rightExprNode.code}`;
    newNode.type = PanType.logicalType();

    return newNode;
  }

  visitAndExpression(ctx: CommonParser.AndExpressionContext): ASTNode {
    const newNode = new ASTNode();

    // binary "&&" requires two logical types
    const leftCtx = ctx.expression(0);
    const leftExprNode = super.visit(leftCtx);
    this.errorHandler.assertNodeTypeLogical(leftExprNode, leftCtx);

    const rightCtx = ctx.expression(1);
    const rightExprNode = super.visit(rightCtx);
    this.errorHandler.assertNodeTypeLogical(rightExprNode, rightCtx);

    newNode.code = `${leftExprNode.code} && ${rightExprNode.code}`;
    newNode.type = PanType.logicalType();

    return newNode;
  }

  visitOrExpression(ctx: CommonParser.OrExpressionContext): ASTNode {
    const newNode = new ASTNode();

    // binary "||" requires two logical types
    const leftCtx = ctx.expression(0);
    const leftExprNode = super.visit(leftCtx);
    this.errorHandler.assertNodeTypeLogical(leftExprNode, leftCtx);

    const rightCtx = ctx.expression(1);
    const rightExprNode = super.visit(rightCtx);
    this.errorHandler.assertNodeTypeLogical(rightExprNode, rightCtx);

    newNode.code = `${leftExprNode.code} || ${rightExprNode.code}`;
    newNode.type = PanType.logicalType();

    return newNode;
  }

  visitAtomExpression(ctx: CommonParser.AtomExpressionContext): ASTNode {
    return super.visit(ctx.atom());
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visitTrueAtom(ctx: CommonParser.TrueAtomContext): ASTNode {
    const newNode = new ASTNode();

    newNode.code = "true";
    newNode.type = PanType.logicalType();

    return newNode;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visitFalseAtom(ctx: CommonParser.FalseAtomContext): ASTNode {
    const newNode = new ASTNode();

    newNode.code = "false";
    newNode.type = PanType.logicalType();

    return newNode;
  }

  visitNumberAtom(ctx: CommonParser.NumberAtomContext): ASTNode {
    const newNode = new ASTNode();

    newNode.code = ctx.numberLiteral().text;
    newNode.type = PanType.numberType();

    return newNode;
  }

  visitTextAtom(ctx: CommonParser.TextAtomContext): ASTNode {
    return super.visit(ctx.textLiteral());
  }

  visitSimpleTextLiteral(ctx: CommonParser.SimpleTextLiteralContext): ASTNode {
    const newNode = new ASTNode();

    newNode.type = PanType.textType();

    newNode.code = "'";
    ctx.TEXT_CONTENT().map((textContentTerminal: TerminalNode) => {
      newNode.code += textContentTerminal.text;
    });
    newNode.code += "'";

    return newNode;
  }

  visitInterpolatedTextLiteral(ctx: CommonParser.InterpolatedTextLiteralContext): ASTNode {
    const newNode = new ASTNode();

    newNode.type = PanType.textType();

    newNode.code = "`";
    ctx.interpolatedText().map((interpolatedTextCtx: CommonParser.InterpolatedTextContext) => {
      newNode.code += super.visit(interpolatedTextCtx).code;
    });
    newNode.code += "`";

    return newNode;
  }

  visitInterpolatedSimpleText(ctx: CommonParser.InterpolatedSimpleTextContext): ASTNode {
    const newNode = new ASTNode();

    newNode.type = PanType.textType();

    // TODO: watch out for \\`
    newNode.code = ctx.TEXT_CONTENT().text.replace(/^[\\]`/g, "\\`");

    return newNode;
  }

  visitInterpolatedExpressionText(ctx: CommonParser.InterpolatedExpressionTextContext): ASTNode {
    const newNode = new ASTNode();

    const exprNode = super.visit(ctx.expression());
    const toTextFunctionName = this.localizedStrings.FUNCTION_TO_TEXT;
    newNode.code = "${" + toTextFunctionName + "(" + exprNode.code + ")}";
    newNode.type = exprNode.type;

    return newNode;
  }

  visitFunctionCallAtom(ctx: CommonParser.FunctionCallAtomContext): ASTNode {
    return super.visit(ctx.functionCall());
  }

  visitIdentifierAtom(ctx: CommonParser.IdentifierAtomContext): ASTNode {
    const node = this.errorHandler.assertNameDefined(this.symbolTable, ctx.text, ctx.start);
    if (node) {
      // set code to be the variable's name
      node.code = node.name;
      return node;
    }

    return new ASTNode();
  }

  visitAssignment(ctx: CommonParser.AssignmentContext): ASTNode {
    const newNode = new ASTNode();

    // make sure the name is defined in the current scope
    const idTerminal = ctx.IDENTIFIER();
    const node = this.errorHandler.assertNameDefined(
      this.symbolTable,
      idTerminal.text,
      idTerminal.symbol,
    );
    if (node) {
      // make sure the type is not const
      this.errorHandler.assertIdentifierTypeNotConst(node, idTerminal.symbol);

      // type-check declared type vs expression type
      const exprNode = super.visit(ctx.expression());
      this.errorHandler.assertNodeType(exprNode, node.type, ctx.expression());

      newNode.code = `${idTerminal.text} = ${exprNode.code}`;
    }

    return newNode;
  }

  visitAddAssignment(ctx: CommonParser.AddAssignmentContext): ASTNode {
    const newNode = new ASTNode();

    // make sure the name is defined in the current scope
    const idTerminal = ctx.IDENTIFIER();
    const node = this.errorHandler.assertNameDefined(
      this.symbolTable,
      idTerminal.text,
      idTerminal.symbol,
    );
    if (node) {
      // make sure the type is not const
      this.errorHandler.assertIdentifierTypeNotConst(node, idTerminal.symbol);

      // check allowed types
      const exprNode = super.visit(ctx.expression());
      const allowedTypes = [PanType.numberType(), PanType.textType()];
      this.errorHandler.assertNodeTypeAnyOf(exprNode, allowedTypes, ctx.expression());

      // type-check declared type vs expression type
      this.errorHandler.assertNodeType(exprNode, node.type, ctx.expression());

      newNode.code = `${idTerminal.text} += ${exprNode.code}`;
    }

    return newNode;
  }

  visitSubtractAssignment(ctx: CommonParser.SubtractAssignmentContext): ASTNode {
    const newNode = new ASTNode();

    // make sure the name is defined in the current scope
    const idTerminal = ctx.IDENTIFIER();
    const node = this.errorHandler.assertNameDefined(
      this.symbolTable,
      idTerminal.text,
      idTerminal.symbol,
    );
    if (node) {
      // make sure the type is not const
      this.errorHandler.assertIdentifierTypeNotConst(node, idTerminal.symbol);

      // check allowed types
      const exprNode = super.visit(ctx.expression());
      this.errorHandler.assertNodeTypeNumber(exprNode, ctx.expression());

      // type-check declared type vs expression type
      this.errorHandler.assertNodeType(exprNode, node.type, ctx.expression());

      newNode.code = `${idTerminal.text} -= ${exprNode.code}`;
    }

    return newNode;
  }

  visitMultiplyAssignment(ctx: CommonParser.MultiplyAssignmentContext): ASTNode {
    const newNode = new ASTNode();

    // make sure the name is defined in the current scope
    const idTerminal = ctx.IDENTIFIER();
    const node = this.errorHandler.assertNameDefined(
      this.symbolTable,
      idTerminal.text,
      idTerminal.symbol,
    );
    if (node) {
      // make sure the type is not const
      this.errorHandler.assertIdentifierTypeNotConst(node, idTerminal.symbol);

      // check allowed types
      const exprNode = super.visit(ctx.expression());
      this.errorHandler.assertNodeTypeNumber(exprNode, ctx.expression());

      // type-check declared type vs expression type
      this.errorHandler.assertNodeType(exprNode, node.type, ctx.expression());

      newNode.code = `${idTerminal.text} *= ${exprNode.code}`;
    }

    return newNode;
  }

  visitDivideAssignment(ctx: CommonParser.DivideAssignmentContext): ASTNode {
    // TODO: prevent division by zero in runtime
    const newNode = new ASTNode();

    // make sure the name is defined in the current scope
    const idTerminal = ctx.IDENTIFIER();
    const node = this.errorHandler.assertNameDefined(
      this.symbolTable,
      idTerminal.text,
      idTerminal.symbol,
    );
    if (node) {
      // make sure the type is not const
      this.errorHandler.assertIdentifierTypeNotConst(node, idTerminal.symbol);

      // check allowed types
      const exprNode = super.visit(ctx.expression());
      this.errorHandler.assertNodeTypeNumber(exprNode, ctx.expression());

      // type-check declared type vs expression type
      this.errorHandler.assertNodeType(exprNode, node.type, ctx.expression());

      newNode.code = `${idTerminal.text} /= ${exprNode.code}`;
    }

    return newNode;
  }

  visitRemainderAssignment(ctx: CommonParser.RemainderAssignmentContext): ASTNode {
    const newNode = new ASTNode();

    // make sure the name is defined in the current scope
    const idTerminal = ctx.IDENTIFIER();
    const node = this.errorHandler.assertNameDefined(
      this.symbolTable,
      idTerminal.text,
      idTerminal.symbol,
    );
    if (node) {
      // make sure the type is not const
      this.errorHandler.assertIdentifierTypeNotConst(node, idTerminal.symbol);

      // check allowed types
      const exprNode = super.visit(ctx.expression());
      this.errorHandler.assertNodeTypeNumber(exprNode, ctx.expression());

      // type-check declared type vs expression type
      this.errorHandler.assertNodeType(exprNode, node.type, ctx.expression());

      newNode.code = `${idTerminal.text} %= ${exprNode.code}`;
    }

    return newNode;
  }

  visitPowerAssignment(ctx: CommonParser.PowerAssignmentContext): ASTNode {
    const newNode = new ASTNode();

    // make sure the name is defined in the current scope
    const idTerminal = ctx.IDENTIFIER();
    const node = this.errorHandler.assertNameDefined(
      this.symbolTable,
      idTerminal.text,
      idTerminal.symbol,
    );
    if (node) {
      // make sure the type is not const
      this.errorHandler.assertIdentifierTypeNotConst(node, idTerminal.symbol);

      // check allowed types
      const exprNode = super.visit(ctx.expression());
      this.errorHandler.assertNodeTypeNumber(exprNode, ctx.expression());

      // type-check declared type vs expression type
      this.errorHandler.assertNodeType(exprNode, node.type, ctx.expression());

      newNode.code = `${idTerminal.text} = Math.pow(${idTerminal.text}, ${exprNode.code})`;
    }

    return newNode;
  }

  visitIfStatement(ctx: CommonParser.IfStatementContext): ASTNode {
    const newNode = new ASTNode();

    // if's expression should be logical type
    const exprNode = super.visit(ctx.expression());
    this.errorHandler.assertNodeTypeLogical(exprNode, ctx.expression());

    this.symbolTable.pushScope();
    newNode.code = `if (${exprNode.code}) {\r\n`;
    ctx.innerStatement().map((innerStatement: CommonParser.InnerStatementContext) => {
      newNode.code += super.visit(innerStatement).code + "\r\n";
    });
    newNode.code += "}";
    this.symbolTable.popScope();

    const optionalElseIfPartCtxList = ctx.elseIfPart();
    optionalElseIfPartCtxList.map((elseIfPartCtx: CommonParser.ElseIfPartContext) => {
      this.symbolTable.pushScope();
      newNode.code += super.visit(elseIfPartCtx).code;
      this.symbolTable.popScope();
    });

    const optionalElsePartCtx = ctx.elsePart();
    if (optionalElsePartCtx) {
      this.symbolTable.pushScope();
      newNode.code += super.visit(optionalElsePartCtx).code;
      this.symbolTable.popScope();
    }

    return newNode;
  }

  visitElseIfPart(ctx: CommonParser.ElseIfPartContext): ASTNode {
    const newNode = new ASTNode();

    // else-if's expression should be logical type
    const exprNode = super.visit(ctx.expression());
    this.errorHandler.assertNodeTypeLogical(exprNode, ctx.expression());

    newNode.code = `\r\nelse if (${exprNode.code}) {\r\n`;
    ctx.innerStatement().map((innerStatementCtx: CommonParser.InnerStatementContext) => {
      newNode.code += super.visit(innerStatementCtx).code + "\r\n";
    });
    newNode.code += "}";

    return newNode;
  }

  visitElsePart(ctx: CommonParser.ElsePartContext): ASTNode {
    const newNode = new ASTNode();

    newNode.code = "\r\nelse {\r\n";
    ctx.innerStatement().map((innerStatementCtx: CommonParser.InnerStatementContext) => {
      newNode.code += super.visit(innerStatementCtx).code + "\r\n";
    });
    newNode.code += "}";

    return newNode;
  }

  visitForFromToStatement(ctx: CommonParser.ForFromToStatementContext): ASTNode {
    const newNode = new ASTNode();

    // make sure the name is not yet defined
    const idTerminal = ctx.IDENTIFIER();
    this.errorHandler.assertNameNotDefined(this.symbolTable, idTerminal.text, idTerminal.symbol);

    // create the node for the iterator variable
    const typeNode = super.visit(ctx.type());
    const innerNode = new ASTNode();
    innerNode.name = idTerminal.text;
    innerNode.type = typeNode.type;
    innerNode.code = idTerminal.text;

    // make sure all types are numeric
    // TODO: fix error message in "for text x from 1 to 2"
    this.errorHandler.assertNodeTypeNumber(innerNode, ctx.type());
    const exprFrom = super.visit(ctx.expression(0));
    this.errorHandler.assertNodeTypeNumber(exprFrom, ctx.expression(0));
    const exprTo = super.visit(ctx.expression(1));
    this.errorHandler.assertNodeTypeNumber(exprTo, ctx.expression(1));

    // add iterator variable to inner scope
    this.symbolTable.pushScope();
    this.symbolTable.pushNode(innerNode);

    const sizePart = `Math.abs(${exprTo.code} - ${exprFrom.code}) + 1`;
    const stepPart = `(${exprFrom.code} > ${exprTo.code}) ? -1 : 1`;
    const arrayPart = `[...Array(${sizePart}).keys()].map(i => ${exprFrom.code} + i * (${stepPart}))`;
    newNode.code += `for (let ${idTerminal.text} of ${arrayPart}) {\r\n`;
    ctx.innerStatement().map((innerStatementCtx: CommonParser.InnerStatementContext) => {
      newNode.code += super.visit(innerStatementCtx).code + "\r\n";
    });
    newNode.code += "}";

    this.symbolTable.popScope();

    return newNode;
  }

  visitWhileStatement(ctx: CommonParser.WhileStatementContext): ASTNode {
    const newNode = new ASTNode();

    // while's expression should be logical type
    const exprNode = super.visit(ctx.expression());
    this.errorHandler.assertNodeTypeLogical(exprNode, ctx.expression());

    this.symbolTable.pushScope();
    newNode.code = `while (${exprNode.code}) {\r\n`;
    ctx.innerStatement().map((innerStatementCtx: CommonParser.InnerStatementContext) => {
      newNode.code += super.visit(innerStatementCtx).code + "\r\n";
    });
    newNode.code += "}";
    this.symbolTable.popScope();

    return newNode;
  }

  visitForeverStatement(ctx: CommonParser.ForeverStatementContext): ASTNode {
    const newNode = new ASTNode();

    this.symbolTable.pushScope();
    newNode.code = `while (true) {\r\n`;
    ctx.innerStatement().map((innerStatementCtx: CommonParser.InnerStatementContext) => {
      newNode.code += super.visit(innerStatementCtx).code + "\r\n";
    });
    newNode.code += "}";
    this.symbolTable.popScope();

    return newNode;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visitBreakStatement(ctx: CommonParser.BreakStatementContext): ASTNode {
    const newNode = new ASTNode();

    newNode.code = "break";

    return newNode;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visitContinueStatement(ctx: CommonParser.ContinueStatementContext): ASTNode {
    const newNode = new ASTNode();

    newNode.code = "continue";

    return newNode;
  }

  visitFunctionCall(ctx: CommonParser.FunctionCallContext): ASTNode {
    const newNode = new ASTNode();

    const idTerminal = ctx.IDENTIFIER();
    this.errorHandler.assertNameDefinedInGlobalScope(this.symbolTable, idTerminal.text, ctx.start);

    const node = this.symbolTable.findByNameInGlobalScope(idTerminal.text);
    newNode.name = idTerminal.text;
    if (node) {
      newNode.type = node.type;
    }

    const optionalArgListCtx = ctx.argumentList();
    newNode.code = `${idTerminal.text}(`;
    if (optionalArgListCtx) {
      newNode.code += super.visit(optionalArgListCtx).code;
    }
    newNode.code += ")";

    return newNode;
  }

  visitArgumentList(ctx: CommonParser.ArgumentListContext): ASTNode {
    const newNode = new ASTNode();

    // type check all the arguments
    const parentCtx = ctx.parent as CommonParser.FunctionCallContext;
    const funcIdTerminal = parentCtx.IDENTIFIER();
    const funcNode = this.symbolTable.findByNameInGlobalScope(funcIdTerminal.text);
    const exprCtxList = ctx.expression();
    if (funcNode) {
      this.errorHandler.assertArgumentsNumber(
        funcIdTerminal.text,
        funcNode.argList.length,
        exprCtxList.length,
        parentCtx,
      );
    }

    let i = 0;
    exprCtxList.map((exprCtx: CommonParser.ExpressionContext) => {
      const exprNode = super.visit(exprCtx);

      // type check current argument
      if (funcNode) {
        this.errorHandler.assertNodeType(exprNode, funcNode.argList[i][1], exprCtx);
      }

      newNode.code += exprNode.code + ",";
      i += 1;
    });

    return newNode;
  }

  visitReturnStatement(ctx: CommonParser.ReturnStatementContext): ASTNode {
    const newNode = new ASTNode();

    const optionalExprCtx = ctx.expression();
    const node = this.symbolTable.findCurrentFunction();
    if (node) {
      if (optionalExprCtx) {
        // make sure it is the same type as the function we're returning from
        const exprNode = super.visit(optionalExprCtx);
        this.errorHandler.assertNodeType(exprNode, node.type, optionalExprCtx);

        newNode.code = `return ${exprNode.code}`;
      } else {
        // make sure the function does not return a type
        this.errorHandler.assertNodeType(node, new PanType(), ctx);

        newNode.code = "return";
      }
    }

    return newNode;
  }
}
