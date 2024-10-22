// declaration de variable des elements qui vont etre recuperer dans le html
let nom, prenom, categoriesPro, anneeNaissance;
let bouton = document.querySelector("#valider");
let valeurInputCategorie = document.querySelector("#valeurcategorie");
let affichage = document.querySelector("#affichage");

// Les categories professionnel 
// On lui donne une liste des categories 
let categories = ["Etudiant", "Salarier"];

// On creer un element option
function optionCategories(donnee) {
    let option = document.createElement("option");
    option.setAttribute("value", donnee);
    option.innerHTML = donnee;
    // option.innerHTML = donnee;
    return option;
}

// Fonction qui veirifie que la valeur rechercher est bien dans notre tableau
// On va l'utiliser en premier lieu pour s'assurer que l'utilisateur a bien selectionner une valeur définit
function valeurDansTableau(valeur, tableau) {
    for (let index = 0; index > tableau.length; index++) {
        if (tableau[index] === valeur) { return true; }
    }
    return false;
}

// calcul de l'age 
function calculAge(anneeDeNaissance) {
    // L'annee de la date actuelle
    const anneeActuelle = new Date().getFullYear();
    return anneeActuelle - anneeDeNaissance;
}

function majeur(age) {
    if (age >= 18 ) {
        return "majeur";
    }
    return "mineur";
}

// Creation d'une fonction
// elle va créer un paragraphe et va lui mettre un texte
function paragraphe(texte) {
    let para = document.createElement("p");
    para.innerHTML = texte;
    return para;
}

// La boucle va permettre d'ajouter les categories dans le code html
for (let index = 0; index < categories.length; index++) {
    valeurInputCategorie.appendChild(optionCategories(categories[index]));
}

// Declanchement de l'action affichage de l'age quand le bouton "valider" est clicker
bouton.addEventListener("click", () => {
    // Recuperation des donner nom, prenom et annee de l'input
    nom = document.querySelector("#nom").value;
    prenom = document.querySelector("#prenom").value;
    anneeNaissance = document.querySelector("#anneenaissance").value;

    // Calcul de l'age 
    let age = calculAge(anneeNaissance);

    // On va faire ne sorte que l'affichage soit clean
    affichage.innerHTML = "";

    // affichage.appendChild(paragraphe(phrase));
    let regle2 = `Vous avez ${age} ans.`;
    affichage.appendChild(paragraphe(regle2));

    let regle3Et4 = `${nom} ${prenom}, vous etes ${majeur(age)}.`;
    affichage.appendChild(paragraphe(regle3Et4));

    // Verification que nom et prenom ont bien été pris
    console.log("nom : " + nom);
    console.log("Prenom : " + prenom);
    console.log("Année : " + anneeNaissance);

});
