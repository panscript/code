/*

Recursão é quando uma função chama a si mesma.
Dois exemplos relevantes são as funções fatorial e fibonacci.

As implementações abaixo não suportam números negativos como argumentos.
Chamá-las com um número negativo causaria um loop infinito.

*/

funcao fatorial(numero n) retorna numero
	se n == 0
		retorne 1
	fim

	retorne n * fatorial(n - 1)
fim

escreva(">>> fatorial(n)")
escreva(fatorial(0))
escreva(fatorial(1))
escreva(fatorial(2))
escreva(fatorial(3))
escreva(fatorial(4))
escreva(fatorial(5))
escreva(fatorial(6))
escreva(fatorial(7))
nova_linha()


funcao fibonacci(numero n) retorna numero
	se n == 0
		retorne 0
	senao se n == 1
		retorne 1
	fim

	retorne fibonacci(n - 1) + fibonacci(n - 2)
fim

escreva(">>> fibonacci(n)")
escreva(fibonacci(0))
escreva(fibonacci(1))
escreva(fibonacci(2))
escreva(fibonacci(3))
escreva(fibonacci(4))
escreva(fibonacci(5))
escreva(fibonacci(6))
escreva(fibonacci(7))
nova_linha()