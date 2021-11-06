// Funções de texto são funções que manipulam variáveis e valores textuais.

/*
	para_texto(x)
	Converte qualquer valor 'x' para o tipo texto.
*/
escreva(">>> para_texto(x)")
escreva("Número: " + para_texto(42))
escreva("Lógico: " + para_texto(verdadeiro))
nova_linha()


/*
	comprimento(texto)
	Retorna o comprimento de um dado texto.
*/
escreva(">>> comprimento(texto)")
escreva(comprimento("Olá"))
escreva(comprimento(""))
nova_linha()


/*
	maiusculas(texto)
	Retorna o texto com todas as letras maiúsculas.
*/
escreva(">>> maiusculas(texto)")
escreva(maiusculas("minúsculas"))
escreva(maiusculas("MAIÚSCULAS"))
escreva(maiusculas("Sentença"))
nova_linha()


/*
	minusculas(texto)
	Retorna o texto com todas as letras minúsculas.
*/
escreva(">>> minusculas(texto)")
escreva(minusculas("minúsculas"))
escreva(minusculas("MAIÚSCULAS"))
escreva(minusculas("Sentença"))
nova_linha()


/*
	sentenca(texto)
	Retorna o texto com a primeira letra maiúscula e as demais minúsculas.
*/
escreva(">>> sentenca(texto)")
escreva(sentenca("minúsculas"))
escreva(sentenca("MAIÚSCULAS"))
escreva(sentenca("Sentença"))
nova_linha()


/*
	esquerda(texto, contagem)
	Retorna até 'contagem' caracteres mais à esquerda do texto.
*/
escreva(">>> esquerda(texto, contagem)")
escreva(esquerda("Texto longo", 7))
escreva(esquerda("Texto", 7))
nova_linha()


/*
	direita(texto, contagem)
	Retorna até 'contagem' caracteres mais à esquerda do texto.
*/
escreva(">>> direita(texto, contagem)")
escreva(direita("Texto longo", 7))
escreva(direita("Texto", 7))
nova_linha()


/*
	meio(texto, posição, contagem)
	Retorna até 'contagem' caracteres do texto a partir de dada posição.
	A posição é 0-indexada, então 0 é o começo do texto.
*/
escreva(">>> meio(texto, posição, contagem)")
escreva(meio("ABCDEFG", 0, 3))
escreva(meio("ABCDEFG", 2, 3))
escreva(meio("ABCDEFG", 2, 10))
nova_linha()


/*
	fatie_texto(texto, início, fim)
	Retorna todos os caracteres do texto entre as posições 'início' e 'fim'.
	Posições são 0-indexadas, então 0 é o começo do texto.
*/
escreva(">>> fatie_texto(texto, início, fim)")
escreva(fatie_texto("ABCDEFG", 0, 3))
escreva(fatie_texto("ABCDEFG", 2, 3))
escreva(fatie_texto("ABCDEFG", 2, 10))
nova_linha()


/*
	no_texto(texto, texto_buscado)
	Retorna um valor lógico indicando se 'texto_buscado' ocorre no texto.
*/
escreva(">>> no_texto(texto, texto_buscado)")
escreva(no_texto("Este é um texto", "Este"))
escreva(no_texto("Este é um texto", "este"))
nova_linha()


/*
	posicao(texto, texto_buscado)
	Retorna a posição da primeira ocorrência de 'texto_buscado' no texto.
	A posição retornada é 0-indexada, então 0 é o começo do texto.
	Retorna -1 se 'texto_buscado' não ocorre no texto.
*/
escreva(">>> posicao(texto, texto_buscado)")
escreva(posicao("Este é um texto", "Este"))
escreva(posicao("Este é um texto", "este"))
nova_linha()


/*
	preencha_esquerda(texto, comprimento, preenchimento)
	Preencha o dado texto usando 'preenchimento' até o 'comprimento' desejado.
	O 'preenchimento' é inserido à esquerda do texto.
*/
escreva(">>> preencha_esquerda(texto, comprimento, preenchimento)")
escreva(preencha_esquerda("12345", 8, "0"))
escreva(preencha_esquerda("12345", 10, "ab"))
nova_linha()


/*
	preencha_direita(texto, comprimento, preenchimento)
	Preencha o dado texto usando 'preenchimento' até o 'comprimento' desejado.
	O 'preenchimento' é inserido à direita do texto.
*/
escreva(">>> preencha_direita(texto, comprimento, preenchimento)")
escreva(preencha_direita("12345", 8, "0"))
escreva(preencha_direita("12345", 10, "ab"))
nova_linha()


/*
	repita(texto, contagem)
	Repete o dado texto 'contagem' vezes.
*/
escreva(">>> repita(texto, contagem)")
escreva(repita("a", 5))
escreva(repita("abc", 2))
nova_linha()


/*
	inverta_texto(texto)
	Retorna o texto com todos os caracteres em ordem contrária.
*/
escreva(">>> inverta_texto(texto)")
escreva(inverta_texto("Olá"))
nova_linha()


/*
	aparar(texto)
	Retorna o texto sem espaços em branco no começo e no fim.
*/
escreva(">>> aparar(texto)")
escreva("'" + aparar(" Olá ") + "'")
nova_linha()


/*
	aparar_esquerda(texto)
	Retorna o texto sem espaços em branco no começo.
*/
escreva(">>> aparar_esquerda(texto)")
escreva("'" + aparar_esquerda(" Olá ") + "'")
nova_linha()


/*
	aparar_direita(texto)
	Retorna o texto sem espaços em branco no fim.
*/
escreva(">>> aparar_direita(texto)")
escreva("'" + aparar_direita(" Olá ") + "'")
nova_linha()