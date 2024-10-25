// Les evenement javascript
let blockMessage = document.querySelector(".messageAffiche");

let dateAujourdHui = new Date();

nom = document.querySelector("#nom");

function paragraphe(texte) {
    let para = document.createElement("p");
    para.innerHTML = texte;
    return para;
}

// Verifie 
function afficheJournee(heure) {
    if (heure < 12) {
        return "Bonjour";
    }
    return "Bonsoir";
}

// nom.addEventListener("change", (event) => {
//     if (event.target.value !== "" && event.target.value !== "\n" && event.target.value !== "\t" && event.target.value !== " ") {
//         console.log("Yo man");
//     }
// });

const elementInputNom = document.querySelector("#nom");

const elementInputPrenom = document.querySelector("#prenom");

let messageSalutation;

elementInputPrenom.addEventListener("change", (event) => {
    blockMessage.innerHTML = "";

    if (event.target.value !== "" && event.target.value !== "\n" && event.target.value !== "\t" && event.target.value !== " ") {

        let laJournee = afficheJournee(dateAujourdHui.getHours());

        messageSalutation = `${laJournee} ${event.target.value}`;

        blockMessage.appendChild(paragraphe(messageSalutation));

        // elementMessageSalutation.textContent = messageSalutation;
    } else {
        alert("Rien n'a été mis !");
    }
});

// Les dates






