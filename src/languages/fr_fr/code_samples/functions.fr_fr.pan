/*

Les fonctions d'utilisateur sont des fonctions créés par vous,
l'utilisateur. Vous pouvez créer des fonctions pour réutiliser des
extraits de code encore et encore, ou pour organiser votre code en
morceaux plus petits qui sont plus faciles à tester.

Les fonctions sont déclarées comme suit :
fonction nom(type_du_paramètre nom_du_paramètre, ...) renvoie type
	// code qui s'exécute lorsque la fonction est appelée
fin

Ou, pour les fonctions non typées, comme suit :
fonction nom(type_du_paramètre nom_du_paramètre, ...)
	// code qui s'exécute lorsque la fonction est appelée
fin

Vous pouvez finir l'éxécution de la fonction à tout moment avec la
commande retourne. Cette commande "retourne" est utilisée pour
renvoyer un résultat à l'appelant de la fonction.

*/

// Les fonctions typées renvoient une valeur du type spécifié
fonction réponse() renvoie nombre
	// Retourne le nombre 42
	retourne 42
fin

ecrire(">>> réponse()")
ecrire(réponse())
nouvelle_ligne()

// Les fonctions peuvent avoir zéro ou plusieurs paramètres typés
fonction incrément(nombre x) renvoie nombre
	// Renvoie la valeur de x incrémentée de 1
	retourne x + 1
fin

ecrire(">>> incrément(x)")
ecrire(incrément(1))			// Noter la composition des fonctions
ecrire(incrément(incrément(1)))	// Noter la composition des fonctions
nouvelle_ligne()

fonction salutation(texte nom_de_la_personne) renvoie texte
	retourne "Salut, {nom_de_la_personne} !"
fin

ecrire(">>> salutation(nom)")
ecrire(salutation("Jean"))
nouvelle_ligne()


fonction cest_palindrome(texte mot, logique insensible_à_la_casse) renvoie logique
	si insensible_à_la_casse
		mot = minuscule(mot)
	fin

	// Implémentation naïve (naïve)
	retourne mot == inverser_le_texte(mot)
fin

ecrire(">>> cest_palindrome(mot, insensible_à_la_casse)")
ecrire(cest_palindrome("Radar", faux))
ecrire(cest_palindrome("Radar", vrai))
ecrire(cest_palindrome("Salut", vrai))
nouvelle_ligne()


// Les fonctions sans type ne renvoient pas de valeur
fonction dessiner_triangle(nombre côté)
	// Si le côté est nul ou négatif, ne dessinez rien
	si côté <= 0
		retourne  // quitter la fonction ici
	fin

	nombre i = 1
	pour toujours
		si i > côté
			retourne  // une autre façon de quitter une boucle
		fin

		ecrire(repeter("x", i))
		i += 1
	fin
fin

ecrire(">>> dessiner_triangle(côté)")
dessiner_triangle(5)
nouvelle_ligne()