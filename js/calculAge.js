// declaration de variable des elements qui vont etre recuperer dans le html
let nom, prenom, categoriesPro, anneeNaissance;
let bouton = document.querySelector("#valider");
// let valeurCategorie = document.querySelector("#valeurcategorie");
let affichage = document.querySelector(".messageAffiche");
const anneeActuelle = new Date().getFullYear();

// Récuperation de l'id année de span du footer
let spanAnnee = document.querySelector("#annee");


spanAnnee.innerHTML = anneeActuelle;


// Les categories professionnel 
// On lui donne une liste des categories 
// let categories = ["Etudiant", "Salarier"];

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

// La boucle va permettre d'ajouter les categories dans le code html
// for (let index = 0; index < categories.length; index++) {
//     valeurCategorie.appendChild(optionCategories(categories[index]));
// }


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
    let age;

    // Il va verifier si nom, prenom et annee ne sont pas vide
    if (nom !== "" && prenom !== "" && anneeNaissance !== "") {
        // Calcul de l'age 
        age = calculAge(anneeNaissance);
        let regle2 = `Vous avez ${age} ans.`;
        affichage.appendChild(paragraphe(regle2));

        let regle3Et4 = `${nom} ${prenom}, vous etes ${majeur(age)}.`;
        affichage.appendChild(paragraphe(regle3Et4));

        for (let index = 0; index < categoriesPro.length; index++) {
            if (categoriesPro[index].checked) {
                console.log(`Bonjour vous etes ${categoriesPro[index].value}`);
            }
            
        }

        // On vavouloir acceder a la selection des option
        // for (let index = 0; index < valeurCategorie.length; index++) {
        //     // On va faire en sorte
        //     if (valeurCategorie[index].innerHTML !== "Categorie professionnel" && valeurCategorie[index].selected) {
        //         console.log(valeurCategorie[index].innerHTML);
        //         break;
        //     }
        // }
    } else {
        // 
    }
});


// Le footer

