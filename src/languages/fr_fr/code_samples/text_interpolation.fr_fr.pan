/*

Parfois, vous souhaitez afficher une variable avec du texte.

Par exemple, la variable "nom" peut être référencée dans le texte
"Salut, nom !" pour afficher un message d'accueil personnalisé.


*/

texte nom = "Jean"
nombre âge = 12


// Vous pouvez le faire en utilisant "+" pour concaténer des textes :
ecrire("Salut, " + nom + " !")
ecrire("Vous avez " + vers_texte(âge) + " ans aujourd'hui.")
nouvelle_ligne()


// Ou vous pouvez utiliser l'interpolation de texte, où les valeurs
// entre accolades ({}) sont automatiquement converties en type de texte :
ecrire("Salut, {nom} !")
ecrire("Vous avez {âge} ans aujourd'hui.")
nouvelle_ligne()


// Vous pouvez également éviter d'utiliser l'interpolation de texte en
// utilisant des guillemets simples (') au lieu de guillemets doubles (") :
ecrire('Salut, {nom} !')
ecrire('Vous avez {âge} ans aujourd\'hui.')