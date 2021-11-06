/*

Une constante est une variable dont la valeur ne peut pas être modifiée. 

Les constantes sont définies comme suit :
constant type nom = valeur

*/

constant texte nom = "Jean"
constant nombre euler = exponentiel(1)

ecrire(nom)
ecrire(euler)

// Essayer d'attribuer une nouvelle valeur à une
// constante génère une erreur avant que le code
// ne commence à s'exécuter

nom = "Pierre"  // commentez cette ligne pour corriger l'erreur