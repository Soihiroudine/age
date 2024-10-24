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

nom.addEventListener("change", (event) => {
    if (event.target.value !== "" && event.target.value !== "\n" && event.target.value !== "\t" && event.target.value !== " ") {
        console.log("Yo man");
    }
});

const elementInputNom = document.querySelector("#nom");
console.log(elementInputNom);

// 2. Ecouter l'événement Change, puis exécuter le code
elementInputNom.addEventListener("change", () => {
    console.log(" -== J'ai entendu change :- )");
});

const elementInputPrenom = document.querySelector("#prenom");
console.log(elementInputPrenom);

let messageSalutation;

elementInputPrenom.addEventListener("change", (event) => {
    blockMessage.innerHTML = "";

    if (event.target.value !== "" && event.target.value !== "\n" && event.target.value !== "\t" && event.target.value !== " ") {

        console.log(dateAujourdHui.getHours());

        let laJournee = afficheJournee(dateAujourdHui.getHours());

        console.log("Le change est : ", event.target.value);

        messageSalutation = `${laJournee} ${event.target.value}`;

        blockMessage.appendChild(paragraphe(messageSalutation));

        // elementMessageSalutation.textContent = messageSalutation;
    } else {
        alert("Rien n'a été mis !");
    }
});

// Les dates






