/*

Use o comando Se para executar um bloco de código apenas
caso uma condição seja verdadeira.

Comandos Se são declarados da seguinte forma:
se condição
	// código que executa se a condição é verdadeira
fim

*/

// O exemplo abaixo simula um dado de seis lados
// e escreve uma mensagem com base no valor rolado

// Note que o segundo parâmetro é o limite + 1
numero dado = inteiro_aleatorio(1, 6+1)

escreva(dado)

se dado <= 3
	escreva("Rolagem ruim!")
fim

se dado >= 4
	escreva("Boa rolagem!")
fim

// Execute este exemplo várias vezes para obter resultados diferentes