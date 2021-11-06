// Funções de console são funções que interagem com o console de saída.

/*
	escreva(x)
	Escreve um valor x de qualquer tipo no console após convertê-lo para texto.
	O cursor é movido para a próxima linha.
*/
escreva(">>> escreva(x)")
escreva("Esta é uma linha")
escreva("Esta é outra linha")
nova_linha()


/*
	escreva_na_linha(x)
	Escreve um valor x de qualquer tipo no console após convertê-lo para texto.
	O cursor permanece na mesma linha.
*/
escreva(">>> escreva_na_linha(x)")
escreva_na_linha("Esta é ")
escreva_na_linha("uma única linha ")
escreva_na_linha("e aqui vem uma quebra de linha: \r\n")
nova_linha()


/*
	nova_linha()
	Escreve uma linha em branco no console.
	Equivalente a escrever a sequência de caracteres de controle CRLF: \r\n
*/
escreva(">>> nova_linha()")
nova_linha()
escreva_na_linha("\r\n")
nova_linha()