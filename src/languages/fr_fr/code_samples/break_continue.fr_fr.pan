/*

Il y a au moins trois façons d'interrompre une boucle.

interromps quitte la boucle et l'exécution suit après sa fin.
continue saute l'itération actuelle, mais continue à l'intérieur de la boucle. 

Dans une fonction, vous pouvez également arrêter une boucle à l'aide
de la commande retourne (plus sur ceci ci-dessous).

*/

ecrire("Debut de la boucle")

nombre i = 0
pour toujours
	i += 1

	// Interrompre la boucle après 10 itérations
	si i > 10
		interromps
	fin

	// Soute les multiples de trois
	si i % 3 == 0
		continue
	fin

	ecrire(i)
fin

ecrire("Fin de la boucle")