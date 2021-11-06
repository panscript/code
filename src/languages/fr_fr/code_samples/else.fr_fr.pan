/*

Les commandes si prennent en charge un bloc sinon facultatif.

Le code du bloc sinon s'exécute si la condition est fausse.

Avec un bloc sinon, la commande si est déclarée comme suit :
si condition
	// code qui s'exécute si la condition est vraie
sinon
	// code qui s'exécute si la condition est fausse
fin

*/

// L'exemple ci-dessous simule un dé à six faces
// et écrit un message basé sur la valeur obtenue 

// Notez que le deuxième paramètre est la limite + 1
nombre dé = aleatoire_entier(1, 6+1)

ecrire(dé)

si dé >= 5
	ecrire("Super lancer de dés !")
sinon
	ecrire("Lancer OK")
fin

// Exécutez cet exemple plusieurs fois pour obtenir
// des résultats différents