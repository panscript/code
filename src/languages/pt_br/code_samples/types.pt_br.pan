/*

Os valores em PanScript têm um de três tipos primitivos:
- Texto
- Número
- Lógico

*/

// Valores textuais são cercados de aspas duplas (") ou aspas simples (')
texto nome = "João"
escreva("Isto é um texto")
escreva('Isto também é um texto')
escreva("Isto é " + "uma expressão textual")
escreva("Isto é um texto com interpolação: {nome}")
escreva('Isto é um texto sem interpolação: {nome}')
nova_linha()

// mais sobre interpolação de texto a seguir


// Valores numéricos
constante numero PI = pi()
constante numero TAU = PI * 2
escreva(42)			// inteiro positivo
escreva(-10)		// número negativo
escreva(3.14)		// número real
escreva(.5)			// parte inteira opcional
escreva(12.)		// parte fracionária opcional
escreva(0x0f)		// número hexadecimal
escreva(0b101010)	// número binário
escreva(PI)
escreva(TAU)
nova_linha()

// mais sobre contantes a seguir


// Valores lógicos
logico a = verdadeiro
logico b = falso
escreva("nao verdadeiro: {nao verdadeiro}")
escreva("nao falso: {nao falso}")
escreva("nao a: {nao a}")
escreva("nao b: {nao b}")
escreva("verdadeiro e verdadeiro: {verdadeiro e verdadeiro}")
escreva("verdadeiro e falso: {verdadeiro e falso}")
escreva("falso e verdadeiro: {falso e verdadeiro}")
escreva("falso e falso: {falso e falso}")
escreva("a e b: {a e b}")
escreva("verdadeiro ou verdadeiro: {verdadeiro ou verdadeiro}")
escreva("verdadeiro ou falso: {verdadeiro ou falso}")
escreva("falso ou verdadeiro: {falso ou verdadeiro}")
escreva("falso ou falso: {falso ou falso}")
escreva("a ou b: {a ou b}")
nova_linha()

// mais sobre expressões a seguir