/*

Funções de usuário são funções criadas por você, o usuário.
Você pode criar funções para reutilizar trechos de código várias vezes,
ou para organizar seu código em partes menores, mais fáceis de testar.

Funções são declaradas da seguinte forma:
funcao nome(tipo_parâmetro nome_parâmetro, ...) retorna tipo
	// código que executa quando a função é chamada
fim

Ou, para funções sem tipo, da seguinte forma:
funcao nome(tipo_parâmetro nome_parâmetro, ...)
	// código que executa quando a função é chamada
fim

Você pode sair da função a qualquer momento com o comando retorne.
Retorne é usado para devolver um resultado a quem chamou a função.

*/

// Funções tipadas retornam um valor do tipo especificado
funcao resposta() retorna numero
	// Retorna o número 42
	retorne 42
fim

escreva(">>> resposta()")
escreva(resposta())
nova_linha()


// Funções podem ter zero ou mais parâmetros tipados
funcao incremente(numero x) retorna numero
	// Retorna o valor de x incrementado em 1
	retorne x + 1
fim

escreva(">>> incremente(x)")
escreva(incremente(1))				// note a compositação de funções
escreva(incremente(incremente(1)))	// note a compositação de funções
nova_linha()


funcao saudação(texto nome) retorna texto
	retorne "Olá, {nome}!"
fim

escreva(">>> saudação(nome)")
escreva(saudação("João"))
nova_linha()


funcao é_palíndromo(texto palavra, logico insensível_à_caixa) retorna logico
	se insensível_à_caixa
		palavra = minusculas(palavra)
	fim

	// Implementação ingênua (naïve)
	retorne palavra == inverta_texto(palavra)
fim

escreva(">>> é_palíndromo(palavra, insensível_à_caixa)")
escreva(é_palíndromo("Radar", falso))
escreva(é_palíndromo("Radar", verdadeiro))
escreva(é_palíndromo("Olá", verdadeiro))
nova_linha()


// Funções sem tipo não retornam um valor
funcao desenhe_triângulo(numero lado)
	// Se lado for zero ou negativo, não desenha nada
	se lado <= 0
		retorne  // saia da função aqui
	fim

	numero i = 1
	para sempre
		se i > lado
			retorne  // outra forma de interromper um loop
		fim

		escreva(repita("x", i))
		i += 1
	fim
fim

escreva(">>> desenhe_triângulo(lado)")
desenhe_triângulo(5)
nova_linha()