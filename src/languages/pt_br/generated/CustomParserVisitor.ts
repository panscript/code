// Generated from C:\Users\HORUS\Desktop\tcc\src\languages\pt_br\CustomParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { AssignmentContext } from "./CustomParser";
import { AddAssignmentContext } from "./CustomParser";
import { SubtractAssignmentContext } from "./CustomParser";
import { MultiplyAssignmentContext } from "./CustomParser";
import { DivideAssignmentContext } from "./CustomParser";
import { RemainderAssignmentContext } from "./CustomParser";
import { PowerAssignmentContext } from "./CustomParser";
import { InterpolatedSimpleTextContext } from "./CustomParser";
import { InterpolatedExpressionTextContext } from "./CustomParser";
import { LogicalTypeContext } from "./CustomParser";
import { NumberTypeContext } from "./CustomParser";
import { TextTypeContext } from "./CustomParser";
import { SimpleTextLiteralContext } from "./CustomParser";
import { InterpolatedTextLiteralContext } from "./CustomParser";
import { ParenthesisExpressionContext } from "./CustomParser";
import { PlusExpressionContext } from "./CustomParser";
import { MinusExpressionContext } from "./CustomParser";
import { NotExpressionContext } from "./CustomParser";
import { PowerExpressionContext } from "./CustomParser";
import { MultiplyExpressionContext } from "./CustomParser";
import { DivideExpressionContext } from "./CustomParser";
import { RemainderExpressionContext } from "./CustomParser";
import { AddExpressionContext } from "./CustomParser";
import { SubtractExpressionContext } from "./CustomParser";
import { LessExpressionContext } from "./CustomParser";
import { LessEqualExpressionContext } from "./CustomParser";
import { GreaterExpressionContext } from "./CustomParser";
import { GreaterEqualExpressionContext } from "./CustomParser";
import { EqualExpressionContext } from "./CustomParser";
import { DifferentExpressionContext } from "./CustomParser";
import { AndExpressionContext } from "./CustomParser";
import { OrExpressionContext } from "./CustomParser";
import { AtomExpressionContext } from "./CustomParser";
import { TrueAtomContext } from "./CustomParser";
import { FalseAtomContext } from "./CustomParser";
import { NumberAtomContext } from "./CustomParser";
import { TextAtomContext } from "./CustomParser";
import { FunctionCallAtomContext } from "./CustomParser";
import { IdentifierAtomContext } from "./CustomParser";
import { ProgramContext } from "./CustomParser";
import { TopStatementContext } from "./CustomParser";
import { InnerStatementContext } from "./CustomParser";
import { StatementContext } from "./CustomParser";
import { GlobalStatementContext } from "./CustomParser";
import { FunctionDeclarationContext } from "./CustomParser";
import { ParameterListContext } from "./CustomParser";
import { VariableDeclarationContext } from "./CustomParser";
import { TypeContext } from "./CustomParser";
import { ExpressionContext } from "./CustomParser";
import { AtomContext } from "./CustomParser";
import { NumberLiteralContext } from "./CustomParser";
import { TextLiteralContext } from "./CustomParser";
import { InterpolatedTextContext } from "./CustomParser";
import { FunctionCallContext } from "./CustomParser";
import { ArgumentListContext } from "./CustomParser";
import { VariableAssignmentContext } from "./CustomParser";
import { IfStatementContext } from "./CustomParser";
import { ElseIfPartContext } from "./CustomParser";
import { ElsePartContext } from "./CustomParser";
import { ForFromToStatementContext } from "./CustomParser";
import { WhileStatementContext } from "./CustomParser";
import { ForeverStatementContext } from "./CustomParser";
import { BreakStatementContext } from "./CustomParser";
import { ContinueStatementContext } from "./CustomParser";
import { ReturnStatementContext } from "./CustomParser";
import { EosContext } from "./CustomParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CustomParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CustomParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `assignment`
	 * labeled alternative in `CustomParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `addAssignment`
	 * labeled alternative in `CustomParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddAssignment?: (ctx: AddAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `subtractAssignment`
	 * labeled alternative in `CustomParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtractAssignment?: (ctx: SubtractAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `multiplyAssignment`
	 * labeled alternative in `CustomParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyAssignment?: (ctx: MultiplyAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `divideAssignment`
	 * labeled alternative in `CustomParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivideAssignment?: (ctx: DivideAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `remainderAssignment`
	 * labeled alternative in `CustomParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemainderAssignment?: (ctx: RemainderAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `powerAssignment`
	 * labeled alternative in `CustomParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerAssignment?: (ctx: PowerAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `interpolatedSimpleText`
	 * labeled alternative in `CustomParser.interpolatedText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolatedSimpleText?: (ctx: InterpolatedSimpleTextContext) => Result;

	/**
	 * Visit a parse tree produced by the `interpolatedExpressionText`
	 * labeled alternative in `CustomParser.interpolatedText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolatedExpressionText?: (ctx: InterpolatedExpressionTextContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalType`
	 * labeled alternative in `CustomParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalType?: (ctx: LogicalTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberType`
	 * labeled alternative in `CustomParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberType?: (ctx: NumberTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `textType`
	 * labeled alternative in `CustomParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextType?: (ctx: TextTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `simpleTextLiteral`
	 * labeled alternative in `CustomParser.textLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleTextLiteral?: (ctx: SimpleTextLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `interpolatedTextLiteral`
	 * labeled alternative in `CustomParser.textLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolatedTextLiteral?: (ctx: InterpolatedTextLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesisExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisExpression?: (ctx: ParenthesisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `plusExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlusExpression?: (ctx: PlusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `minusExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinusExpression?: (ctx: MinusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `notExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `powerExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerExpression?: (ctx: PowerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `multiplyExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyExpression?: (ctx: MultiplyExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `divideExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivideExpression?: (ctx: DivideExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `remainderExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemainderExpression?: (ctx: RemainderExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `addExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddExpression?: (ctx: AddExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `subtractExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtractExpression?: (ctx: SubtractExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `lessExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessExpression?: (ctx: LessExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `lessEqualExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessEqualExpression?: (ctx: LessEqualExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `greaterExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterExpression?: (ctx: GreaterExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `greaterEqualExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterEqualExpression?: (ctx: GreaterEqualExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `equalExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualExpression?: (ctx: EqualExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `differentExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDifferentExpression?: (ctx: DifferentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `andExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `orExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpression?: (ctx: OrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `atomExpression`
	 * labeled alternative in `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomExpression?: (ctx: AtomExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `trueAtom`
	 * labeled alternative in `CustomParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrueAtom?: (ctx: TrueAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `falseAtom`
	 * labeled alternative in `CustomParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFalseAtom?: (ctx: FalseAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberAtom`
	 * labeled alternative in `CustomParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberAtom?: (ctx: NumberAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `textAtom`
	 * labeled alternative in `CustomParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextAtom?: (ctx: TextAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallAtom`
	 * labeled alternative in `CustomParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallAtom?: (ctx: FunctionCallAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierAtom`
	 * labeled alternative in `CustomParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierAtom?: (ctx: IdentifierAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.topStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopStatement?: (ctx: TopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.innerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInnerStatement?: (ctx: InnerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.globalStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalStatement?: (ctx: GlobalStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.numberLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberLiteral?: (ctx: NumberLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.textLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextLiteral?: (ctx: TextLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.interpolatedText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolatedText?: (ctx: InterpolatedTextContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableAssignment?: (ctx: VariableAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.elseIfPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfPart?: (ctx: ElseIfPartContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.elsePart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElsePart?: (ctx: ElsePartContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.forFromToStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForFromToStatement?: (ctx: ForFromToStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.foreverStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeverStatement?: (ctx: ForeverStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomParser.eos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEos?: (ctx: EosContext) => Result;
}

