// Les expressions combinent des variables à l'aide d'opérateurs standard

// Elles peuvent utiliser des opérateurs numériques :
ecrire(2 + 2)		// addition
ecrire(3 - 1)		// soustraction
ecrire(3 * 2)		// multiplication
ecrire(10 / 3)		// division
ecrire(10 % 3)		// reste de la division
ecrire(2 ^ 3)		// exponentiation
nouvelle_ligne()

// Opérateurs logiques :
ecrire(non vrai)
ecrire(!vrai)			// ! est la même chose que "non"
ecrire(vrai et faux)
ecrire(vrai && faux)	// && est la même chose que "et"
ecrire(vrai ou faux)
ecrire(vrai || faux)	// || est la même chose que "ou"
nouvelle_ligne()

// Et les opérateurs relationnels :
ecrire(2 > 1)				// plus grand
ecrire(2 >= 2)				// plus grand ou égal
ecrire(2 < 1)				// plus petite
ecrire(2 <= 2)				// plus petite ou égal
ecrire(1 == 1)				// égal
ecrire(vrai == vrai)		// égal
ecrire("Olá" == "Olá")		// égal
ecrire(1 != 0)				// différent
ecrire(vrai != faux)		// différent
ecrire("Salut" != "Salut")	// différent
nouvelle_ligne()

// La priorité des opérateurs peut être modifiée avec des parenthèses :
ecrire(1 + 2 * 3)
ecrire((1 + 2) * 3)
ecrire(vrai ou faux et faux)
ecrire((vrai ou faux) et faux)
nouvelle_ligne()