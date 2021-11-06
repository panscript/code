// Les fonctions de console sont des fonctions qui interagissent avec la console de sortie.

/*
	ecrire(x)
	Écrit une valeur x de n'importe quel type sur la console après l'avoir convertie en texte. 
	Le curseur est déplacé sur la ligne suivante.
*/
ecrire(">>> ecrire(x)")
ecrire("C'est une ligne")
ecrire("C'est une autre ligne")
nouvelle_ligne()


/*
	ecrire_dans_la_ligne(x)
	Écrivez une valeur x de n'importe quel type sur la console après l'avoir convertie en texte.
	Le curseur reste sur la même ligne.
*/
ecrire(">>> ecrire_dans_la_ligne(x)")
ecrire_dans_la_ligne("C'est ")
ecrire_dans_la_ligne("une ligne unique ")
ecrire_dans_la_ligne("et voici le saut vers la nouvelle ligne : \r\n")
nouvelle_ligne()


/*
	nouvelle_ligne()
	Écrit une ligne vide dans la console.
	Équivaut à l'écriture de la chaîne de contrôle CRLF : \r\n
*/
ecrire(">>> nouvelle_ligne()")
nouvelle_ligne()
ecrire_dans_la_ligne("\r\n")
nouvelle_ligne()