/*

Utilisez la commande si pour exécuter un bloc de code uniquement si
une condition est vraie.

Les commandes si sont déclarées comme suit :
si condition
	// code qui s'exécute si la condition est vraie
fin

*/

// L'exemple ci-dessous simule un dé à six faces
// et écrit un message basé sur la valeur obtenue

// Notez que le deuxième paramètre est la limite + 1
nombre dé = aleatoire_entier(1, 6+1)

ecrire(dé)

si dé <= 3
	ecrire("Mauvais lancer")
fin

si dé >= 4
	ecrire("Super lancer de dés !")
fin

// Exécutez cet exemple plusieurs fois pour obtenir
// des résultats différents