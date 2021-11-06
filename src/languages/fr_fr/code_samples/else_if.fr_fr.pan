/*

Les commandes si prennent également en charge un ou plusieurs blocs "sinon si" facultatifs.

Le code du bloc "sinon si" s'exécute si sa condition est vraie et toutes les conditions précédentes sont fausses.

Avec un bloc "sinon si", la commande si peut être declarée comme suit :
si première_condition
	// code qui s'exécute si première_condition est vrai
sinon si deuxième_condition
	// code qui s'exécute si first_condition est fausse
	// et la deuxième_condition est vrai
fin

Ou avec plusieurs blocs sinon si, et aussi un sinon :
si première_condition
	// code qui s'exécute si première_condition est vrai
sinon si deuxième_condition
	// code qui s'exécute si first_condition est fausse
	// et la deuxième_condition est vrai
sinon si troisième_condition
	// code qui s'exécute si la première et deuxième conditions sont fausses et la troisième_condition est vrai
sinon
	// code qui s'exécute si aucune condition n'est vraie
fin
*/

// L'exemple ci-dessous simule un dé à six faces
// et écrit un message basé sur la valeur roulée

// Notez que le deuxième paramètre est la limite + 1
nombre dé = aleatoire_entier(1, 6+1)

ecrire(dé)

si dé >= 5
	ecrire("Super lancer du dé !")
sinon si dé <= 2
	ecrire("Mauvais lancer !")
sinon
	ecrire("Lancer OK")
fin

// Exécutez cet exemple plusieurs fois pour obtenir
// des résultats différents