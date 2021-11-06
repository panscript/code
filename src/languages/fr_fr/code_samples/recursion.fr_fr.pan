/*

La récursivité, c'est quand une fonction s'appelle elle-même.  Deux
exemples pertinents sont les fonctions factorielles et de Fibonacci.

Les implémentations ci-dessous ne prennent pas en charge les nombres
négatifs comme arguments. Les appeler avec un nombre négatif
provoquerait une boucle infinie.

*/

fonction factoriel(nombre n) renvoie nombre
	si n == 0
		retourne 1
	fin

	retourne n * factoriel(n - 1)
fin

ecrire(">>> factoriel(n)")
ecrire(factoriel(0))
ecrire(factoriel(1))
ecrire(factoriel(2))
ecrire(factoriel(3))
ecrire(factoriel(4))
ecrire(factoriel(5))
ecrire(factoriel(6))
ecrire(factoriel(7))
nouvelle_ligne()


fonction fibonacci(nombre n) renvoie nombre
	si n == 0
		retourne 0
	sinon si n == 1
		retourne 1
	fin

	retourne fibonacci(n - 1) + fibonacci(n - 2)
fin

ecrire(">>> fibonacci(n)")
ecrire(fibonacci(0))
ecrire(fibonacci(1))
ecrire(fibonacci(2))
ecrire(fibonacci(3))
ecrire(fibonacci(4))
ecrire(fibonacci(5))
ecrire(fibonacci(6))
ecrire(fibonacci(7))
nouvelle_ligne()