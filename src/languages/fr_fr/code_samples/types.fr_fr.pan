/*

Les valeurs dans PanScript ont l'un des trois types primitifs :
- texte
- nombre
- logique

*/

// Les valeurs textuelles sont entourées de guillemets doubles (") ou de guillemets simples (')
texte nom = "Jean"
ecrire("Ceci est un texte")
ecrire('Ceci est aussi un texte')
ecrire("Ceci est " + "une expression textuelle")
ecrire("Ceci est du texte interpolé : {nom}")
ecrire('Ceci est du texte non interpolé : {nom}')
nouvelle_ligne()

// En savoir plus sur l'interpolation ci-dessous


// Valeurs numériques
constant nombre PI = pi()
constant nombre TAU = PI * 2
ecrire(42)			// entier positif
ecrire(-10)			// nombre negatif
ecrire(3.14)		// nombre réel
ecrire(.5)			// partie entière facultative
ecrire(12.)			// partie fractionnaire facultative
ecrire(0x0f)		// nombre hexadécimal
ecrire(0b101010)	// nombre binaire
ecrire(PI)
ecrire(TAU)
nouvelle_ligne()

// plus sur les constantes ci-dessous

// Valeurs logiques
logique x = vrai
logique y = faux
ecrire("non vrai : {non vrai}")
ecrire("non faux : {non faux}")
ecrire("non x : {non x}")
ecrire("non y : {non y}")
ecrire("vrai et vrai : {vrai et vrai}")
ecrire("vrai et faux : {vrai et faux}")
ecrire("faux et vrai : {faux et vrai}")
ecrire("faux et faux : {faux et faux}")
ecrire("x et y : {x et y}")
ecrire("vrai ou vrai : {vrai ou vrai}")
ecrire("vrai ou faux : {vrai ou faux}")
ecrire("faux ou vrai : {faux ou vrai}")
ecrire("faux ou faux : {faux ou faux}")
ecrire("x ou y : {x ou y}")
nouvelle_ligne()

// plus sur les expressions ci-dessous