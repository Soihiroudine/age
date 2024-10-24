// declaration de variable des elements qui vont etre recuperer dans le html
let nom, prenom, categoriesPro, anneeNaissance, age;
let bouton = document.querySelector("#valider");
// let valeurCategorie = document.querySelector("#valeurcategorie");
let affichage = document.querySelector(".messageAffiche");
const anneeActuelle = new Date().getFullYear();

// Récuperation de l'id année de span du footer
let spanAnnee = document.querySelector("#annee");
// Ajout de l'annee dans le footer
spanAnnee.innerHTML = anneeActuelle;

// On creer un element option
function optionCategories(donnee) {
    let option = document.createElement("option");
    option.setAttribute("value", donnee);
    option.innerHTML = donnee;
    return option;
}

// calcul de l'age 
function calculAge(anneeDeNaissance) {
    // L'annee de la date actuelle
    
    return anneeActuelle - anneeDeNaissance;
}

// verification que l'age est superieur ou egale à 18
function majeur(age) {
    if (age >= 18) {
        return "majeur";
    } return "mineur";
}

// Creation d'une fonction
// elle va créer un paragraphe et va lui mettre un texte
function paragraphe(texte) {
    let para = document.createElement("p");
    para.innerHTML = texte;
    return para;
}

function elementRadio(listeElements){
    for (let index = 0; index < listeElements.length; index++) {
        if (listeElements[index].checked) { // Il va verifier si un des radio est activer
            return listeElements[index].value;
            // console.log(`Bonjour vous etes ${listeElements[index].value}`);
        }
    }return "";
}

// Declanchement de l'action affichage de l'age quand le bouton "valider" est clicker
bouton.addEventListener("click", () => {
    // On va faire ne sorte que l'affichage soit clean
    affichage.innerHTML = "";
    // console.clear()

    // Recuperation des donner nom, prenom et annee de l'input
    nom = document.querySelector("#nom").value;
    prenom = document.querySelector("#prenom").value;
    anneeNaissance = document.querySelector("#anneenaissance").value;
    categoriesPro = document.querySelectorAll(".choix input[name=\"situation\"]");

    // Il va verifier si nom, prenom et annee ne sont pas vide
    if (nom !== "" && prenom !== "" && anneeNaissance !== "") {
        // Calcul de l'age 
        age = calculAge(anneeNaissance);
        let regle2 = `Vous avez ${age} ans.`;
        affichage.appendChild(paragraphe(regle2));

        let regle3Et4 = `${nom} ${prenom}, vous etes ${majeur(age)}.`;
        affichage.appendChild(paragraphe(regle3Et4));

        let regleSpecial = `${nom} ${prenom}, née en ${anneeNaissance} et agé de ${age} est un ${elementRadio(categoriesPro)}`;
        affichage.appendChild(paragraphe(regleSpecial));
    }
});
