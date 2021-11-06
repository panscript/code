// Funções matemáticas são funções que manipulam variáveis e valores numéricos.

/*
	absoluto(x)
	Retorna o valor absoluto (magnitude) de x.
	Se x >= 0, retorna x; senão, retorna -x.
*/
escreva(">>> absoluto(x)")
escreva(absoluto(10))
escreva(absoluto(-10))
escreva(absoluto(0))
nova_linha()


/*
	minimo(x, y)
	Retorna o menor valor entre x e y.
*/
escreva(">>> minimo(x, y)")
escreva(minimo(1, 2))
escreva(minimo(2, 1))
nova_linha()


/*
	maximo(x, y)
	Retorna o maior valor entre x e y.
*/
escreva(">>> maximo(x, y)")
escreva(maximo(1, 2))
escreva(maximo(2, 1))
nova_linha()


/*
	piso(x)
	Retorna o maior número inteiro que é menor que x.
*/
escreva(">>> piso(x)")
escreva(piso(0.5))
escreva(piso(-0.5))
escreva(piso(5.7))
escreva(piso(-1.1))
nova_linha()


/*
	teto(x)
	Retorna o menor número inteiro que é maior que x.
*/
escreva(">>> teto(x)")
escreva(teto(0.5))
escreva(teto(-0.5))
escreva(teto(5.7))
escreva(teto(-1.1))
nova_linha()


/*
	arredonde(x)
	Retorna x arredondado para o inteiro mais próximo.
	O "midpoint" (.5) é arredondado "away-from-zero".
*/
escreva(">>> arredonde(x)")
escreva(arredonde(0.5))
escreva(arredonde(-0.5))
escreva(arredonde(5.7))
escreva(arredonde(-1.1))
nova_linha()


/*
	trunque(x)
	Retorna a parte inteira de x, sem quaisquer casas decimais.
*/
escreva(">>> trunque(x)")
escreva(trunque(0.5))
escreva(trunque(-0.5))
escreva(trunque(5.7))
escreva(trunque(-1.1))
nova_linha()


/*
	arredonde_n_casas(x, n)
	Retorna x arredondado em n casas decimais.
	O "midpoint" (.5) é arredondado "away-from-zero".
*/
escreva(">>> arredonde_n_casas(x, n)")
escreva(arredonde_n_casas(0.55, 1))
escreva(arredonde_n_casas(pi() / 4, 2))
nova_linha()


/*
	trunque_n_casas(x, n)
	Retorna x truncado em n casas decimais.
*/
escreva(">>> trunque_n_casas(x, n)")
escreva(trunque_n_casas(0.55, 1))
escreva(trunque_n_casas(pi() / 4, 2))
nova_linha()


/*
	real_aleatorio(a, b)
	Retorna um número real aleatório entre a (inclusivo) e b (exclusivo).
*/
escreva(">>> real_aleatorio(a, b)")
escreva(real_aleatorio(0, 1))
escreva(real_aleatorio(1, 100))
escreva(real_aleatorio(1, 100))
nova_linha()


/*
	inteiro_aleatorio(a, b)
	Retorna um número inteiro aleatório entre a (inclusivo) e b (exclusivo).
*/
escreva(">>> inteiro_aleatorio(a, b)")
escreva(inteiro_aleatorio(0, 1))
escreva(inteiro_aleatorio(1, 100))
escreva(inteiro_aleatorio(1, 100))
nova_linha()


/*
	raiz_quadrada(x)
	Retorna a raiz quadrada de x. Equivalente a potencia(x, 1/2).
*/
escreva(">>> raiz_quadrada(x)")
escreva(raiz_quadrada(9))
escreva(raiz_quadrada(16))
escreva(potencia(16, 1/2))
nova_linha()


/*
	potencia(x, n)
	Retorna x elevado à n-ésima potência.
*/
escreva(">>> potencia(x, n)")
escreva(potencia(2, 0))
escreva(potencia(2, 1))
escreva(potencia(2, 2))
escreva(potencia(2, 3))
nova_linha()


/*
	logaritmo(x, b)
	Retorna o logaritmo de x na base b.
	O resultado é o exponente na equação: (b^e = x).
*/
escreva(">>> logaritmo(x, b)")
escreva(logaritmo(8, 2))
escreva(logaritmo(100, 10))
nova_linha()


/*
	pi()
	Retorna uma aproximação da constante Pi.
*/
escreva(">>> pi()")
escreva(pi())
nova_linha()


/*
	seno(x)
	Retorna o seno de x.
	x deve estar em radianos.
*/
escreva(">>> seno(x)")
escreva(seno(pi() / 2))
escreva(seno(-pi() / 2))
nova_linha()


/*
	cosseno(x)
	Retorna o cosseno de x.
	x deve estar em radianos.
*/
escreva(">>> cosseno(x)")
escreva(cosseno(0))
escreva(cosseno(pi()))
nova_linha()


/*
	tangente(x)
	Retorna a tangente de x.
	x deve estar em radianos.
*/
escreva(">>> tangente(x)")
escreva(tangente(1))
escreva(tangente(2))
nova_linha()


/*
	arco_seno(x)
	Retorna o arco seno de x. O inverso do seno.
	O resultado é em radianos.
*/
escreva(">>> arco_seno(x)")
escreva(arco_seno(1))
escreva(arco_seno(-1))
nova_linha()


/*
	arco_cosseno(x)
	Retorna o arco cosseno de x. O inverso do cosseno.
	O resultado é em radianos.
*/
escreva(">>> arco_cosseno(x)")
escreva(arco_cosseno(1))
escreva(arco_cosseno(-1))
nova_linha()


/*
	arco_tangente(x)
	Retorna o arco tangente de x. O inverso da tangente.
	O resultado é em radianos.
*/
escreva(">>> arco_tangente(x)")
escreva(arco_tangente(1))
escreva(arco_tangente(-1))
nova_linha()


/*
	exponencial(x)
	Retorna a exponencial de x.
	exponencial(1) é o número de Euler.
*/
escreva(">>> exponencial(x)")
escreva(exponencial(0.5))
escreva(exponencial(1))
escreva(exponencial(2))
nova_linha()


/*
	logaritmo_natural(x)
	Retorna o logaritmo natural de x. O inverso da exponencial.
*/
escreva(">>> logaritmo_natural(x)")
escreva(logaritmo_natural(0.5))
escreva(logaritmo_natural(1))
escreva(logaritmo_natural(2))
nova_linha()