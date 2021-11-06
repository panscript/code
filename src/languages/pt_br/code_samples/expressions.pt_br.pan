// Expressões combinam variáveis usando operadores padrão

// Elas podem usar operadores numéricos:
escreva(2 + 2)		// adição
escreva(3 - 1)		// subtração
escreva(3 * 2)		// multiplicação
escreva(10 / 3)		// divisão
escreva(10 % 3)		// resto da divisão
escreva(2 ^ 3)		// exponenciação
nova_linha()

//Operadores lógicos:
escreva(nao verdadeiro)
escreva(!verdadeiro)			// ! é o mesmo que "nao"
escreva(verdadeiro e falso)
escreva(verdadeiro && falso)	// && é o mesmo que "e"
escreva(verdadeiro ou falso)
escreva(verdadeiro || falso)	// || é o mesmo que "ou"
nova_linha()

// E operadores relacionais:
escreva(2 > 1)						// maior
escreva(2 >= 2)						// maior ou igual
escreva(2 < 1)						// menor
escreva(2 <= 2)						// menor ou igual
escreva(1 == 1)						// igual
escreva(verdadeiro == verdadeiro)	// igual
escreva("Olá" == "Olá")				// igual
escreva(1 != 0)						// diferente
escreva(verdadeiro != falso)		// diferente
escreva("Olá" != "Olá")				// diferente
nova_linha()

// A precedência dos operadores pode ser modificada com parênteses:
escreva(1 + 2 * 3)
escreva((1 + 2) * 3)
escreva(verdadeiro ou falso e falso)
escreva((verdadeiro ou falso) e falso)
nova_linha()