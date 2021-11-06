// Generated from C:\Users\HORUS\Desktop\tcc\src\languages\common\CommonParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { AssignmentContext } from "./CommonParser";
import { AddAssignmentContext } from "./CommonParser";
import { SubtractAssignmentContext } from "./CommonParser";
import { MultiplyAssignmentContext } from "./CommonParser";
import { DivideAssignmentContext } from "./CommonParser";
import { RemainderAssignmentContext } from "./CommonParser";
import { PowerAssignmentContext } from "./CommonParser";
import { InterpolatedSimpleTextContext } from "./CommonParser";
import { InterpolatedExpressionTextContext } from "./CommonParser";
import { LogicalTypeContext } from "./CommonParser";
import { NumberTypeContext } from "./CommonParser";
import { TextTypeContext } from "./CommonParser";
import { SimpleTextLiteralContext } from "./CommonParser";
import { InterpolatedTextLiteralContext } from "./CommonParser";
import { ParenthesisExpressionContext } from "./CommonParser";
import { PlusExpressionContext } from "./CommonParser";
import { MinusExpressionContext } from "./CommonParser";
import { NotExpressionContext } from "./CommonParser";
import { PowerExpressionContext } from "./CommonParser";
import { MultiplyExpressionContext } from "./CommonParser";
import { DivideExpressionContext } from "./CommonParser";
import { RemainderExpressionContext } from "./CommonParser";
import { AddExpressionContext } from "./CommonParser";
import { SubtractExpressionContext } from "./CommonParser";
import { LessExpressionContext } from "./CommonParser";
import { LessEqualExpressionContext } from "./CommonParser";
import { GreaterExpressionContext } from "./CommonParser";
import { GreaterEqualExpressionContext } from "./CommonParser";
import { EqualExpressionContext } from "./CommonParser";
import { DifferentExpressionContext } from "./CommonParser";
import { AndExpressionContext } from "./CommonParser";
import { OrExpressionContext } from "./CommonParser";
import { AtomExpressionContext } from "./CommonParser";
import { TrueAtomContext } from "./CommonParser";
import { FalseAtomContext } from "./CommonParser";
import { NumberAtomContext } from "./CommonParser";
import { TextAtomContext } from "./CommonParser";
import { FunctionCallAtomContext } from "./CommonParser";
import { IdentifierAtomContext } from "./CommonParser";
import { ProgramContext } from "./CommonParser";
import { TopStatementContext } from "./CommonParser";
import { InnerStatementContext } from "./CommonParser";
import { StatementContext } from "./CommonParser";
import { GlobalStatementContext } from "./CommonParser";
import { FunctionDeclarationContext } from "./CommonParser";
import { ParameterListContext } from "./CommonParser";
import { VariableDeclarationContext } from "./CommonParser";
import { TypeContext } from "./CommonParser";
import { ExpressionContext } from "./CommonParser";
import { AtomContext } from "./CommonParser";
import { NumberLiteralContext } from "./CommonParser";
import { TextLiteralContext } from "./CommonParser";
import { InterpolatedTextContext } from "./CommonParser";
import { FunctionCallContext } from "./CommonParser";
import { ArgumentListContext } from "./CommonParser";
import { VariableAssignmentContext } from "./CommonParser";
import { IfStatementContext } from "./CommonParser";
import { ElseIfPartContext } from "./CommonParser";
import { ElsePartContext } from "./CommonParser";
import { ForFromToStatementContext } from "./CommonParser";
import { WhileStatementContext } from "./CommonParser";
import { ForeverStatementContext } from "./CommonParser";
import { BreakStatementContext } from "./CommonParser";
import { ContinueStatementContext } from "./CommonParser";
import { ReturnStatementContext } from "./CommonParser";
import { EosContext } from "./CommonParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CommonParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CommonParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `assignment`
	 * labeled alternative in `CommonParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `addAssignment`
	 * labeled alternative in `CommonParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddAssignment?: (ctx: AddAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `subtractAssignment`
	 * labeled alternative in `CommonParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtractAssignment?: (ctx: SubtractAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `multiplyAssignment`
	 * labeled alternative in `CommonParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyAssignment?: (ctx: MultiplyAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `divideAssignment`
	 * labeled alternative in `CommonParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivideAssignment?: (ctx: DivideAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `remainderAssignment`
	 * labeled alternative in `CommonParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemainderAssignment?: (ctx: RemainderAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `powerAssignment`
	 * labeled alternative in `CommonParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerAssignment?: (ctx: PowerAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `interpolatedSimpleText`
	 * labeled alternative in `CommonParser.interpolatedText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolatedSimpleText?: (ctx: InterpolatedSimpleTextContext) => Result;

	/**
	 * Visit a parse tree produced by the `interpolatedExpressionText`
	 * labeled alternative in `CommonParser.interpolatedText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolatedExpressionText?: (ctx: InterpolatedExpressionTextContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalType`
	 * labeled alternative in `CommonParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalType?: (ctx: LogicalTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberType`
	 * labeled alternative in `CommonParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberType?: (ctx: NumberTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `textType`
	 * labeled alternative in `CommonParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextType?: (ctx: TextTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `simpleTextLiteral`
	 * labeled alternative in `CommonParser.textLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleTextLiteral?: (ctx: SimpleTextLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `interpolatedTextLiteral`
	 * labeled alternative in `CommonParser.textLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolatedTextLiteral?: (ctx: InterpolatedTextLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesisExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisExpression?: (ctx: ParenthesisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `plusExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlusExpression?: (ctx: PlusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `minusExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinusExpression?: (ctx: MinusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `notExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `powerExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerExpression?: (ctx: PowerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `multiplyExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyExpression?: (ctx: MultiplyExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `divideExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivideExpression?: (ctx: DivideExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `remainderExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemainderExpression?: (ctx: RemainderExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `addExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddExpression?: (ctx: AddExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `subtractExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtractExpression?: (ctx: SubtractExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `lessExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessExpression?: (ctx: LessExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `lessEqualExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessEqualExpression?: (ctx: LessEqualExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `greaterExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterExpression?: (ctx: GreaterExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `greaterEqualExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterEqualExpression?: (ctx: GreaterEqualExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `equalExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualExpression?: (ctx: EqualExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `differentExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDifferentExpression?: (ctx: DifferentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `andExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `orExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpression?: (ctx: OrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `atomExpression`
	 * labeled alternative in `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomExpression?: (ctx: AtomExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `trueAtom`
	 * labeled alternative in `CommonParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrueAtom?: (ctx: TrueAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `falseAtom`
	 * labeled alternative in `CommonParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFalseAtom?: (ctx: FalseAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberAtom`
	 * labeled alternative in `CommonParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberAtom?: (ctx: NumberAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `textAtom`
	 * labeled alternative in `CommonParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextAtom?: (ctx: TextAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallAtom`
	 * labeled alternative in `CommonParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallAtom?: (ctx: FunctionCallAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierAtom`
	 * labeled alternative in `CommonParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierAtom?: (ctx: IdentifierAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.topStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopStatement?: (ctx: TopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.innerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInnerStatement?: (ctx: InnerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.globalStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalStatement?: (ctx: GlobalStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.numberLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberLiteral?: (ctx: NumberLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.textLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextLiteral?: (ctx: TextLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.interpolatedText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolatedText?: (ctx: InterpolatedTextContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableAssignment?: (ctx: VariableAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.elseIfPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfPart?: (ctx: ElseIfPartContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.elsePart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElsePart?: (ctx: ElsePartContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.forFromToStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForFromToStatement?: (ctx: ForFromToStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.foreverStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeverStatement?: (ctx: ForeverStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CommonParser.eos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEos?: (ctx: EosContext) => Result;
}

