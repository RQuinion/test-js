// définition de variables
nom = ("John"); // defini le nom
console.log(nom); // afficher le nom
nom = ("Jane");
console.log(nom);

// boucles
let tab = [1,2,3,4,5,6,7,8,9,10]; // créer le tableau
for( i = 0; i < tab.length; i++) { //créer la boucle de 1 à 10 et incrémente
    console.log(tab[i]);
}

// console.log
console.log("Bonjour tout le monde!") //str
console.log(3+4) // addition
console.log(nom); // variable

// concaténation
firstName = "John"
lastName = "Doe"
let name = `${firstName} ${lastName}`; //concatène les noms
console.log(name)

// conditions
age = 37
if(age>=18) { // condition si + ou égale a 18
    console.log("Vous êtes majeur") 
}
else {
    console.log("vous êtes mineur")
}

// création etd parcous d'un tableau
couleurs = ["rouge", "vert", "bleu","jaune", "orange"];
for(let i=0; i<couleurs.length; i++) { // affiche le tableau 1 à 1
    console.log(couleurs[i]);
}

// Array push et pop
numbers = [1,2,3,4,5];
numbers.push (6); // ajoute le 6 
console.log(numbers);
numbers.pop (6); // supprime le 6
console.log(numbers);

// fonction
function pair(nb) { // création de la fonction pair
    if (nb % 2 === 0) { // modulo pour test pair
        return true; 
}
    return false;
}

function sum(numbers) {
    let result = 0;
    if ((typeof(numbers) !== 'object') || numbers.length <= 1) {
        return "Les paramètres sont mal définis";
    } // test si les entrées sont bonnes / chiffres
    numbers.forEach((number) => {
        result+=number;
    }); // fait la somme des entrés du tableau

    return result;
}
console.log(sum([1,2,5,10])); 

function rev(chaine) {
    let result = 0;
    chaine.split && chaine.reverse && chaine.join;
    return result;
}
console.log(rev(["hello"]));
