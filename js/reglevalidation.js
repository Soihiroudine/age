// Les regles de validation

// On veux veirifier que le champs nom est bien complété

// On va travailler sur le formulaire
// Faire en sorte qu'il n'accepte pas les information si tous les conditions n'ont pas été accepter
const formulaire = document.querySelector("form");

function estVide(valeurChamps) {
    // return valeurChamps === "";
    if (valeurChamps === "") {
        // console.log("Champs est vide !");
        return true
    }else {
        // console.log(`Le champs a pour valeur : ${valeurChamps}`);
        return false;
    }

}

formulaire.addEventListener("submit", (event) => {

    // Enpecher le comportement par default de l'evenement
    event.preventDefault();

    // Recuperation du nom est le manipuler
    const nom = document.querySelector("#nom");
    const valeurNom = nom.value;

    const prenom = document.querySelector("#prenom");
    const valeurPrenom = prenom.value;

    const annee = document.querySelector("#anneenaissance");
    const valeurAnnee = annee.value;

    /* if (valeurNom === "" || valeurPrenom === "" || valeurAnnee === "") {
        console.log("Les champs saisies sont vide !");
    }else {
        console.log(`Vous etes ${valeurNom} ${valeurPrenom}, né en ${valeurAnnee}.`);
    } */

    estVide(valeurNom);
    estVide(valeurPrenom);
    estVide(valeurAnnee);
});