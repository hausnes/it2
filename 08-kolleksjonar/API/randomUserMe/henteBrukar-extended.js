// https://randomuser.me/api/?results=5

let brukarar = [];

/*
const getUsers = async () => { // async
    const response = await fetch("https://randomuser.me/api/?results=5"); // await
    const json = await response.json(); // await
    let users = json.results;
    // return users;
    leggTilBrukarar(users);
}
 
getUsers();
*/

// Skrive om til vår "vanlege måte" å gjere det på:
async function hentBrukarar() {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const json = await response.json();
    let users = json.results;
    //return users;
    leggTilBrukarar(users);
}

hentBrukarar();

function leggTilBrukarar(users) {
    for(let user of users) {
        console.log(user.name.title + " " + user.name.last);
        let nyBruker = {
            fornavn: user.name.title,
            etternavn: user.name.last,
            land: user.location.country,
            by: user.location.city,
            bilde: user.picture.large
        };
        brukarar.push(nyBruker);
    }
    
    genererHTML(brukarar);
}

function genererHTML(brukarar) {
    let html = "";
    for(let brukar of brukarar) {
        html += `<div class="brukar">
                    <img src="${brukar.bilde}">
                    <h2>${brukar.fornavn} ${brukar.etternavn}</h2>
                    <p>${brukar.by}</p>
                    <p>${brukar.land}</p>
                </div>`;
    }
    document.querySelector("#brukarar").innerHTML = html;

    // Gjer gjerne det samme som over vha. createElement() og appendChild()
}