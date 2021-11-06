parser grammar CommonParser;

options {
	tokenVocab=CommonLexer;
}

program
	: NEWLINE* topStatement*
	;

topStatement
	: functionDeclaration eos
	| statement
	;

innerStatement
	: globalStatement eos
	| breakStatement eos
	| continueStatement eos
	| returnStatement eos
	| statement
	;

statement
	: variableDeclaration eos
	| variableAssignment eos
	| ifStatement eos
	| forFromToStatement eos
	| whileStatement eos
	| foreverStatement eos
	| functionCall eos
	;

globalStatement
	: GLOBAL IDENTIFIER
	;

functionDeclaration
	: FUNCTION IDENTIFIER OPEN_PARENTHESIS parameterList? CLOSE_PARENTHESIS
		(RETURNS type)? NEWLINE+ innerStatement* END
	;

parameterList
	: type IDENTIFIER (COMMA type IDENTIFIER)*
	;

variableDeclaration
	: CONSTANT? type IDENTIFIER ASSIGN expression
	;

type
	: LOGICAL	#logicalType
	| NUMBER	#numberType
	| TEXT		#textType
	;

expression
	: OPEN_PARENTHESIS expression CLOSE_PARENTHESIS		#parenthesisExpression
	| ADD expression									#plusExpression
	| SUBTRACT expression								#minusExpression
	| NOT expression									#notExpression
	| <assoc=right> expression POWER expression			#powerExpression
	| expression MULTIPLY expression					#multiplyExpression
	| expression DIVIDE expression						#divideExpression
	| expression REMAINDER expression					#remainderExpression
	| expression ADD expression							#addExpression
	| expression SUBTRACT expression					#subtractExpression
	| expression LESS expression						#lessExpression
	| expression LESS_OR_EQUAL expression				#lessEqualExpression
	| expression GREATER expression						#greaterExpression
	| expression GREATER_OR_EQUAL expression			#greaterEqualExpression
	| expression EQUAL expression						#equalExpression
	| expression DIFFERENT expression					#differentExpression
	| expression AND expression							#andExpression
	| expression OR expression							#orExpression
	| atom												#atomExpression
	;

atom
	: TRUE				#trueAtom
	| FALSE				#falseAtom
	| numberLiteral		#numberAtom
	| textLiteral		#textAtom
	| functionCall		#functionCallAtom
	| IDENTIFIER		#identifierAtom
	;

numberLiteral
	: DECIMAL_NUMBER
	| HEX_NUMBER
	| BINARY_NUMBER
	;

textLiteral
	: QUOTE_SINGLE TEXT_CONTENT* QUOTE_SINGLE		#simpleTextLiteral
	| QUOTE_DOUBLE interpolatedText* QUOTE_DOUBLE	#interpolatedTextLiteral
	;

interpolatedText
	: TEXT_CONTENT							#interpolatedSimpleText
	| OPEN_BRACE expression CLOSE_BRACE		#interpolatedExpressionText
	;

functionCall
	: IDENTIFIER OPEN_PARENTHESIS argumentList? CLOSE_PARENTHESIS
	;

argumentList
	: expression (COMMA expression)*
	;

variableAssignment
	: IDENTIFIER ASSIGN expression				#assignment
	| IDENTIFIER ADD_ASSIGN expression			#addAssignment
	| IDENTIFIER SUBTRACT_ASSIGN expression		#subtractAssignment
	| IDENTIFIER MULTIPLY_ASSIGN expression		#multiplyAssignment
	| IDENTIFIER DIVIDE_ASSIGN expression		#divideAssignment
	| IDENTIFIER REMAINDER_ASSIGN expression	#remainderAssignment
	| IDENTIFIER POWER_ASSIGN expression		#powerAssignment
	;

ifStatement
	: IF expression NEWLINE+ innerStatement* elseIfPart* elsePart? END
	;

elseIfPart
	: ELSE IF expression NEWLINE+ innerStatement*
	;

elsePart
	: ELSE NEWLINE+ innerStatement*
	;

forFromToStatement
	: FOR type IDENTIFIER FROM expression TO expression NEWLINE+ innerStatement* END
	;

whileStatement
	: WHILE expression NEWLINE+ innerStatement* END
	;

foreverStatement
	: FOREVER NEWLINE+ innerStatement* END
	;

breakStatement
	: BREAK
	;

continueStatement
	: CONTINUE
	;

returnStatement
	: RETURN expression?
	;

eos
	: NEWLINE+ EOF?
	| EOF
	;
