/*

Loops permitem repetir a execução de um bloco de código
até alguma condição causar a sua parada.

Loops Enquanto são declarados da seguinte forma:
enquanto condição
	// código que executa repetidamente até que a condição seja falsa
fim

Loops De-Até são declarados da seguinte forma:
para numero nome_variável de expressão ate expressão
	// código que executa uma vez para cada valor no intervalo
fim

Loops Para-Sempre são declarados da seguinte forma:
para sempre
	// código que executa repetidamente até ser interrompido
fim

*/


// Loops Enquanto repetem até que a condição testada seja falsa:
numero número_jogador = 1
enquanto número_jogador <= 4
	escreva("Jogador #{número_jogador} entrou!")
	número_jogador += 1
fim
nova_linha()


// Loops De-Até repetem uma vez para cada valor no intervalo
// atualizando a variável declarada em cada iteração:
escreva("Calculando os dez primeiros múltiplos de três")
para numero x de 1 ate 10
	escreva(3 * x)
fim
nova_linha()


// Loops Para-Sempre são infinitos, então você deve pará-los manualmente:
escreva("Iniciando jogo")

numero máx_tentativas = 5
numero tentativa = 1
para sempre
	numero dado = inteiro_aleatorio(1, 6+1)
	escreva("Rolou um {dado}")

	se dado == 6
		texto nome_tentativa = "tentativa"
		se tentativa > 1
			nome_tentativa += "s"  // deixa no plural
		fim

		escreva("Tirou um 6 em {tentativa} {nome_tentativa}!")
		interrompa  // para o loop (mais sobre isso a seguir)
	fim

	tentativa += 1

	se tentativa > máx_tentativas
		escreva("Mais sorte da próxima vez!")
		interrompa  // para o loop (mais sobre isso a seguir)
	fim
fim

escreva("Fim de jogo")