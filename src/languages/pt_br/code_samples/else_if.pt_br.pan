/*

Comandos Se também suportam um ou mais blocos Senão-Se opcionais.
O código do bloco Senão-Se executa se a sua condição é verdadeira
e todas as condições anteriores são falsas.

Com um bloco Senão-Se, o comando Se pode ser declarado da seguinte forma:
se primeira_condição
	// código que executa se primeira_condição é verdadeira
senao se segunda_condição
	// código que executa se primeira_condição é falsa
	// e segunda_condição é verdadeira
fim

Ou com múltiplos blocos Senão-Se, e também um bloco Senão:
se primeira_condição
	// código que executa se primeira_condição é verdadeira
senao se segunda_condição
	// código que executa se primeira_condição é falsa
	// e segunda_condição é verdadeira
senao se terceira_condição
	// código que executa se primeira_condição é falsa
	// e segunda_condição é falsa
	// e terceira_condição é verdadeira
senao
	// código que executa se nenhuma condição é verdadeira
fim

*/

// O exemplo abaixo simula um dado de seis lados
// e escreve uma mensagem com base no valor rolado

// Note que o segundo parâmetro é o limite + 1
numero dado = inteiro_aleatorio(1, 6+1)

escreva(dado)

se dado == 6
	escreva("Ótima rolagem!")
senao se dado <= 2
	escreva("Rolagem ruim!")
senao
	escreva("Rolagem OK")
fim

// Execute este exemplo várias vezes para obter resultados diferentes