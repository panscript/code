lexer grammar CustomLexer;

import CommonLexer;

fragment Alpha
	: [A-Za-z\u{C0}-\u{FF}]
	;

TRUE
	: 'vrai'
	;

FALSE
	: 'faux'
	;

BREAK
	: 'interromps'
	;

CONSTANT
	: 'constant'
	;

CONTINUE
	: 'continue'
	;

ELSE
	: 'sinon'
	;

END
	: 'fin'
	;

FOR
	: 'pour'
	;

FOREVER
	: 'pour toujours'
	;

FROM
	: 'de'
	;

FUNCTION
	: 'fonction'
	;

GLOBAL
	: 'global'
	;

IF
	: 'si'
	;

RETURN
	: 'retourne'
	;

RETURNS
	: 'renvoie'
	;

TO
	: 'jusqua'
	;

WHILE
	: 'tant que'
	;

AND
	: '&&'
	| 'et'
	;

OR
	: '||'
	| 'ou'
	;

NOT
	: '!'
	| 'non'
	;

LOGICAL
	: 'logique'
	;

NUMBER
	: 'nombre'
	;

TEXT
	: 'texte'
	;
