lexer grammar CommonLexer;

@members {
	parenLevel = 0;
}

tokens { TEXT_CONTENT }

fragment Alpha
	: [A-Za-z]
	;

fragment Digit
	: [0-9]
	;

TRUE
	: 'true'
	;

FALSE
	: 'false'
	;

BREAK
	: 'break'
	;

CONSTANT
	: 'constant'
	;

CONTINUE
	: 'continue'
	;

ELSE
	: 'else'
	;

END
	: 'end'
	;

FOR
	: 'for'
	;

FOREVER
	: 'forever'
	;

FROM
	: 'from'
	;

FUNCTION
	: 'function'
	;

GLOBAL
	: 'global'
	;

IF
	: 'if'
	;

RETURN
	: 'return'
	;

RETURNS
	: 'returns'
	;

TO
	: 'to'
	;

WHILE
	: 'while'
	;

ASSIGN
	: '='
	;

ADD
	: '+'
	;

SUBTRACT
	: '-'
	;

MULTIPLY
	: '*'
	;

DIVIDE
	: '/'
	;

REMAINDER
	: '%'
	;

POWER
	: '^'
	;

ADD_ASSIGN
	: '+='
	;

SUBTRACT_ASSIGN
	: '-='
	;

MULTIPLY_ASSIGN
	: '*='
	;

DIVIDE_ASSIGN
	: '/='
	;

REMAINDER_ASSIGN
	: '%='
	;

POWER_ASSIGN
	: '^='
	;

LESS
	: '<'
	;

LESS_OR_EQUAL
	: '<='
	;

GREATER
	: '>'
	;

GREATER_OR_EQUAL
	: '>='
	;

EQUAL
	: '=='
	;

DIFFERENT
	: '!='
	;

AND
	: '&&'
	| 'and'
	;

OR
	: '||'
	| 'or'
	;

NOT
	: '!'
	| 'not'
	;

LOGICAL
	: 'logical'
	;

NUMBER
	: 'number'
	;

TEXT
	: 'text'
	;

OPEN_PARENTHESIS
	: '(' { this.parenLevel += 1; }
	;

CLOSE_PARENTHESIS
	: ')' { this.parenLevel -= 1; }
	;

OPEN_BRACKET
	: '['
	;

CLOSE_BRACKET
	: ']'
	;

OPEN_BRACE
	: '{'
	;

CLOSE_BRACE
	: '}' -> popMode // end text interpolation
	;

DOT
	: '.'
	;

COMMA
	: ','
	;

QUOTE_SINGLE
	: '\'' -> pushMode(SINGLE_QUOTE_TEXT) // start text
	;

QUOTE_DOUBLE
	: '"' -> pushMode(DOUBLE_QUOTE_TEXT) // start text
	;

IDENTIFIER
	: (Alpha | '_') (Alpha | Digit | '_')*
	;

DECIMAL_NUMBER // allow numbers like 1, 1., .1 and 1.1
	: Digit+ '.'?
	| Digit* '.' Digit+
	;

HEX_NUMBER
	: '0x' [0-9A-Fa-f]+
	;

BINARY_NUMBER
	: '0b' [01]+
	;

NEWLINE // ignored inside parentheses
	: { this.parenLevel == 0 }? [\r\n]+
	;

WHITESPACE // capture newlines inside parentheses
	: ( { this.parenLevel > 0 }? [ \t\r\n]+
	| [ \t]+ ) -> channel(HIDDEN)
	;

LINE_COMMENT
	: ( '//' ~[\r\n]*
	| '#' ~[\r\n]* ) -> channel(HIDDEN)
	;

BLOCK_COMMENT
	: '/*' .*? '*/' -> channel(HIDDEN)
	;

UNKNOWN
	: .
	;


mode SINGLE_QUOTE_TEXT;

SINGLE_QUOTE_NEWLINE
	: [\r\n]+
	;

SINGLE_QUOTE_TEXT_QUOTE_SINGLE
	: '\'' -> type(QUOTE_SINGLE), popMode // end text
	;

SINGLE_QUOTE_TEXT_CONTENT
	: ( '\\' . // escaped character
	| ~[\\\r\n']+ ) -> type(TEXT_CONTENT)
	;


mode DOUBLE_QUOTE_TEXT;

DOUBLE_QUOTE_NEWLINE
	: [\r\n]+
	;

DOUBLE_QUOTE_TEXT_QUOTE_DOUBLE
	: '"' -> type(QUOTE_DOUBLE), popMode // end text
	;

DOUBLE_QUOTE_TEXT_OPEN_BRACE
	: '{' -> type(OPEN_BRACE), pushMode(DEFAULT_MODE) // start text interpolation
	;

DOUBLE_QUOTE_TEXT_CONTENT
	: ( '\\' . // escaped character
	| ~[\\\r\n"{]+ ) -> type(TEXT_CONTENT)
	;
