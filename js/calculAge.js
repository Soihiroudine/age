// declaration de variable des element qui vont etre recuperer dans le html
let nom, prenom, categoriesPro, annee;
let boutton = document.querySelector("#button");
let valeurInputCategorie = document.querySelector("#valeurCategorie");



// L'annee de la date actuelle
let anneeActuelle = new Date().getFullYear();

// Les categories professionnel 
// On lui donne une liste des categories 
let categories = ["Etudiant", "Salarier"];

// On creer un element option
function optionCategories(donnee){
    let option = document.createElement("option");
    option.setAttribute("value", donnee);
    return option;
}

// La boucle va permettre d'ajouter les categories dans le code html
for (let index = 0; index < categories.length; index++) {
    valeurInputCategorie.appendChild(optionCategories(categories[index]));
}

// calcul de l'age 
function calculAge(ans) {
    return anneeActuelle - ans;
}

// Creation d'une fonction
// elle va créer un span
function afficheAge(valeur) {
    let span = document.querySelector("span");
    span.innerHTML = valeur;
    return span;
}

// La fonction qui s'occupe de l'affichage de l'age
function afficheTexte() {
    nom = document.querySelector("#nom").value;
    prenom = document.querySelector("#prenom").value;
    categoriesPro = document.querySelector("#categoriesPro").value;
    annee = document.querySelector("#anneeNaissance").value;
    let age = calculAge(annee);
    let affichage = document.querySelector("#affichage p");
    // console.log(calculAge(annee));
    if (annee > anneeActuelle) {
        alert("Veuiller mettre une année inférieur à l'année actuelle");
    } else {
        affichage.appendChild(afficheAge(age));
    }
}

// Declanchement de l'action affichage de l'age quand le bouton "entrer" est clicker
boutton.addEventListener("click", afficheTexte);