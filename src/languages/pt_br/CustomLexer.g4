lexer grammar CustomLexer;

import CommonLexer;

fragment Alpha
	: [A-Za-z\u{C0}-\u{FF}]
	;

TRUE
	: 'verdadeiro'
	;

FALSE
	: 'falso'
	;

BREAK
	: 'interrompa'
	;

CONSTANT
	: 'constante'
	;

CONTINUE
	: 'continue'
	;

ELSE
	: 'senao'
	;

END
	: 'fim'
	;

FOR
	: 'para'
	;

FOREVER
	: 'para sempre'
	;

FROM
	: 'de'
	;

FUNCTION
	: 'funcao'
	;

GLOBAL
	: 'global'
	;

IF
	: 'se'
	;

RETURN
	: 'retorne'
	;

RETURNS
	: 'retorna'
	;

TO
	: 'ate'
	;

WHILE
	: 'enquanto'
	;

AND
	: '&&'
	| 'e'
	;

OR
	: '||'
	| 'ou'
	;

NOT
	: '!'
	| 'nao'
	;

LOGICAL
	: 'logico'
	;

NUMBER
	: 'numero'
	;

TEXT
	: 'texto'
	;
