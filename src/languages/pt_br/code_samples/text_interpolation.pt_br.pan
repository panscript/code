/*

Às vezes você quer exibir uma variável junto com um texto.

Por exemplo, a variável "nome" pode ser referenciada no
texto "Olá, nome!" para mostrar uma saudação personalizada.

*/

texto nome = "João"
numero idade = 12


// Você pode fazer isso usando "+" para concatenar textos:
escreva("Olá, " + nome + "!")
escreva("Você tem " + para_texto(idade) + " anos hoje.")
nova_linha()


// Ou você pode usar interpolação de texto, onde os valores dentro
// das chaves ({}) são automaticamente convertidos para o tipo texto:
escreva("Olá, {nome}!")
escreva("Você tem {idade} anos hoje.")
nova_linha()


// Você também pode evitar o uso de interpolação de texto
// usando aspas simples (') ao invés de aspas duplas ("):
escreva('Olá, {nome}!')
escreva('Você tem {idade} anos hoje.')