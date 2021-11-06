/*

Variáveis são declaradas da seguinte forma:
tipo nome = valor

Onde:
- tipo pode ser texto, número, or lógico (mais sobre isso a seguir);
- nome deve começar com uma letra ou um underline;
- nome pode conter letras, underlines, e números;
- valor deve ter o tipo declarado.

*/

// Exemplos
texto nome = "João da Silva"
texto endereço = "Rua Calma, 42"
numero idade = 18
numero saldo_em_conta = -100.25
logico está_dormindo = falso
logico está_estudando = verdadeiro


// Você pode usar nomes de variáveis para referenciar os seus valores
escreva(nome)
escreva(idade)
escreva(saldo_em_conta)
escreva(está_estudando)
nova_linha()


// Você pode atribuir novos valores às variáveis
escreva("Definindo idade como 19...")
idade = 19
escreva(idade)
nova_linha()


// E usá-las em expressões (mais sobre isso a seguir)
escreva("Somando R$ 100 ao saldo em conta...")
saldo_em_conta = saldo_em_conta + 100
escreva(saldo_em_conta)
nova_linha()


/*

Mas você não pode declarar a mesma variável duas vezes,
o que explica por que o código abaixo causaria um erro
se não estivesse dentro deste bloco de comentário:

numero idade = 19

*/