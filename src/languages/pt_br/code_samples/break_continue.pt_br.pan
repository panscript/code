/*

Existem ao menos três formas de se interromper um loop.

Interrompa sai do loop, e a execução segue após o fim dele.
Continue pula a iteração atual, mas continua dentro do loop.

Dentro de uma função, você também pode parar um loop usando
o comando Retorne (mais sobre isso a seguir).

*/

escreva("Começo do loop")

numero i = 0
para sempre
	i += 1

	// Interrompe o loop após 10 iterações
	se i > 10
		interrompa
	fim

	// Pula múltiplos de três
	se i % 3 == 0
		continue
	fim

	escreva(i)
fim

escreva("Fim do loop")