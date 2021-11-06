/*

Comandos Se suportam um bloco Senão opcional.
O código no bloco Senão executa se a condição é falsa.

Com um bloco Senão, o comando Se é declarado da seguinte forma:
se condição
	// código que executa se a condição é verdadeira
senao
	// código que executa se a condição é falsa
fim

*/

// O exemplo abaixo simula um dado de seis lados
// e escreve uma mensagem com base no valor rolado

// Note que o segundo parâmetro é o limite + 1
numero dado = inteiro_aleatorio(1, 6+1)

escreva(dado)

se dado >= 5
	escreva("Ótima rolagem!")
senao
	escreva("Rolagem OK")
fim

// Execute este exemplo várias vezes para obter resultados diferentes