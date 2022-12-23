/* //     Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10. Si l'utilisateur saisit un nombre qui n'est pas compris dans cet intervalle, le programme doit afficher un message d'erreur et redemander à l'utilisateur de saisir un nombre jusqu'à ce qu'il saisisse un nombre valide.
Utilisez une boucle for pour afficher la table de multiplication du nombre saisi. Par exemple, si l'utilisateur saisit 5, le programme doit afficher :
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
    Écrivez une fonction qui prend en paramètre un entier et affiche sa table de multiplication de 1 à 10.
    Appelez la fonction avec le nombre saisi par l'utilisateur en argument. */

let chiffre = prompt("saisissez un chiffre entre 1 et 10:"); // affiche la demande à l'utilisateur et la définit la réponse sur chiffre
chiffre = Number(chiffre); // transforme chiffre en int
function multiplication(chiffre) // création de la fonction multiplication
{
    while(chiffre<1 || chiffre>10 || isNaN(chiffre)) { // boucle si chiffre n'est pas entre 1 et 10 et est un chiffre
        console.log("faux")
        chiffre = prompt("erreur, saisis un chiffre entre 1 et 10 :"); // demande a nouveau en cas de false
        chiffre = Number(chiffre);
    }
    for (let i = 1; i <= 10; i++) { // si conditions ok : repete le calcul 10 fois et incrémente
        resultat = chiffre * i; // calcule
        document.write(chiffre+" x "+i+"="+chiffre*i+"<br>"); // affichage du calcul sur le console.log
    }
}		
console.log(multiplication(chiffre));


