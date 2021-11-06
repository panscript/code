/*

Les variables sont déclarées comme suit :
type nom = valeur

où :
- le type peut être texte, nombre ou logique (plus de détails ci-dessous) ;
- le nom doit commencer par une lettre ou un trait de soulignement ;
- le nom peut contenir des lettres, des soulignements et des chiffres ;
- la valeur doit avoir le type déclaré.

*/

// Exemples
texte nom = "Jean Pierre François"
texte adresse = "42, rue calme"
nombre âge = 18
nombre solde_en_compte = -100.25
logique dort = faux
logique est_en_train_détudier = vrai


// Vous pouvez utiliser des noms de variables pour référencer leurs valeurs.
ecrire(nom)
ecrire(âge)
ecrire(solde_en_compte)
ecrire(est_en_train_détudier)
nouvelle_ligne()


// Vous pouvez attribuer de nouvelles valeurs aux variables
ecrire("Fixer l'âge à 19 ans...")
âge = 19
ecrire(âge)
nouvelle_ligne()


// Et utilisez-les dans des expressions (plus de détails ci-dessous)
ecrire("Ajout de 100 BRL au solde du compte...")
solde_en_compte = solde_en_compte + 100
ecrire(solde_en_compte)
nouvelle_ligne()


/*

Mais vous ne pouvez pas déclarer deux fois la même variable,
ce qui explique pourquoi le code ci-dessous provoquerait une
erreur s'il n'était pas dans ce bloc de commentaire :

nombre âge = 19

*/