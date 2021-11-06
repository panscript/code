// Les fonctions mathématiques sont des fonctions qui manipulent des variables et des valeurs numériques.

/*
	absolute(x)
	Renvoie la valeur absolue (magnitude) de x.
	Si x >= 0, renvoie x ; sinon, renvoie -x.
*/
ecrire(">>> absolute(x)")
ecrire(absolute(10))
ecrire(absolute(-10))
ecrire(absolute(0))
nouvelle_ligne()


/*
	minimum(x, y)
	Renvoie la plus petite valeur entre x et y.
*/
ecrire(">>> minimum(x, y)")
ecrire(minimum(1, 2))
ecrire(minimum(2, 1))
nouvelle_ligne()


/*
	maximum(x, y)
	Renvoie la plus grande valeur entre x et y.
*/
ecrire(">>> maximum(x, y)")
ecrire(maximum(1, 2))
ecrire(maximum(2, 1))
nouvelle_ligne()


/*
	plancher(x)
	Renvoie le plus grand entier inférieur à x.
*/
ecrire(">>> plancher(x)")
ecrire(plancher(0.5))
ecrire(plancher(-0.5))
ecrire(plancher(5.7))
ecrire(plancher(-1.1))
nouvelle_ligne()


/*
	plafond(x)
	Renvoie le plus petit entier supérieur à x.
*/
ecrire(">>> plafond(x)")
ecrire(plafond(0.5))
ecrire(plafond(-0.5))
ecrire(plafond(5.7))
ecrire(plafond(-1.1))
nouvelle_ligne()


/*
	arrondir(x)
	Renvoie x arrondi à l'entier le plus proche.
	Le "point du milieu" (.5) est arrondi "loin de zéro".
*/
ecrire(">>> arrondir(x)")
ecrire(arrondir(0.5))
ecrire(arrondir(-0.5))
ecrire(arrondir(5.7))
ecrire(arrondir(-1.1))
nouvelle_ligne()


/*
	tronquer(x)
	Renvoie la partie entière de x, sans aucune décimale.
*/
ecrire(">>> tronquer(x)")
ecrire(tronquer(0.5))
ecrire(tronquer(-0.5))
ecrire(tronquer(5.7))
ecrire(tronquer(-1.1))
nouvelle_ligne()


/*
	arrondir_n_places(x, n)
	Renvoie x arrondi à n décimales.
	Le "point du milieu" (.5) est arrondi "loin de zéro".
*/
ecrire(">>> arrondir_n_places(x, n)")
ecrire(arrondir_n_places(0.55, 1))
ecrire(arrondir_n_places(pi() / 4, 2))
nouvelle_ligne()


/*
	tronquer_n_places(x, n)
	Renvoie x tronqué à n décimales.
*/
ecrire(">>> tronquer_n_places(x, n)")
ecrire(tronquer_n_places(0.55, 1))
ecrire(tronquer_n_places(pi() / 4, 2))
nouvelle_ligne()


/*
	aleatoire_reel(a, b)
	Renvoie un nombre aléatoire réel entre a (inclus) et b (non inclus).
*/
ecrire(">>> aleatoire_reel(a, b)")
ecrire(aleatoire_reel(0, 1))
ecrire(aleatoire_reel(1, 100))
ecrire(aleatoire_reel(1, 100))
nouvelle_ligne()


/*
	aleatoire_entier(a, b)
	Renvoie un nombre aléatoire entier entre a (inclus) et b (non inclus).
*/
ecrire(">>> aleatoire_entier(a, b)")
ecrire(aleatoire_entier(0, 1))
ecrire(aleatoire_entier(1, 100))
ecrire(aleatoire_entier(1, 100))
nouvelle_ligne()


/*
	racine_carree(x)
	Renvoie la racine carrée de x. Équivalent à la puissance(x, 1/2).
*/
ecrire(">>> racine_carree(x)")
ecrire(racine_carree(9))
ecrire(racine_carree(16))
ecrire(puissance(16, 1/2))
nouvelle_ligne()


/*
	puissance(x, n)
	Renvoie x à la puissance n.
*/
ecrire(">>> puissance(x, n)")
ecrire(puissance(2, 0))
ecrire(puissance(2, 1))
ecrire(puissance(2, 2))
ecrire(puissance(2, 3))
nouvelle_ligne()


/*
	logarithme(x, b)
	Renvoie le logarithme de x en base b.
	Le résultat est l'exposant dans l'équation : (b^e = x).
*/
ecrire(">>> logarithme(x, b)")
ecrire(logarithme(8, 2))
ecrire(logarithme(100, 10))
nouvelle_ligne()


/*
	pi()
	Renvoie une approximation de la constante Pi.
*/
ecrire(">>> pi()")
ecrire(pi())
nouvelle_ligne()


/*
	sinus(x)
	Renvoie le sinus de x.
	x doit être en radians.
*/
ecrire(">>> sinus(x)")
ecrire(sinus(pi() / 2))
ecrire(sinus(-pi() / 2))
nouvelle_ligne()


/*
	cosinus(x)
	Renvoie le cosinus de x.
	x doit être en radians.
*/
ecrire(">>> cosinus(x)")
ecrire(cosinus(0))
ecrire(cosinus(pi()))
nouvelle_ligne()


/*
	tangente(x)
	Renvoie la tangente de x.
	x doit être en radians.
*/
ecrire(">>> tangente(x)")
ecrire(tangente(1))
ecrire(tangente(2))
nouvelle_ligne()


/*
	arc_sinus(x)
	Renvoie l'arc sinus de x. L'inverse du sinus.
	Le résultat est en radians.
*/
ecrire(">>> arc_sinus(x)")
ecrire(arc_sinus(1))
ecrire(arc_sinus(-1))
nouvelle_ligne()


/*
	arc_cosinus(x)
	Renvoie l'arc cosinus de x. L'inverse du cosinus.
	Le résultat est en radians.
*/
ecrire(">>> arc_cosinus(x)")
ecrire(arc_cosinus(1))
ecrire(arc_cosinus(-1))
nouvelle_ligne()


/*
	arc_tangente(x)
	Renvoie l'arc tangente de x. L'inverse de la tangente.
	Le résultat est en radians.
*/
ecrire(">>> arc_tangente(x)")
ecrire(arc_tangente(1))
ecrire(arc_tangente(-1))
nouvelle_ligne()


/*
	exponentielx)
	Renvoie l'exponentielle de x.
	exponentiel(1) est le nombre d'Euler.
*/
ecrire(">>> exponentiel(x)")
ecrire(exponentiel(0.5))
ecrire(exponentiel(1))
ecrire(exponentiel(2))
nouvelle_ligne()


/*
	logarithme_naturel(x)
	Renvoie le logarithme népérien de x. L'inverse de l'exponentielle.
*/
ecrire(">>> logarithme_naturel(x)")
ecrire(logarithme_naturel(0.5))
ecrire(logarithme_naturel(1))
ecrire(logarithme_naturel(2))
nouvelle_ligne()