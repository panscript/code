// Les fonctions de texte sont des fonctions qui manipulent des variables et des valeurs textuelles.

/*
	vers_texte(x)
	Convertissez n'importe quelle valeur « x » en type de texte.
*/
ecrire(">>> vers_texte(x)")
ecrire("Nombre : " + vers_texte(42))
ecrire("Logique : " + vers_texte(vrai))
nouvelle_ligne()


/*
	longueur(texto)
	Renvoie la longueur d'un texte donné.
*/
ecrire(">>> longueur(texte)")
ecrire(longueur("Salut"))
ecrire(longueur(""))
nouvelle_ligne()


/*
	majuscule(texto)
	Renvoie le texte en toutes lettres majuscules.
*/
ecrire(">>> majuscule(texte)")
ecrire(majuscule("minuscule"))
ecrire(majuscule("MINUSCULE"))
ecrire(majuscule("Phrase"))
nouvelle_ligne()


/*
	minuscule(texte)
	Renvoie le texte avec toutes les lettres minuscules.
*/
ecrire(">>> minuscule(texto)")
ecrire(minuscule("minuscule"))
ecrire(minuscule("MAJUSCULE"))
ecrire(minuscule("Phrase"))
nouvelle_ligne()


/*
	phrase(texte)
	Renvoie le texte avec la première lettre en majuscule et les autres en minuscule.
*/
ecrire(">>> phrase(texte)")
ecrire(phrase("minuscule"))
ecrire(phrase("MAJUSCULE"))
ecrire(phrase("Phrase"))
nouvelle_ligne()


/*
	gauche(texte, compte)
	Renvoie jusqu'aux caractères « compte » les plus à gauche du texte.
*/
ecrire(">>> gauche(texte, compte)")
ecrire(gauche("Texte longue", 7))
ecrire(gauche("Texte", 7))
nouvelle_ligne()


/*
	droite(texte, compte)
	Renvoie jusqu'aux caractères « compte » les plus à droite du texte.
*/
ecrire(">>> droite(texte, compte)")
ecrire(droite("Texte longue", 7))
ecrire(droite("Texte", 7))
nouvelle_ligne()


/*
	milieu(texte, position, compte)
	Renvoie jusqu'à « compte » caractères de texte à partir d'une position donnée.
	La position est indexée à 0, donc 0 est le début du texte.
*/
ecrire(">>> milieu(texte, position, compte)")
ecrire(milieu("ABCDEFG", 0, 3))
ecrire(milieu("ABCDEFG", 2, 3))
ecrire(milieu("ABCDEFG", 2, 10))
nouvelle_ligne()


/*
	trancher_le_texte(texte, début, fin)
	Renvoie tous les caractères de texte entre les positions "début" et "fin".
	La position est indexée à 0, donc 0 est le début du texte.
*/
ecrire(">>> trancher_le_texte(texte, début, fin)")
ecrire(trancher_le_texte("ABCDEFG", 0, 3))
ecrire(trancher_le_texte("ABCDEFG", 2, 3))
ecrire(trancher_le_texte("ABCDEFG", 2, 10))
nouvelle_ligne()


/*
	dans_le_texte(texte, texte_recherché)
	Renvoie une valeur logique indiquant si le 'texte_recherché' apparaît dans le texte.
*/
ecrire(">>> dans_le_texte(texte, texte_recherché)")
ecrire(dans_le_texte("Ceci est un texte", "Ceci"))
ecrire(dans_le_texte("Ceci est un texte", "ceci"))
nouvelle_ligne()


/*
	position(texte, texte_recherché)
	Renvoie la position de la première occurrence de 'texte_recherché' dans le texte.
	La position est indexée à 0, donc 0 est le début du texte.
	Renvoie -1 si 'texte_recherché' n'apparaît pas dans le texte.
*/
ecrire(">>> position(texte, texte_recherché)")
ecrire(position("Ceci est un texte", "Ceci"))
ecrire(position("Ceci est un texte", "ceci"))
nouvelle_ligne()


/*
	remplir_gauche(texte, longuer, remplissage)
	Remplissez le texte donné en utilisant 'remplissage' jusqu'à la 'longueur' souhaitée.
	La 'remplissage' est insérée à gauche du texte.
*/
ecrire(">>> remplir_gauche(texte, longuer, remplissage)")
ecrire(remplir_gauche("12345", 8, "0"))
ecrire(remplir_gauche("12345", 10, "ab"))
nouvelle_ligne()


/*
	remplir_droite(texte, longuer, remplissage)
	Remplissez le texte donné en utilisant 'remplissage' jusqu'à la 'longueur' souhaitée.
	La 'remplissage' est insérée à droite du texte.
*/
ecrire(">>> remplir_droite(texte, longuer, remplissage)")
ecrire(remplir_droite("12345", 8, "0"))
ecrire(remplir_droite("12345", 10, "ab"))
nouvelle_ligne()


/*
	repeter(texte, compte)
	Répète le texte donné 'compte' fois.
*/
ecrire(">>> repeter(texte, compte)")
ecrire(repeter("a", 5))
ecrire(repeter("abc", 2))
nouvelle_ligne()


/*
	inverser_le_texte(texte)
	Renvoie le texte avec tous les caractères dans l'ordre inverse.
*/
ecrire(">>> inverser_le_texte(texte)")
ecrire(inverser_le_texte("Salut"))
nouvelle_ligne()


/*
	couper(texte)
	Renvoie le texte sans espaces blancs de début et de fin.
*/
ecrire(">>> couper(texte)")
ecrire("'" + couper(" Salut  ") + "'")
nouvelle_ligne()


/*
	couper_gauche(texte)
	Renvoie du texte sans espace au début.
*/
ecrire(">>> couper_gauche(texte)")
ecrire("'" + couper_gauche(" Salut  ") + "'")
nouvelle_ligne()


/*
	couper_droite(texto)
	Renvoie du texte sans espaces de fin.
*/
ecrire(">>> couper_droite(texte)")
ecrire("'" + couper_droite(" Salut ") + "'")
nouvelle_ligne()