// Generated from C:\Users\HORUS\Desktop\tcc\src\languages\common\CommonParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CommonParserVisitor } from "./CommonParserVisitor";


export class CommonParser extends Parser {
	public static readonly TEXT_CONTENT = 1;
	public static readonly TRUE = 2;
	public static readonly FALSE = 3;
	public static readonly BREAK = 4;
	public static readonly CONSTANT = 5;
	public static readonly CONTINUE = 6;
	public static readonly ELSE = 7;
	public static readonly END = 8;
	public static readonly FOR = 9;
	public static readonly FOREVER = 10;
	public static readonly FROM = 11;
	public static readonly FUNCTION = 12;
	public static readonly GLOBAL = 13;
	public static readonly IF = 14;
	public static readonly RETURN = 15;
	public static readonly RETURNS = 16;
	public static readonly TO = 17;
	public static readonly WHILE = 18;
	public static readonly ASSIGN = 19;
	public static readonly ADD = 20;
	public static readonly SUBTRACT = 21;
	public static readonly MULTIPLY = 22;
	public static readonly DIVIDE = 23;
	public static readonly REMAINDER = 24;
	public static readonly POWER = 25;
	public static readonly ADD_ASSIGN = 26;
	public static readonly SUBTRACT_ASSIGN = 27;
	public static readonly MULTIPLY_ASSIGN = 28;
	public static readonly DIVIDE_ASSIGN = 29;
	public static readonly REMAINDER_ASSIGN = 30;
	public static readonly POWER_ASSIGN = 31;
	public static readonly LESS = 32;
	public static readonly LESS_OR_EQUAL = 33;
	public static readonly GREATER = 34;
	public static readonly GREATER_OR_EQUAL = 35;
	public static readonly EQUAL = 36;
	public static readonly DIFFERENT = 37;
	public static readonly AND = 38;
	public static readonly OR = 39;
	public static readonly NOT = 40;
	public static readonly LOGICAL = 41;
	public static readonly NUMBER = 42;
	public static readonly TEXT = 43;
	public static readonly OPEN_PARENTHESIS = 44;
	public static readonly CLOSE_PARENTHESIS = 45;
	public static readonly OPEN_BRACKET = 46;
	public static readonly CLOSE_BRACKET = 47;
	public static readonly OPEN_BRACE = 48;
	public static readonly CLOSE_BRACE = 49;
	public static readonly DOT = 50;
	public static readonly COMMA = 51;
	public static readonly QUOTE_SINGLE = 52;
	public static readonly QUOTE_DOUBLE = 53;
	public static readonly IDENTIFIER = 54;
	public static readonly DECIMAL_NUMBER = 55;
	public static readonly HEX_NUMBER = 56;
	public static readonly BINARY_NUMBER = 57;
	public static readonly NEWLINE = 58;
	public static readonly WHITESPACE = 59;
	public static readonly LINE_COMMENT = 60;
	public static readonly BLOCK_COMMENT = 61;
	public static readonly UNKNOWN = 62;
	public static readonly SINGLE_QUOTE_NEWLINE = 63;
	public static readonly DOUBLE_QUOTE_NEWLINE = 64;
	public static readonly RULE_program = 0;
	public static readonly RULE_topStatement = 1;
	public static readonly RULE_innerStatement = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_globalStatement = 4;
	public static readonly RULE_functionDeclaration = 5;
	public static readonly RULE_parameterList = 6;
	public static readonly RULE_variableDeclaration = 7;
	public static readonly RULE_type = 8;
	public static readonly RULE_expression = 9;
	public static readonly RULE_atom = 10;
	public static readonly RULE_numberLiteral = 11;
	public static readonly RULE_textLiteral = 12;
	public static readonly RULE_interpolatedText = 13;
	public static readonly RULE_functionCall = 14;
	public static readonly RULE_argumentList = 15;
	public static readonly RULE_variableAssignment = 16;
	public static readonly RULE_ifStatement = 17;
	public static readonly RULE_elseIfPart = 18;
	public static readonly RULE_elsePart = 19;
	public static readonly RULE_forFromToStatement = 20;
	public static readonly RULE_whileStatement = 21;
	public static readonly RULE_foreverStatement = 22;
	public static readonly RULE_breakStatement = 23;
	public static readonly RULE_continueStatement = 24;
	public static readonly RULE_returnStatement = 25;
	public static readonly RULE_eos = 26;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "topStatement", "innerStatement", "statement", "globalStatement", 
		"functionDeclaration", "parameterList", "variableDeclaration", "type", 
		"expression", "atom", "numberLiteral", "textLiteral", "interpolatedText", 
		"functionCall", "argumentList", "variableAssignment", "ifStatement", "elseIfPart", 
		"elsePart", "forFromToStatement", "whileStatement", "foreverStatement", 
		"breakStatement", "continueStatement", "returnStatement", "eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'true'", "'false'", "'break'", "'constant'", "'continue'", 
		"'else'", "'end'", "'for'", "'forever'", "'from'", "'function'", "'global'", 
		"'if'", "'return'", "'returns'", "'to'", "'while'", "'='", "'+'", "'-'", 
		"'*'", "'/'", "'%'", "'^'", "'+='", "'-='", "'*='", "'/='", "'%='", "'^='", 
		"'<'", "'<='", "'>'", "'>='", "'=='", "'!='", undefined, undefined, undefined, 
		"'logical'", "'number'", "'text'", "'('", "')'", "'['", "']'", "'{'", 
		"'}'", "'.'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "TEXT_CONTENT", "TRUE", "FALSE", "BREAK", "CONSTANT", "CONTINUE", 
		"ELSE", "END", "FOR", "FOREVER", "FROM", "FUNCTION", "GLOBAL", "IF", "RETURN", 
		"RETURNS", "TO", "WHILE", "ASSIGN", "ADD", "SUBTRACT", "MULTIPLY", "DIVIDE", 
		"REMAINDER", "POWER", "ADD_ASSIGN", "SUBTRACT_ASSIGN", "MULTIPLY_ASSIGN", 
		"DIVIDE_ASSIGN", "REMAINDER_ASSIGN", "POWER_ASSIGN", "LESS", "LESS_OR_EQUAL", 
		"GREATER", "GREATER_OR_EQUAL", "EQUAL", "DIFFERENT", "AND", "OR", "NOT", 
		"LOGICAL", "NUMBER", "TEXT", "OPEN_PARENTHESIS", "CLOSE_PARENTHESIS", 
		"OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_BRACE", "CLOSE_BRACE", "DOT", "COMMA", 
		"QUOTE_SINGLE", "QUOTE_DOUBLE", "IDENTIFIER", "DECIMAL_NUMBER", "HEX_NUMBER", 
		"BINARY_NUMBER", "NEWLINE", "WHITESPACE", "LINE_COMMENT", "BLOCK_COMMENT", 
		"UNKNOWN", "SINGLE_QUOTE_NEWLINE", "DOUBLE_QUOTE_NEWLINE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CommonParser._LITERAL_NAMES, CommonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CommonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CommonParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CommonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CommonParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CommonParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CommonParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CommonParser.NEWLINE) {
				{
				{
				this.state = 54;
				this.match(CommonParser.NEWLINE);
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommonParser.CONSTANT) | (1 << CommonParser.FOR) | (1 << CommonParser.FOREVER) | (1 << CommonParser.FUNCTION) | (1 << CommonParser.IF) | (1 << CommonParser.WHILE))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (CommonParser.LOGICAL - 41)) | (1 << (CommonParser.NUMBER - 41)) | (1 << (CommonParser.TEXT - 41)) | (1 << (CommonParser.IDENTIFIER - 41)))) !== 0)) {
				{
				{
				this.state = 60;
				this.topStatement();
				}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topStatement(): TopStatementContext {
		let _localctx: TopStatementContext = new TopStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CommonParser.RULE_topStatement);
		try {
			this.state = 70;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CommonParser.FUNCTION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 66;
				this.functionDeclaration();
				this.state = 67;
				this.eos();
				}
				break;
			case CommonParser.CONSTANT:
			case CommonParser.FOR:
			case CommonParser.FOREVER:
			case CommonParser.IF:
			case CommonParser.WHILE:
			case CommonParser.LOGICAL:
			case CommonParser.NUMBER:
			case CommonParser.TEXT:
			case CommonParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 69;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public innerStatement(): InnerStatementContext {
		let _localctx: InnerStatementContext = new InnerStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CommonParser.RULE_innerStatement);
		try {
			this.state = 85;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CommonParser.GLOBAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 72;
				this.globalStatement();
				this.state = 73;
				this.eos();
				}
				break;
			case CommonParser.BREAK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 75;
				this.breakStatement();
				this.state = 76;
				this.eos();
				}
				break;
			case CommonParser.CONTINUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 78;
				this.continueStatement();
				this.state = 79;
				this.eos();
				}
				break;
			case CommonParser.RETURN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 81;
				this.returnStatement();
				this.state = 82;
				this.eos();
				}
				break;
			case CommonParser.CONSTANT:
			case CommonParser.FOR:
			case CommonParser.FOREVER:
			case CommonParser.IF:
			case CommonParser.WHILE:
			case CommonParser.LOGICAL:
			case CommonParser.NUMBER:
			case CommonParser.TEXT:
			case CommonParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 84;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CommonParser.RULE_statement);
		try {
			this.state = 108;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 87;
				this.variableDeclaration();
				this.state = 88;
				this.eos();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 90;
				this.variableAssignment();
				this.state = 91;
				this.eos();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 93;
				this.ifStatement();
				this.state = 94;
				this.eos();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 96;
				this.forFromToStatement();
				this.state = 97;
				this.eos();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 99;
				this.whileStatement();
				this.state = 100;
				this.eos();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 102;
				this.foreverStatement();
				this.state = 103;
				this.eos();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 105;
				this.functionCall();
				this.state = 106;
				this.eos();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public globalStatement(): GlobalStatementContext {
		let _localctx: GlobalStatementContext = new GlobalStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CommonParser.RULE_globalStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(CommonParser.GLOBAL);
			this.state = 111;
			this.match(CommonParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CommonParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(CommonParser.FUNCTION);
			this.state = 114;
			this.match(CommonParser.IDENTIFIER);
			this.state = 115;
			this.match(CommonParser.OPEN_PARENTHESIS);
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (CommonParser.LOGICAL - 41)) | (1 << (CommonParser.NUMBER - 41)) | (1 << (CommonParser.TEXT - 41)))) !== 0)) {
				{
				this.state = 116;
				this.parameterList();
				}
			}

			this.state = 119;
			this.match(CommonParser.CLOSE_PARENTHESIS);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CommonParser.RETURNS) {
				{
				this.state = 120;
				this.match(CommonParser.RETURNS);
				this.state = 121;
				this.type();
				}
			}

			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 124;
				this.match(CommonParser.NEWLINE);
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CommonParser.NEWLINE);
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommonParser.BREAK) | (1 << CommonParser.CONSTANT) | (1 << CommonParser.CONTINUE) | (1 << CommonParser.FOR) | (1 << CommonParser.FOREVER) | (1 << CommonParser.GLOBAL) | (1 << CommonParser.IF) | (1 << CommonParser.RETURN) | (1 << CommonParser.WHILE))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (CommonParser.LOGICAL - 41)) | (1 << (CommonParser.NUMBER - 41)) | (1 << (CommonParser.TEXT - 41)) | (1 << (CommonParser.IDENTIFIER - 41)))) !== 0)) {
				{
				{
				this.state = 129;
				this.innerStatement();
				}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 135;
			this.match(CommonParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CommonParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.type();
			this.state = 138;
			this.match(CommonParser.IDENTIFIER);
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CommonParser.COMMA) {
				{
				{
				this.state = 139;
				this.match(CommonParser.COMMA);
				this.state = 140;
				this.type();
				this.state = 141;
				this.match(CommonParser.IDENTIFIER);
				}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CommonParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CommonParser.CONSTANT) {
				{
				this.state = 148;
				this.match(CommonParser.CONSTANT);
				}
			}

			this.state = 151;
			this.type();
			this.state = 152;
			this.match(CommonParser.IDENTIFIER);
			this.state = 153;
			this.match(CommonParser.ASSIGN);
			this.state = 154;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CommonParser.RULE_type);
		try {
			this.state = 159;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CommonParser.LOGICAL:
				_localctx = new LogicalTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 156;
				this.match(CommonParser.LOGICAL);
				}
				break;
			case CommonParser.NUMBER:
				_localctx = new NumberTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 157;
				this.match(CommonParser.NUMBER);
				}
				break;
			case CommonParser.TEXT:
				_localctx = new TextTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 158;
				this.match(CommonParser.TEXT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, CommonParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CommonParser.OPEN_PARENTHESIS:
				{
				_localctx = new ParenthesisExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 162;
				this.match(CommonParser.OPEN_PARENTHESIS);
				this.state = 163;
				this.expression(0);
				this.state = 164;
				this.match(CommonParser.CLOSE_PARENTHESIS);
				}
				break;
			case CommonParser.ADD:
				{
				_localctx = new PlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 166;
				this.match(CommonParser.ADD);
				this.state = 167;
				this.expression(18);
				}
				break;
			case CommonParser.SUBTRACT:
				{
				_localctx = new MinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 168;
				this.match(CommonParser.SUBTRACT);
				this.state = 169;
				this.expression(17);
				}
				break;
			case CommonParser.NOT:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 170;
				this.match(CommonParser.NOT);
				this.state = 171;
				this.expression(16);
				}
				break;
			case CommonParser.TRUE:
			case CommonParser.FALSE:
			case CommonParser.QUOTE_SINGLE:
			case CommonParser.QUOTE_DOUBLE:
			case CommonParser.IDENTIFIER:
			case CommonParser.DECIMAL_NUMBER:
			case CommonParser.HEX_NUMBER:
			case CommonParser.BINARY_NUMBER:
				{
				_localctx = new AtomExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 172;
				this.atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 219;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 217;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CommonParser.RULE_expression);
						this.state = 175;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 176;
						this.match(CommonParser.POWER);
						this.state = 177;
						this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new MultiplyExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CommonParser.RULE_expression);
						this.state = 178;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 179;
						this.match(CommonParser.MULTIPLY);
						this.state = 180;
						this.expression(15);
						}
						break;

					case 3:
						{
						_localctx = new DivideExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CommonParser.RULE_expression);
						this.state = 181;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 182;
						this.match(CommonParser.DIVIDE);
						this.state = 183;
						this.expression(14);
						}
						break;

					case 4:
						{
						_localctx = new RemainderExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CommonParser.RULE_expression);
						this.state = 184;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 185;
						this.match(CommonParser.REMAINDER);
						this.state = 186;
						this.expression(13);
						}
						break;

					case 5:
						{
						_localctx = new AddExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CommonParser.RULE_expression);
						this.state = 187;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 188;
						this.match(CommonParser.ADD);
						this.state = 189;
						this.expression(12);
						}
						break;

					case 6:
						{
						_localctx = new SubtractExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CommonParser.RULE_expression);
						this.state = 190;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 191;
						this.match(CommonParser.SUBTRACT);
						this.state = 192;
						this.expression(11);
						}
						break;

					case 7:
						{
						_localctx = new LessExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CommonParser.RULE_expression);
						this.state = 193;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 194;
						this.match(CommonParser.LESS);
						this.state = 195;
						this.expression(10);
						}
						break;

					case 8:
						{
						_localctx = new LessEqualExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CommonParser.RULE_expression);
						this.state = 196;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 197;
						this.match(CommonParser.LESS_OR_EQUAL);
						this.state = 198;
						this.expression(9);
						}
						break;

					case 9:
						{
						_localctx = new GreaterExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CommonParser.RULE_expression);
						this.state = 199;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 200;
						this.match(CommonParser.GREATER);
						this.state = 201;
						this.expression(8);
						}
						break;

					case 10:
						{
						_localctx = new GreaterEqualExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CommonParser.RULE_expression);
						this.state = 202;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 203;
						this.match(CommonParser.GREATER_OR_EQUAL);
						this.state = 204;
						this.expression(7);
						}
						break;

					case 11:
						{
						_localctx = new EqualExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CommonParser.RULE_expression);
						this.state = 205;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 206;
						this.match(CommonParser.EQUAL);
						this.state = 207;
						this.expression(6);
						}
						break;

					case 12:
						{
						_localctx = new DifferentExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CommonParser.RULE_expression);
						this.state = 208;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 209;
						this.match(CommonParser.DIFFERENT);
						this.state = 210;
						this.expression(5);
						}
						break;

					case 13:
						{
						_localctx = new AndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CommonParser.RULE_expression);
						this.state = 211;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 212;
						this.match(CommonParser.AND);
						this.state = 213;
						this.expression(4);
						}
						break;

					case 14:
						{
						_localctx = new OrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CommonParser.RULE_expression);
						this.state = 214;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 215;
						this.match(CommonParser.OR);
						this.state = 216;
						this.expression(3);
						}
						break;
					}
					}
				}
				this.state = 221;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CommonParser.RULE_atom);
		try {
			this.state = 228;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				_localctx = new TrueAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 222;
				this.match(CommonParser.TRUE);
				}
				break;

			case 2:
				_localctx = new FalseAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 223;
				this.match(CommonParser.FALSE);
				}
				break;

			case 3:
				_localctx = new NumberAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 224;
				this.numberLiteral();
				}
				break;

			case 4:
				_localctx = new TextAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 225;
				this.textLiteral();
				}
				break;

			case 5:
				_localctx = new FunctionCallAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 226;
				this.functionCall();
				}
				break;

			case 6:
				_localctx = new IdentifierAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 227;
				this.match(CommonParser.IDENTIFIER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numberLiteral(): NumberLiteralContext {
		let _localctx: NumberLiteralContext = new NumberLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CommonParser.RULE_numberLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			_la = this._input.LA(1);
			if (!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (CommonParser.DECIMAL_NUMBER - 55)) | (1 << (CommonParser.HEX_NUMBER - 55)) | (1 << (CommonParser.BINARY_NUMBER - 55)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public textLiteral(): TextLiteralContext {
		let _localctx: TextLiteralContext = new TextLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CommonParser.RULE_textLiteral);
		let _la: number;
		try {
			this.state = 248;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CommonParser.QUOTE_SINGLE:
				_localctx = new SimpleTextLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 232;
				this.match(CommonParser.QUOTE_SINGLE);
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CommonParser.TEXT_CONTENT) {
					{
					{
					this.state = 233;
					this.match(CommonParser.TEXT_CONTENT);
					}
					}
					this.state = 238;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 239;
				this.match(CommonParser.QUOTE_SINGLE);
				}
				break;
			case CommonParser.QUOTE_DOUBLE:
				_localctx = new InterpolatedTextLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 240;
				this.match(CommonParser.QUOTE_DOUBLE);
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CommonParser.TEXT_CONTENT || _la === CommonParser.OPEN_BRACE) {
					{
					{
					this.state = 241;
					this.interpolatedText();
					}
					}
					this.state = 246;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 247;
				this.match(CommonParser.QUOTE_DOUBLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interpolatedText(): InterpolatedTextContext {
		let _localctx: InterpolatedTextContext = new InterpolatedTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CommonParser.RULE_interpolatedText);
		try {
			this.state = 255;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CommonParser.TEXT_CONTENT:
				_localctx = new InterpolatedSimpleTextContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 250;
				this.match(CommonParser.TEXT_CONTENT);
				}
				break;
			case CommonParser.OPEN_BRACE:
				_localctx = new InterpolatedExpressionTextContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 251;
				this.match(CommonParser.OPEN_BRACE);
				this.state = 252;
				this.expression(0);
				this.state = 253;
				this.match(CommonParser.CLOSE_BRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CommonParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.match(CommonParser.IDENTIFIER);
			this.state = 258;
			this.match(CommonParser.OPEN_PARENTHESIS);
			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommonParser.TRUE) | (1 << CommonParser.FALSE) | (1 << CommonParser.ADD) | (1 << CommonParser.SUBTRACT))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CommonParser.NOT - 40)) | (1 << (CommonParser.OPEN_PARENTHESIS - 40)) | (1 << (CommonParser.QUOTE_SINGLE - 40)) | (1 << (CommonParser.QUOTE_DOUBLE - 40)) | (1 << (CommonParser.IDENTIFIER - 40)) | (1 << (CommonParser.DECIMAL_NUMBER - 40)) | (1 << (CommonParser.HEX_NUMBER - 40)) | (1 << (CommonParser.BINARY_NUMBER - 40)))) !== 0)) {
				{
				this.state = 259;
				this.argumentList();
				}
			}

			this.state = 262;
			this.match(CommonParser.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CommonParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.expression(0);
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CommonParser.COMMA) {
				{
				{
				this.state = 265;
				this.match(CommonParser.COMMA);
				this.state = 266;
				this.expression(0);
				}
				}
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableAssignment(): VariableAssignmentContext {
		let _localctx: VariableAssignmentContext = new VariableAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CommonParser.RULE_variableAssignment);
		try {
			this.state = 293;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				_localctx = new AssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 272;
				this.match(CommonParser.IDENTIFIER);
				this.state = 273;
				this.match(CommonParser.ASSIGN);
				this.state = 274;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new AddAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 275;
				this.match(CommonParser.IDENTIFIER);
				this.state = 276;
				this.match(CommonParser.ADD_ASSIGN);
				this.state = 277;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new SubtractAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 278;
				this.match(CommonParser.IDENTIFIER);
				this.state = 279;
				this.match(CommonParser.SUBTRACT_ASSIGN);
				this.state = 280;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new MultiplyAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 281;
				this.match(CommonParser.IDENTIFIER);
				this.state = 282;
				this.match(CommonParser.MULTIPLY_ASSIGN);
				this.state = 283;
				this.expression(0);
				}
				break;

			case 5:
				_localctx = new DivideAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 284;
				this.match(CommonParser.IDENTIFIER);
				this.state = 285;
				this.match(CommonParser.DIVIDE_ASSIGN);
				this.state = 286;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new RemainderAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 287;
				this.match(CommonParser.IDENTIFIER);
				this.state = 288;
				this.match(CommonParser.REMAINDER_ASSIGN);
				this.state = 289;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new PowerAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 290;
				this.match(CommonParser.IDENTIFIER);
				this.state = 291;
				this.match(CommonParser.POWER_ASSIGN);
				this.state = 292;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CommonParser.RULE_ifStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.match(CommonParser.IF);
			this.state = 296;
			this.expression(0);
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 297;
				this.match(CommonParser.NEWLINE);
				}
				}
				this.state = 300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CommonParser.NEWLINE);
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommonParser.BREAK) | (1 << CommonParser.CONSTANT) | (1 << CommonParser.CONTINUE) | (1 << CommonParser.FOR) | (1 << CommonParser.FOREVER) | (1 << CommonParser.GLOBAL) | (1 << CommonParser.IF) | (1 << CommonParser.RETURN) | (1 << CommonParser.WHILE))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (CommonParser.LOGICAL - 41)) | (1 << (CommonParser.NUMBER - 41)) | (1 << (CommonParser.TEXT - 41)) | (1 << (CommonParser.IDENTIFIER - 41)))) !== 0)) {
				{
				{
				this.state = 302;
				this.innerStatement();
				}
				}
				this.state = 307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 311;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 308;
					this.elseIfPart();
					}
					}
				}
				this.state = 313;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CommonParser.ELSE) {
				{
				this.state = 314;
				this.elsePart();
				}
			}

			this.state = 317;
			this.match(CommonParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseIfPart(): ElseIfPartContext {
		let _localctx: ElseIfPartContext = new ElseIfPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CommonParser.RULE_elseIfPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this.match(CommonParser.ELSE);
			this.state = 320;
			this.match(CommonParser.IF);
			this.state = 321;
			this.expression(0);
			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 322;
				this.match(CommonParser.NEWLINE);
				}
				}
				this.state = 325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CommonParser.NEWLINE);
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommonParser.BREAK) | (1 << CommonParser.CONSTANT) | (1 << CommonParser.CONTINUE) | (1 << CommonParser.FOR) | (1 << CommonParser.FOREVER) | (1 << CommonParser.GLOBAL) | (1 << CommonParser.IF) | (1 << CommonParser.RETURN) | (1 << CommonParser.WHILE))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (CommonParser.LOGICAL - 41)) | (1 << (CommonParser.NUMBER - 41)) | (1 << (CommonParser.TEXT - 41)) | (1 << (CommonParser.IDENTIFIER - 41)))) !== 0)) {
				{
				{
				this.state = 327;
				this.innerStatement();
				}
				}
				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elsePart(): ElsePartContext {
		let _localctx: ElsePartContext = new ElsePartContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CommonParser.RULE_elsePart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.match(CommonParser.ELSE);
			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 334;
				this.match(CommonParser.NEWLINE);
				}
				}
				this.state = 337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CommonParser.NEWLINE);
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommonParser.BREAK) | (1 << CommonParser.CONSTANT) | (1 << CommonParser.CONTINUE) | (1 << CommonParser.FOR) | (1 << CommonParser.FOREVER) | (1 << CommonParser.GLOBAL) | (1 << CommonParser.IF) | (1 << CommonParser.RETURN) | (1 << CommonParser.WHILE))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (CommonParser.LOGICAL - 41)) | (1 << (CommonParser.NUMBER - 41)) | (1 << (CommonParser.TEXT - 41)) | (1 << (CommonParser.IDENTIFIER - 41)))) !== 0)) {
				{
				{
				this.state = 339;
				this.innerStatement();
				}
				}
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forFromToStatement(): ForFromToStatementContext {
		let _localctx: ForFromToStatementContext = new ForFromToStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CommonParser.RULE_forFromToStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.match(CommonParser.FOR);
			this.state = 346;
			this.type();
			this.state = 347;
			this.match(CommonParser.IDENTIFIER);
			this.state = 348;
			this.match(CommonParser.FROM);
			this.state = 349;
			this.expression(0);
			this.state = 350;
			this.match(CommonParser.TO);
			this.state = 351;
			this.expression(0);
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 352;
				this.match(CommonParser.NEWLINE);
				}
				}
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CommonParser.NEWLINE);
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommonParser.BREAK) | (1 << CommonParser.CONSTANT) | (1 << CommonParser.CONTINUE) | (1 << CommonParser.FOR) | (1 << CommonParser.FOREVER) | (1 << CommonParser.GLOBAL) | (1 << CommonParser.IF) | (1 << CommonParser.RETURN) | (1 << CommonParser.WHILE))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (CommonParser.LOGICAL - 41)) | (1 << (CommonParser.NUMBER - 41)) | (1 << (CommonParser.TEXT - 41)) | (1 << (CommonParser.IDENTIFIER - 41)))) !== 0)) {
				{
				{
				this.state = 357;
				this.innerStatement();
				}
				}
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 363;
			this.match(CommonParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CommonParser.RULE_whileStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this.match(CommonParser.WHILE);
			this.state = 366;
			this.expression(0);
			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 367;
				this.match(CommonParser.NEWLINE);
				}
				}
				this.state = 370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CommonParser.NEWLINE);
			this.state = 375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommonParser.BREAK) | (1 << CommonParser.CONSTANT) | (1 << CommonParser.CONTINUE) | (1 << CommonParser.FOR) | (1 << CommonParser.FOREVER) | (1 << CommonParser.GLOBAL) | (1 << CommonParser.IF) | (1 << CommonParser.RETURN) | (1 << CommonParser.WHILE))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (CommonParser.LOGICAL - 41)) | (1 << (CommonParser.NUMBER - 41)) | (1 << (CommonParser.TEXT - 41)) | (1 << (CommonParser.IDENTIFIER - 41)))) !== 0)) {
				{
				{
				this.state = 372;
				this.innerStatement();
				}
				}
				this.state = 377;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 378;
			this.match(CommonParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public foreverStatement(): ForeverStatementContext {
		let _localctx: ForeverStatementContext = new ForeverStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CommonParser.RULE_foreverStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.match(CommonParser.FOREVER);
			this.state = 382;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 381;
				this.match(CommonParser.NEWLINE);
				}
				}
				this.state = 384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CommonParser.NEWLINE);
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommonParser.BREAK) | (1 << CommonParser.CONSTANT) | (1 << CommonParser.CONTINUE) | (1 << CommonParser.FOR) | (1 << CommonParser.FOREVER) | (1 << CommonParser.GLOBAL) | (1 << CommonParser.IF) | (1 << CommonParser.RETURN) | (1 << CommonParser.WHILE))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (CommonParser.LOGICAL - 41)) | (1 << (CommonParser.NUMBER - 41)) | (1 << (CommonParser.TEXT - 41)) | (1 << (CommonParser.IDENTIFIER - 41)))) !== 0)) {
				{
				{
				this.state = 386;
				this.innerStatement();
				}
				}
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 392;
			this.match(CommonParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CommonParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this.match(CommonParser.BREAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CommonParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(CommonParser.CONTINUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CommonParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.match(CommonParser.RETURN);
			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CommonParser.TRUE) | (1 << CommonParser.FALSE) | (1 << CommonParser.ADD) | (1 << CommonParser.SUBTRACT))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CommonParser.NOT - 40)) | (1 << (CommonParser.OPEN_PARENTHESIS - 40)) | (1 << (CommonParser.QUOTE_SINGLE - 40)) | (1 << (CommonParser.QUOTE_DOUBLE - 40)) | (1 << (CommonParser.IDENTIFIER - 40)) | (1 << (CommonParser.DECIMAL_NUMBER - 40)) | (1 << (CommonParser.HEX_NUMBER - 40)) | (1 << (CommonParser.BINARY_NUMBER - 40)))) !== 0)) {
				{
				this.state = 399;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CommonParser.RULE_eos);
		let _la: number;
		try {
			this.state = 411;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CommonParser.NEWLINE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 402;
					this.match(CommonParser.NEWLINE);
					}
					}
					this.state = 405;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CommonParser.NEWLINE);
				this.state = 408;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 407;
					this.match(CommonParser.EOF);
					}
					break;
				}
				}
				break;
			case CommonParser.EOF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 410;
				this.match(CommonParser.EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 15);

		case 1:
			return this.precpred(this._ctx, 14);

		case 2:
			return this.precpred(this._ctx, 13);

		case 3:
			return this.precpred(this._ctx, 12);

		case 4:
			return this.precpred(this._ctx, 11);

		case 5:
			return this.precpred(this._ctx, 10);

		case 6:
			return this.precpred(this._ctx, 9);

		case 7:
			return this.precpred(this._ctx, 8);

		case 8:
			return this.precpred(this._ctx, 7);

		case 9:
			return this.precpred(this._ctx, 6);

		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 3);

		case 13:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\u01A0\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x03" +
		"\x02\x07\x02:\n\x02\f\x02\x0E\x02=\v\x02\x03\x02\x07\x02@\n\x02\f\x02" +
		"\x0E\x02C\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03I\n\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x05\x04X\n\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"o\n\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"x\n\x07\x03\x07\x03\x07\x03\x07\x05\x07}\n\x07\x03\x07\x06\x07\x80\n\x07" +
		"\r\x07\x0E\x07\x81\x03\x07\x07\x07\x85\n\x07\f\x07\x0E\x07\x88\v\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\x92\n\b\f\b\x0E" +
		"\b\x95\v\b\x03\t\x05\t\x98\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x05\n\xA2\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x05\v\xB0\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x07\v\xDC\n\v\f\v\x0E\v\xDF\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x05\f\xE7\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x07\x0E\xED\n\x0E\f\x0E\x0E" +
		"\x0E\xF0\v\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xF5\n\x0E\f\x0E\x0E\x0E" +
		"\xF8\v\x0E\x03\x0E\x05\x0E\xFB\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u0102\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0107\n\x10\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11\u010E\n\x11\f\x11\x0E\x11" +
		"\u0111\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0128\n\x12\x03\x13\x03\x13" +
		"\x03\x13\x06\x13\u012D\n\x13\r\x13\x0E\x13\u012E\x03\x13\x07\x13\u0132" +
		"\n\x13\f\x13\x0E\x13\u0135\v\x13\x03\x13\x07\x13\u0138\n\x13\f\x13\x0E" +
		"\x13\u013B\v\x13\x03\x13\x05\x13\u013E\n\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x06\x14\u0146\n\x14\r\x14\x0E\x14\u0147\x03\x14\x07" +
		"\x14\u014B\n\x14\f\x14\x0E\x14\u014E\v\x14\x03\x15\x03\x15\x06\x15\u0152" +
		"\n\x15\r\x15\x0E\x15\u0153\x03\x15\x07\x15\u0157\n\x15\f\x15\x0E\x15\u015A" +
		"\v\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x06\x16\u0164\n\x16\r\x16\x0E\x16\u0165\x03\x16\x07\x16\u0169\n\x16\f" +
		"\x16\x0E\x16\u016C\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x06\x17" +
		"\u0173\n\x17\r\x17\x0E\x17\u0174\x03\x17\x07\x17\u0178\n\x17\f\x17\x0E" +
		"\x17\u017B\v\x17\x03\x17\x03\x17\x03\x18\x03\x18\x06\x18\u0181\n\x18\r" +
		"\x18\x0E\x18\u0182\x03\x18\x07\x18\u0186\n\x18\f\x18\x0E\x18\u0189\v\x18" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B" +
		"\u0193\n\x1B\x03\x1C\x06\x1C\u0196\n\x1C\r\x1C\x0E\x1C\u0197\x03\x1C\x05" +
		"\x1C\u019B\n\x1C\x03\x1C\x05\x1C\u019E\n\x1C\x03\x1C\x02\x02\x03\x14\x1D" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x02\x02\x03\x03\x029;\x02\u01CE\x02;\x03" +
		"\x02\x02\x02\x04H\x03\x02\x02\x02\x06W\x03\x02\x02\x02\bn\x03\x02\x02" +
		"\x02\np\x03\x02\x02\x02\fs\x03\x02\x02\x02\x0E\x8B\x03\x02\x02\x02\x10" +
		"\x97\x03\x02\x02\x02\x12\xA1\x03\x02\x02\x02\x14\xAF\x03\x02\x02\x02\x16" +
		"\xE6\x03\x02\x02\x02\x18\xE8\x03\x02\x02\x02\x1A\xFA\x03\x02\x02\x02\x1C" +
		"\u0101\x03\x02\x02\x02\x1E\u0103\x03\x02\x02\x02 \u010A\x03\x02\x02\x02" +
		"\"\u0127\x03\x02\x02\x02$\u0129\x03\x02\x02\x02&\u0141\x03\x02\x02\x02" +
		"(\u014F\x03\x02\x02\x02*\u015B\x03\x02\x02\x02,\u016F\x03\x02\x02\x02" +
		".\u017E\x03\x02\x02\x020\u018C\x03\x02\x02\x022\u018E\x03\x02\x02\x02" +
		"4\u0190\x03\x02\x02\x026\u019D\x03\x02\x02\x028:\x07<\x02\x0298\x03\x02" +
		"\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<A\x03\x02" +
		"\x02\x02=;\x03\x02\x02\x02>@\x05\x04\x03\x02?>\x03\x02\x02\x02@C\x03\x02" +
		"\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02B\x03\x03\x02\x02\x02CA\x03" +
		"\x02\x02\x02DE\x05\f\x07\x02EF\x056\x1C\x02FI\x03\x02\x02\x02GI\x05\b" +
		"\x05\x02HD\x03\x02\x02\x02HG\x03\x02\x02\x02I\x05\x03\x02\x02\x02JK\x05" +
		"\n\x06\x02KL\x056\x1C\x02LX\x03\x02\x02\x02MN\x050\x19\x02NO\x056\x1C" +
		"\x02OX\x03\x02\x02\x02PQ\x052\x1A\x02QR\x056\x1C\x02RX\x03\x02\x02\x02" +
		"ST\x054\x1B\x02TU\x056\x1C\x02UX\x03\x02\x02\x02VX\x05\b\x05\x02WJ\x03" +
		"\x02\x02\x02WM\x03\x02\x02\x02WP\x03\x02\x02\x02WS\x03\x02\x02\x02WV\x03" +
		"\x02\x02\x02X\x07\x03\x02\x02\x02YZ\x05\x10\t\x02Z[\x056\x1C\x02[o\x03" +
		"\x02\x02\x02\\]\x05\"\x12\x02]^\x056\x1C\x02^o\x03\x02\x02\x02_`\x05$" +
		"\x13\x02`a\x056\x1C\x02ao\x03\x02\x02\x02bc\x05*\x16\x02cd\x056\x1C\x02" +
		"do\x03\x02\x02\x02ef\x05,\x17\x02fg\x056\x1C\x02go\x03\x02\x02\x02hi\x05" +
		".\x18\x02ij\x056\x1C\x02jo\x03\x02\x02\x02kl\x05\x1E\x10\x02lm\x056\x1C" +
		"\x02mo\x03\x02\x02\x02nY\x03\x02\x02\x02n\\\x03\x02\x02\x02n_\x03\x02" +
		"\x02\x02nb\x03\x02\x02\x02ne\x03\x02\x02\x02nh\x03\x02\x02\x02nk\x03\x02" +
		"\x02\x02o\t\x03\x02\x02\x02pq\x07\x0F\x02\x02qr\x078\x02\x02r\v\x03\x02" +
		"\x02\x02st\x07\x0E\x02\x02tu\x078\x02\x02uw\x07.\x02\x02vx\x05\x0E\b\x02" +
		"wv\x03\x02\x02\x02wx\x03\x02\x02\x02xy\x03\x02\x02\x02y|\x07/\x02\x02" +
		"z{\x07\x12\x02\x02{}\x05\x12\n\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02" +
		"}\x7F\x03\x02\x02\x02~\x80\x07<\x02\x02\x7F~\x03\x02\x02\x02\x80\x81\x03" +
		"\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x86\x03" +
		"\x02\x02\x02\x83\x85\x05\x06\x04\x02\x84\x83\x03\x02\x02\x02\x85\x88\x03" +
		"\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x89\x03" +
		"\x02\x02\x02\x88\x86\x03\x02\x02\x02\x89\x8A\x07\n\x02\x02\x8A\r\x03\x02" +
		"\x02\x02\x8B\x8C\x05\x12\n\x02\x8C\x93\x078\x02\x02\x8D\x8E\x075\x02\x02" +
		"\x8E\x8F\x05\x12\n\x02\x8F\x90\x078\x02\x02\x90\x92\x03\x02\x02\x02\x91" +
		"\x8D\x03\x02\x02\x02\x92\x95\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93" +
		"\x94\x03\x02\x02\x02\x94\x0F\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x96" +
		"\x98\x07\x07\x02\x02\x97\x96\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98" +
		"\x99\x03\x02\x02\x02\x99\x9A\x05\x12\n\x02\x9A\x9B\x078\x02\x02\x9B\x9C" +
		"\x07\x15\x02\x02\x9C\x9D\x05\x14\v\x02\x9D\x11\x03\x02\x02\x02\x9E\xA2" +
		"\x07+\x02\x02\x9F\xA2\x07,\x02\x02\xA0\xA2\x07-\x02\x02\xA1\x9E\x03\x02" +
		"\x02\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\x13\x03\x02" +
		"\x02\x02\xA3\xA4\b\v\x01\x02\xA4\xA5\x07.\x02\x02\xA5\xA6\x05\x14\v\x02" +
		"\xA6\xA7\x07/\x02\x02\xA7\xB0\x03\x02\x02\x02\xA8\xA9\x07\x16\x02\x02" +
		"\xA9\xB0\x05\x14\v\x14\xAA\xAB\x07\x17\x02\x02\xAB\xB0\x05\x14\v\x13\xAC" +
		"\xAD\x07*\x02\x02\xAD\xB0\x05\x14\v\x12\xAE\xB0\x05\x16\f\x02\xAF\xA3" +
		"\x03\x02\x02\x02\xAF\xA8\x03\x02\x02\x02\xAF\xAA\x03\x02\x02\x02\xAF\xAC" +
		"\x03\x02\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\xDD\x03\x02\x02\x02\xB1\xB2" +
		"\f\x11\x02\x02\xB2\xB3\x07\x1B\x02\x02\xB3\xDC\x05\x14\v\x11\xB4\xB5\f" +
		"\x10\x02\x02\xB5\xB6\x07\x18\x02\x02\xB6\xDC\x05\x14\v\x11\xB7\xB8\f\x0F" +
		"\x02\x02\xB8\xB9\x07\x19\x02\x02\xB9\xDC\x05\x14\v\x10\xBA\xBB\f\x0E\x02" +
		"\x02\xBB\xBC\x07\x1A\x02\x02\xBC\xDC\x05\x14\v\x0F\xBD\xBE\f\r\x02\x02" +
		"\xBE\xBF\x07\x16\x02\x02\xBF\xDC\x05\x14\v\x0E\xC0\xC1\f\f\x02\x02\xC1" +
		"\xC2\x07\x17\x02\x02\xC2\xDC\x05\x14\v\r\xC3\xC4\f\v\x02\x02\xC4\xC5\x07" +
		"\"\x02\x02\xC5\xDC\x05\x14\v\f\xC6\xC7\f\n\x02\x02\xC7\xC8\x07#\x02\x02" +
		"\xC8\xDC\x05\x14\v\v\xC9\xCA\f\t\x02\x02\xCA\xCB\x07$\x02\x02\xCB\xDC" +
		"\x05\x14\v\n\xCC\xCD\f\b\x02\x02\xCD\xCE\x07%\x02\x02\xCE\xDC\x05\x14" +
		"\v\t\xCF\xD0\f\x07\x02\x02\xD0\xD1\x07&\x02\x02\xD1\xDC\x05\x14\v\b\xD2" +
		"\xD3\f\x06\x02\x02\xD3\xD4\x07\'\x02\x02\xD4\xDC\x05\x14\v\x07\xD5\xD6" +
		"\f\x05\x02\x02\xD6\xD7\x07(\x02\x02\xD7\xDC\x05\x14\v\x06\xD8\xD9\f\x04" +
		"\x02\x02\xD9\xDA\x07)\x02\x02\xDA\xDC\x05\x14\v\x05\xDB\xB1\x03\x02\x02" +
		"\x02\xDB\xB4\x03\x02\x02\x02\xDB\xB7\x03\x02\x02\x02\xDB\xBA\x03\x02\x02" +
		"\x02\xDB\xBD\x03\x02\x02\x02\xDB\xC0\x03\x02\x02\x02\xDB\xC3\x03\x02\x02" +
		"\x02\xDB\xC6\x03\x02\x02\x02\xDB\xC9\x03\x02\x02\x02\xDB\xCC\x03\x02\x02" +
		"\x02\xDB\xCF\x03\x02\x02\x02\xDB\xD2\x03\x02\x02\x02\xDB\xD5\x03\x02\x02" +
		"\x02\xDB\xD8\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD\xDB\x03\x02\x02" +
		"\x02\xDD\xDE\x03\x02\x02\x02\xDE\x15\x03\x02\x02\x02\xDF\xDD\x03\x02\x02" +
		"\x02\xE0\xE7\x07\x04\x02\x02\xE1\xE7\x07\x05\x02\x02\xE2\xE7\x05\x18\r" +
		"\x02\xE3\xE7\x05\x1A\x0E\x02\xE4\xE7\x05\x1E\x10\x02\xE5\xE7\x078\x02" +
		"\x02\xE6\xE0\x03\x02\x02\x02\xE6\xE1\x03\x02\x02\x02\xE6\xE2\x03\x02\x02" +
		"\x02\xE6\xE3\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE5\x03\x02\x02" +
		"\x02\xE7\x17\x03\x02\x02\x02\xE8\xE9\t\x02\x02\x02\xE9\x19\x03\x02\x02" +
		"\x02\xEA\xEE\x076\x02\x02\xEB\xED\x07\x03\x02\x02\xEC\xEB\x03\x02\x02" +
		"\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02" +
		"\x02\xEF\xF1\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1\xFB\x076\x02" +
		"\x02\xF2\xF6\x077\x02\x02\xF3\xF5\x05\x1C\x0F\x02\xF4\xF3\x03\x02\x02" +
		"\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02" +
		"\x02\xF7\xF9\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFB\x077\x02" +
		"\x02\xFA\xEA\x03\x02\x02\x02\xFA\xF2\x03\x02\x02\x02\xFB\x1B\x03\x02\x02" +
		"\x02\xFC\u0102\x07\x03\x02\x02\xFD\xFE\x072\x02\x02\xFE\xFF\x05\x14\v" +
		"\x02\xFF\u0100\x073\x02\x02\u0100\u0102\x03\x02\x02\x02\u0101\xFC\x03" +
		"\x02\x02\x02\u0101\xFD\x03\x02\x02\x02\u0102\x1D\x03\x02\x02\x02\u0103" +
		"\u0104\x078\x02\x02\u0104\u0106\x07.\x02\x02\u0105\u0107\x05 \x11\x02" +
		"\u0106\u0105\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x03" +
		"\x02\x02\x02\u0108\u0109\x07/\x02\x02\u0109\x1F\x03\x02\x02\x02\u010A" +
		"\u010F\x05\x14\v\x02\u010B\u010C\x075\x02\x02\u010C\u010E\x05\x14\v\x02" +
		"\u010D\u010B\x03\x02\x02\x02\u010E\u0111\x03\x02\x02\x02\u010F\u010D\x03" +
		"\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110!\x03\x02\x02\x02\u0111" +
		"\u010F\x03\x02\x02\x02\u0112\u0113\x078\x02\x02\u0113\u0114\x07\x15\x02" +
		"\x02\u0114\u0128\x05\x14\v\x02\u0115\u0116\x078\x02\x02\u0116\u0117\x07" +
		"\x1C\x02\x02\u0117\u0128\x05\x14\v\x02\u0118\u0119\x078\x02\x02\u0119" +
		"\u011A\x07\x1D\x02\x02\u011A\u0128\x05\x14\v\x02\u011B\u011C\x078\x02" +
		"\x02\u011C\u011D\x07\x1E\x02\x02\u011D\u0128\x05\x14\v\x02\u011E\u011F" +
		"\x078\x02\x02\u011F\u0120\x07\x1F\x02\x02\u0120\u0128\x05\x14\v\x02\u0121" +
		"\u0122\x078\x02\x02\u0122\u0123\x07 \x02\x02\u0123\u0128\x05\x14\v\x02" +
		"\u0124\u0125\x078\x02\x02\u0125\u0126\x07!\x02\x02\u0126\u0128\x05\x14" +
		"\v\x02\u0127\u0112\x03\x02\x02\x02\u0127\u0115\x03\x02\x02\x02\u0127\u0118" +
		"\x03\x02\x02\x02\u0127\u011B\x03\x02\x02\x02\u0127\u011E\x03\x02\x02\x02" +
		"\u0127\u0121\x03\x02\x02\x02\u0127\u0124\x03\x02\x02\x02\u0128#\x03\x02" +
		"\x02\x02\u0129\u012A\x07\x10\x02\x02\u012A\u012C\x05\x14\v\x02\u012B\u012D" +
		"\x07<\x02\x02\u012C\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02" +
		"\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0133\x03" +
		"\x02\x02\x02\u0130\u0132\x05\x06\x04\x02\u0131\u0130\x03\x02\x02\x02\u0132" +
		"\u0135\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02" +
		"\x02\x02\u0134\u0139\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0136" +
		"\u0138\x05&\x14\x02\u0137\u0136\x03\x02\x02\x02\u0138\u013B\x03\x02\x02" +
		"\x02\u0139\u0137\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013D" +
		"\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013C\u013E\x05(\x15\x02" +
		"\u013D\u013C\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013F\x03" +
		"\x02\x02\x02\u013F\u0140\x07\n\x02\x02\u0140%\x03\x02\x02\x02\u0141\u0142" +
		"\x07\t\x02\x02\u0142\u0143\x07\x10\x02\x02\u0143\u0145\x05\x14\v\x02\u0144" +
		"\u0146\x07<\x02\x02\u0145\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02" +
		"\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014C" +
		"\x03\x02\x02\x02\u0149\u014B\x05\x06\x04\x02\u014A\u0149\x03\x02\x02\x02" +
		"\u014B\u014E\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014C\u014D\x03" +
		"\x02\x02\x02\u014D\'\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014F" +
		"\u0151\x07\t\x02\x02\u0150\u0152\x07<\x02\x02\u0151\u0150\x03\x02\x02" +
		"\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154" +
		"\x03\x02\x02\x02\u0154\u0158\x03\x02\x02\x02\u0155\u0157\x05\x06\x04\x02" +
		"\u0156\u0155\x03\x02\x02\x02\u0157\u015A\x03\x02\x02\x02\u0158\u0156\x03" +
		"\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159)\x03\x02\x02\x02\u015A" +
		"\u0158\x03\x02\x02\x02\u015B\u015C\x07\v\x02\x02\u015C\u015D\x05\x12\n" +
		"\x02\u015D\u015E\x078\x02\x02\u015E\u015F\x07\r\x02\x02\u015F\u0160\x05" +
		"\x14\v\x02\u0160\u0161\x07\x13\x02\x02\u0161\u0163\x05\x14\v\x02\u0162" +
		"\u0164\x07<\x02\x02\u0163\u0162\x03\x02\x02\x02\u0164\u0165\x03\x02\x02" +
		"\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u016A" +
		"\x03\x02\x02\x02\u0167\u0169\x05\x06\x04\x02\u0168\u0167\x03\x02\x02\x02" +
		"\u0169\u016C\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016A\u016B\x03" +
		"\x02\x02\x02\u016B\u016D\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016D" +
		"\u016E\x07\n\x02\x02\u016E+\x03\x02\x02\x02\u016F\u0170\x07\x14\x02\x02" +
		"\u0170\u0172\x05\x14\v\x02\u0171\u0173\x07<\x02\x02\u0172\u0171\x03\x02" +
		"\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174" +
		"\u0175\x03\x02\x02\x02\u0175\u0179\x03\x02\x02\x02\u0176\u0178\x05\x06" +
		"\x04\x02\u0177\u0176\x03\x02\x02\x02\u0178\u017B\x03\x02\x02\x02\u0179" +
		"\u0177\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017C\x03\x02" +
		"\x02\x02\u017B\u0179\x03\x02\x02\x02\u017C\u017D\x07\n\x02\x02\u017D-" +
		"\x03\x02\x02\x02\u017E\u0180\x07\f\x02\x02\u017F\u0181\x07<\x02\x02\u0180" +
		"\u017F\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0180\x03\x02" +
		"\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0187\x03\x02\x02\x02\u0184" +
		"\u0186\x05\x06\x04\x02\u0185\u0184\x03\x02\x02\x02\u0186\u0189\x03\x02" +
		"\x02\x02\u0187\u0185\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188" +
		"\u018A\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u018A\u018B\x07\n\x02" +
		"\x02\u018B/\x03\x02\x02\x02\u018C\u018D\x07\x06\x02\x02\u018D1\x03\x02" +
		"\x02\x02\u018E\u018F\x07\b\x02\x02\u018F3\x03\x02\x02\x02\u0190\u0192" +
		"\x07\x11\x02\x02\u0191\u0193\x05\x14\v\x02\u0192\u0191\x03\x02\x02\x02" +
		"\u0192\u0193\x03\x02\x02\x02\u01935\x03\x02\x02\x02\u0194\u0196\x07<\x02" +
		"\x02\u0195\u0194\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0195" +
		"\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u019A\x03\x02\x02\x02" +
		"\u0199\u019B\x07\x02\x02\x03\u019A\u0199\x03\x02\x02\x02\u019A\u019B\x03" +
		"\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019E\x07\x02\x02\x03\u019D" +
		"\u0195\x03\x02\x02\x02\u019D\u019C\x03\x02\x02\x02\u019E7\x03\x02\x02" +
		"\x02+;AHWnw|\x81\x86\x93\x97\xA1\xAF\xDB\xDD\xE6\xEE\xF6\xFA\u0101\u0106" +
		"\u010F\u0127\u012E\u0133\u0139\u013D\u0147\u014C\u0153\u0158\u0165\u016A" +
		"\u0174\u0179\u0182\u0187\u0192\u0197\u019A\u019D";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CommonParser.__ATN) {
			CommonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CommonParser._serializedATN));
		}

		return CommonParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommonParser.NEWLINE);
		} else {
			return this.getToken(CommonParser.NEWLINE, i);
		}
	}
	public topStatement(): TopStatementContext[];
	public topStatement(i: number): TopStatementContext;
	public topStatement(i?: number): TopStatementContext | TopStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopStatementContext);
		} else {
			return this.getRuleContext(i, TopStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_program; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopStatementContext extends ParserRuleContext {
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public eos(): EosContext | undefined {
		return this.tryGetRuleContext(0, EosContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_topStatement; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitTopStatement) {
			return visitor.visitTopStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InnerStatementContext extends ParserRuleContext {
	public globalStatement(): GlobalStatementContext | undefined {
		return this.tryGetRuleContext(0, GlobalStatementContext);
	}
	public eos(): EosContext | undefined {
		return this.tryGetRuleContext(0, EosContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_innerStatement; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitInnerStatement) {
			return visitor.visitInnerStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public variableAssignment(): VariableAssignmentContext | undefined {
		return this.tryGetRuleContext(0, VariableAssignmentContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public forFromToStatement(): ForFromToStatementContext | undefined {
		return this.tryGetRuleContext(0, ForFromToStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public foreverStatement(): ForeverStatementContext | undefined {
		return this.tryGetRuleContext(0, ForeverStatementContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_statement; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GlobalStatementContext extends ParserRuleContext {
	public GLOBAL(): TerminalNode { return this.getToken(CommonParser.GLOBAL, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CommonParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_globalStatement; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitGlobalStatement) {
			return visitor.visitGlobalStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(CommonParser.FUNCTION, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CommonParser.IDENTIFIER, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(CommonParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(CommonParser.CLOSE_PARENTHESIS, 0); }
	public END(): TerminalNode { return this.getToken(CommonParser.END, 0); }
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public RETURNS(): TerminalNode | undefined { return this.tryGetToken(CommonParser.RETURNS, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommonParser.NEWLINE);
		} else {
			return this.getToken(CommonParser.NEWLINE, i);
		}
	}
	public innerStatement(): InnerStatementContext[];
	public innerStatement(i: number): InnerStatementContext;
	public innerStatement(i?: number): InnerStatementContext | InnerStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerStatementContext);
		} else {
			return this.getRuleContext(i, InnerStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_functionDeclaration; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommonParser.IDENTIFIER);
		} else {
			return this.getToken(CommonParser.IDENTIFIER, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommonParser.COMMA);
		} else {
			return this.getToken(CommonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_parameterList; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(CommonParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(CommonParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CONSTANT(): TerminalNode | undefined { return this.tryGetToken(CommonParser.CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_variableDeclaration; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class LogicalTypeContext extends TypeContext {
	public LOGICAL(): TerminalNode { return this.getToken(CommonParser.LOGICAL, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitLogicalType) {
			return visitor.visitLogicalType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberTypeContext extends TypeContext {
	public NUMBER(): TerminalNode { return this.getToken(CommonParser.NUMBER, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitNumberType) {
			return visitor.visitNumberType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TextTypeContext extends TypeContext {
	public TEXT(): TerminalNode { return this.getToken(CommonParser.TEXT, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitTextType) {
			return visitor.visitTextType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ParenthesisExpressionContext extends ExpressionContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(CommonParser.OPEN_PARENTHESIS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(CommonParser.CLOSE_PARENTHESIS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitParenthesisExpression) {
			return visitor.visitParenthesisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PlusExpressionContext extends ExpressionContext {
	public ADD(): TerminalNode { return this.getToken(CommonParser.ADD, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitPlusExpression) {
			return visitor.visitPlusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MinusExpressionContext extends ExpressionContext {
	public SUBTRACT(): TerminalNode { return this.getToken(CommonParser.SUBTRACT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitMinusExpression) {
			return visitor.visitMinusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExpressionContext extends ExpressionContext {
	public NOT(): TerminalNode { return this.getToken(CommonParser.NOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitNotExpression) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public POWER(): TerminalNode { return this.getToken(CommonParser.POWER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitPowerExpression) {
			return visitor.visitPowerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplyExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MULTIPLY(): TerminalNode { return this.getToken(CommonParser.MULTIPLY, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitMultiplyExpression) {
			return visitor.visitMultiplyExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivideExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DIVIDE(): TerminalNode { return this.getToken(CommonParser.DIVIDE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitDivideExpression) {
			return visitor.visitDivideExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RemainderExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public REMAINDER(): TerminalNode { return this.getToken(CommonParser.REMAINDER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitRemainderExpression) {
			return visitor.visitRemainderExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ADD(): TerminalNode { return this.getToken(CommonParser.ADD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitAddExpression) {
			return visitor.visitAddExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubtractExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SUBTRACT(): TerminalNode { return this.getToken(CommonParser.SUBTRACT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitSubtractExpression) {
			return visitor.visitSubtractExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LessExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LESS(): TerminalNode { return this.getToken(CommonParser.LESS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitLessExpression) {
			return visitor.visitLessExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LessEqualExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LESS_OR_EQUAL(): TerminalNode { return this.getToken(CommonParser.LESS_OR_EQUAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitLessEqualExpression) {
			return visitor.visitLessEqualExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GreaterExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GREATER(): TerminalNode { return this.getToken(CommonParser.GREATER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitGreaterExpression) {
			return visitor.visitGreaterExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GreaterEqualExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GREATER_OR_EQUAL(): TerminalNode { return this.getToken(CommonParser.GREATER_OR_EQUAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitGreaterEqualExpression) {
			return visitor.visitGreaterEqualExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EQUAL(): TerminalNode { return this.getToken(CommonParser.EQUAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitEqualExpression) {
			return visitor.visitEqualExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DifferentExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DIFFERENT(): TerminalNode { return this.getToken(CommonParser.DIFFERENT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitDifferentExpression) {
			return visitor.visitDifferentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(CommonParser.AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(CommonParser.OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitOrExpression) {
			return visitor.visitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AtomExpressionContext extends ExpressionContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitAtomExpression) {
			return visitor.visitAtomExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_atom; }
	public copyFrom(ctx: AtomContext): void {
		super.copyFrom(ctx);
	}
}
export class TrueAtomContext extends AtomContext {
	public TRUE(): TerminalNode { return this.getToken(CommonParser.TRUE, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitTrueAtom) {
			return visitor.visitTrueAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FalseAtomContext extends AtomContext {
	public FALSE(): TerminalNode { return this.getToken(CommonParser.FALSE, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitFalseAtom) {
			return visitor.visitFalseAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberAtomContext extends AtomContext {
	public numberLiteral(): NumberLiteralContext {
		return this.getRuleContext(0, NumberLiteralContext);
	}
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitNumberAtom) {
			return visitor.visitNumberAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TextAtomContext extends AtomContext {
	public textLiteral(): TextLiteralContext {
		return this.getRuleContext(0, TextLiteralContext);
	}
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitTextAtom) {
			return visitor.visitTextAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallAtomContext extends AtomContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitFunctionCallAtom) {
			return visitor.visitFunctionCallAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierAtomContext extends AtomContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CommonParser.IDENTIFIER, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitIdentifierAtom) {
			return visitor.visitIdentifierAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberLiteralContext extends ParserRuleContext {
	public DECIMAL_NUMBER(): TerminalNode | undefined { return this.tryGetToken(CommonParser.DECIMAL_NUMBER, 0); }
	public HEX_NUMBER(): TerminalNode | undefined { return this.tryGetToken(CommonParser.HEX_NUMBER, 0); }
	public BINARY_NUMBER(): TerminalNode | undefined { return this.tryGetToken(CommonParser.BINARY_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_numberLiteral; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitNumberLiteral) {
			return visitor.visitNumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextLiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_textLiteral; }
	public copyFrom(ctx: TextLiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class SimpleTextLiteralContext extends TextLiteralContext {
	public QUOTE_SINGLE(): TerminalNode[];
	public QUOTE_SINGLE(i: number): TerminalNode;
	public QUOTE_SINGLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommonParser.QUOTE_SINGLE);
		} else {
			return this.getToken(CommonParser.QUOTE_SINGLE, i);
		}
	}
	public TEXT_CONTENT(): TerminalNode[];
	public TEXT_CONTENT(i: number): TerminalNode;
	public TEXT_CONTENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommonParser.TEXT_CONTENT);
		} else {
			return this.getToken(CommonParser.TEXT_CONTENT, i);
		}
	}
	constructor(ctx: TextLiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitSimpleTextLiteral) {
			return visitor.visitSimpleTextLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InterpolatedTextLiteralContext extends TextLiteralContext {
	public QUOTE_DOUBLE(): TerminalNode[];
	public QUOTE_DOUBLE(i: number): TerminalNode;
	public QUOTE_DOUBLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommonParser.QUOTE_DOUBLE);
		} else {
			return this.getToken(CommonParser.QUOTE_DOUBLE, i);
		}
	}
	public interpolatedText(): InterpolatedTextContext[];
	public interpolatedText(i: number): InterpolatedTextContext;
	public interpolatedText(i?: number): InterpolatedTextContext | InterpolatedTextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterpolatedTextContext);
		} else {
			return this.getRuleContext(i, InterpolatedTextContext);
		}
	}
	constructor(ctx: TextLiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitInterpolatedTextLiteral) {
			return visitor.visitInterpolatedTextLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterpolatedTextContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_interpolatedText; }
	public copyFrom(ctx: InterpolatedTextContext): void {
		super.copyFrom(ctx);
	}
}
export class InterpolatedSimpleTextContext extends InterpolatedTextContext {
	public TEXT_CONTENT(): TerminalNode { return this.getToken(CommonParser.TEXT_CONTENT, 0); }
	constructor(ctx: InterpolatedTextContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitInterpolatedSimpleText) {
			return visitor.visitInterpolatedSimpleText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InterpolatedExpressionTextContext extends InterpolatedTextContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CommonParser.OPEN_BRACE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CommonParser.CLOSE_BRACE, 0); }
	constructor(ctx: InterpolatedTextContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitInterpolatedExpressionText) {
			return visitor.visitInterpolatedExpressionText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CommonParser.IDENTIFIER, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(CommonParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(CommonParser.CLOSE_PARENTHESIS, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_functionCall; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommonParser.COMMA);
		} else {
			return this.getToken(CommonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_argumentList; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableAssignmentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_variableAssignment; }
	public copyFrom(ctx: VariableAssignmentContext): void {
		super.copyFrom(ctx);
	}
}
export class AssignmentContext extends VariableAssignmentContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CommonParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(CommonParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: VariableAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddAssignmentContext extends VariableAssignmentContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CommonParser.IDENTIFIER, 0); }
	public ADD_ASSIGN(): TerminalNode { return this.getToken(CommonParser.ADD_ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: VariableAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitAddAssignment) {
			return visitor.visitAddAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubtractAssignmentContext extends VariableAssignmentContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CommonParser.IDENTIFIER, 0); }
	public SUBTRACT_ASSIGN(): TerminalNode { return this.getToken(CommonParser.SUBTRACT_ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: VariableAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitSubtractAssignment) {
			return visitor.visitSubtractAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplyAssignmentContext extends VariableAssignmentContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CommonParser.IDENTIFIER, 0); }
	public MULTIPLY_ASSIGN(): TerminalNode { return this.getToken(CommonParser.MULTIPLY_ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: VariableAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitMultiplyAssignment) {
			return visitor.visitMultiplyAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivideAssignmentContext extends VariableAssignmentContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CommonParser.IDENTIFIER, 0); }
	public DIVIDE_ASSIGN(): TerminalNode { return this.getToken(CommonParser.DIVIDE_ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: VariableAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitDivideAssignment) {
			return visitor.visitDivideAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RemainderAssignmentContext extends VariableAssignmentContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CommonParser.IDENTIFIER, 0); }
	public REMAINDER_ASSIGN(): TerminalNode { return this.getToken(CommonParser.REMAINDER_ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: VariableAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitRemainderAssignment) {
			return visitor.visitRemainderAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerAssignmentContext extends VariableAssignmentContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CommonParser.IDENTIFIER, 0); }
	public POWER_ASSIGN(): TerminalNode { return this.getToken(CommonParser.POWER_ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: VariableAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitPowerAssignment) {
			return visitor.visitPowerAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(CommonParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public END(): TerminalNode { return this.getToken(CommonParser.END, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommonParser.NEWLINE);
		} else {
			return this.getToken(CommonParser.NEWLINE, i);
		}
	}
	public innerStatement(): InnerStatementContext[];
	public innerStatement(i: number): InnerStatementContext;
	public innerStatement(i?: number): InnerStatementContext | InnerStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerStatementContext);
		} else {
			return this.getRuleContext(i, InnerStatementContext);
		}
	}
	public elseIfPart(): ElseIfPartContext[];
	public elseIfPart(i: number): ElseIfPartContext;
	public elseIfPart(i?: number): ElseIfPartContext | ElseIfPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseIfPartContext);
		} else {
			return this.getRuleContext(i, ElseIfPartContext);
		}
	}
	public elsePart(): ElsePartContext | undefined {
		return this.tryGetRuleContext(0, ElsePartContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_ifStatement; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseIfPartContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(CommonParser.ELSE, 0); }
	public IF(): TerminalNode { return this.getToken(CommonParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommonParser.NEWLINE);
		} else {
			return this.getToken(CommonParser.NEWLINE, i);
		}
	}
	public innerStatement(): InnerStatementContext[];
	public innerStatement(i: number): InnerStatementContext;
	public innerStatement(i?: number): InnerStatementContext | InnerStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerStatementContext);
		} else {
			return this.getRuleContext(i, InnerStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_elseIfPart; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitElseIfPart) {
			return visitor.visitElseIfPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElsePartContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(CommonParser.ELSE, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommonParser.NEWLINE);
		} else {
			return this.getToken(CommonParser.NEWLINE, i);
		}
	}
	public innerStatement(): InnerStatementContext[];
	public innerStatement(i: number): InnerStatementContext;
	public innerStatement(i?: number): InnerStatementContext | InnerStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerStatementContext);
		} else {
			return this.getRuleContext(i, InnerStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_elsePart; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitElsePart) {
			return visitor.visitElsePart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForFromToStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(CommonParser.FOR, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(CommonParser.IDENTIFIER, 0); }
	public FROM(): TerminalNode { return this.getToken(CommonParser.FROM, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public TO(): TerminalNode { return this.getToken(CommonParser.TO, 0); }
	public END(): TerminalNode { return this.getToken(CommonParser.END, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommonParser.NEWLINE);
		} else {
			return this.getToken(CommonParser.NEWLINE, i);
		}
	}
	public innerStatement(): InnerStatementContext[];
	public innerStatement(i: number): InnerStatementContext;
	public innerStatement(i?: number): InnerStatementContext | InnerStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerStatementContext);
		} else {
			return this.getRuleContext(i, InnerStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_forFromToStatement; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitForFromToStatement) {
			return visitor.visitForFromToStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(CommonParser.WHILE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public END(): TerminalNode { return this.getToken(CommonParser.END, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommonParser.NEWLINE);
		} else {
			return this.getToken(CommonParser.NEWLINE, i);
		}
	}
	public innerStatement(): InnerStatementContext[];
	public innerStatement(i: number): InnerStatementContext;
	public innerStatement(i?: number): InnerStatementContext | InnerStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerStatementContext);
		} else {
			return this.getRuleContext(i, InnerStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_whileStatement; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForeverStatementContext extends ParserRuleContext {
	public FOREVER(): TerminalNode { return this.getToken(CommonParser.FOREVER, 0); }
	public END(): TerminalNode { return this.getToken(CommonParser.END, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommonParser.NEWLINE);
		} else {
			return this.getToken(CommonParser.NEWLINE, i);
		}
	}
	public innerStatement(): InnerStatementContext[];
	public innerStatement(i: number): InnerStatementContext;
	public innerStatement(i?: number): InnerStatementContext | InnerStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerStatementContext);
		} else {
			return this.getRuleContext(i, InnerStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_foreverStatement; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitForeverStatement) {
			return visitor.visitForeverStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(CommonParser.BREAK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_breakStatement; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(CommonParser.CONTINUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_continueStatement; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(CommonParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_returnStatement; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CommonParser.NEWLINE);
		} else {
			return this.getToken(CommonParser.NEWLINE, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(CommonParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CommonParser.RULE_eos; }
	// @Override
	public accept<Result>(visitor: CommonParserVisitor<Result>): Result {
		if (visitor.visitEos) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


