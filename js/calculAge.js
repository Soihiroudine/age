// declaration de variable des element qui vont etre recuperer dans le html
let nom, prenom, categoryPro, annee;
let boutton = document.querySelector("#button");
let valeurCategoryHtml = document.querySelector("#valeurCategory");
let affichage = document.querySelector("#affichage p");


// L'annee de la date actuelle
let anneeActuelle = new Date().getFullYear();

// Les category professionnel
let category = ["Etudiant", "Salarier"];

function optionCategory(donnee){
    let option = document.createElement("option");
    option.setAttribute("value", donnee);
    return option;
}

for (let index = 0; index < category.length; index++) {
    valeurCategoryHtml.appendChild(optionCategory(category[index]));   
}

// calcul de l'age 
function calculAge(ans) {
    return anneeActuelle - ans;
}

// Creation d'une fonction
// elle va créer une 
function afficheAge(valeur) {
    let span = document.createElement("span");
    span.innerHTML = valeur;
    return span;
}

function afficheTexte() {
    nom = document.querySelector("#nom").value;
    prenom = document.querySelector("#prenom").value;
    categoryPro = document.querySelector("#categoryPro").value;
    annee = document.querySelector("#anneeNaissance").value;
    let age = calculAge(annee);
    // console.log(calculAge(annee));
    if (annee > anneeActuelle) {
        alert("Veuiller mettre une année inférieur à l'année actuelle");
    } else {
        // alert(afficheAge(nom, prenom, categoryPro, age).innerHTML)
        affichage.appendChild(afficheAge(age));
    }
}

boutton.addEventListener("click", afficheTexte);

// console.log(afficheAge());