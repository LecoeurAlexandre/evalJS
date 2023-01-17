let annuaire = [
    {
        nom: "Dupont",
        prenom: "Jean",
        age: 15
    },
    {
        nom: "Durant",
        prenom: "Pierre",
        age: 16
    },
    {
        nom: "Martin",
        prenom: "Jean",
        age: 17
    }
];

let getContacts = () => {

}
/*
let getChoice =
    prompt(`Menu
    1) Voir tous les contacts
    2) Ajouter un contact
    3) Supprimer un contact
    4) Quitter 
    `)
*/
const getChoice = function () {
    let choice = prompt(`Menu
    1) Voir tous les contacts
    2) Ajouter un contact
    3) Supprimer un contact
    4) Quitter 
    `)
    console.log(choice)
    return choice
}


switch(getChoice()) {
    case "1" :
        let message = `Voici la liste de tous mes contacts : \n${annuaire[0].nom} ${annuaire[0].prenom} ${annuaire[0].age} ans`;
        for (i=1 ; i<annuaire.length; i++) {
            message += `\n${annuaire[i].nom} ${annuaire[i].prenom} ${annuaire[i].age} ans`
        }
        alert(message)
        break;
    case "2" :
        let nom = prompt("Veuillez saisir votre nom de famille :");
        let prenom = prompt("Veuillez saisir votre prénom :");
        let age = Number(prompt("Veuillez saisir l'âge :"));
        let newContact = {nom, prenom, age};
        annuaire.push(newContact);
        console.table(annuaire);
        break;
    case "3" :
        let deleteChoice = Number(prompt("Quel contact souhaitez-vous supprimer :"));
        annuaire.splice(deleteChoice,1);
        console.table(annuaire);
        break;
    case "4" :
        alert("Au revoir, merci de votre visite.");
        break;
}
