/*

Les boucles vous permettent de répéter l'exécution d'un bloc de code
jusqu'à ce qu'une condition l'arrête.

Les boucles "tant que" sont déclarées comme suit :
tant que condition
	// code qui s'exécute à plusieurs reprises
	// jusqu'à ce que la condition soit fausse 
fin

Les boucles De-Jusqu'à sont déclarées comme suit :
pour nombre nom_variable de expression jusqua expression
	// code qui s'exécute à plusieurs reprises
fin

Les boucles "pour toujours" sont déclarées comme suit :
pour toujours
	// code qui s'exécute à plusieurs reprises
	// jusqu'à ce qu'il soit interrompu 
fin

*/

// Les boucles "tant que" s'exécutent jusqu'à ce que la condition testée soit fausse :
nombre nombre_joueur = 1
tant que nombre_joueur <= 4
	ecrire("Joueur #{nombre_joueur} a entré !")
	nombre_joueur += 1
fin
nouvelle_ligne()

// Les boucles De-Jusqu'à se répètent une fois pour chaque valeur dans l'interval
// en mettant à jour la variable déclarée à chaque itération :
ecrire("Calculer les dix premiers multiples de trois")
pour nombre x de 1 jusqua 10
	ecrire(3 * x)
fin
nouvelle_ligne()

// Les boucles "pour toujours" sont infinies, vous
// devez donc les arrêter manuellement :
ecrire("La partie va commencer")

nombre max_essais = 5
nombre essais = 1
pour toujours
	nombre dé = aleatoire_entier(1, 6+1)
	ecrire("Lancer {dé}")

	si dé == 6
		texte nom_essais = "essais"
		ecrire("Nous avons obtenu un 6 en {essais} {nom_essais} !")
		interromps  // quitter la boucle (plus de détails ci-dessous)
	fin

	essais += 1

	si essais > max_essais
		ecrire("Plus de chance la prochaine fois !")
		interromps  // quitter la boucle (plus de détails ci-dessous)
	fin
fin

ecrire("Fin de la partie")