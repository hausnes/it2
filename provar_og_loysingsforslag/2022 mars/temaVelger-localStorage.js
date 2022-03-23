let temaDefault = [ // temaSamling har som standardverdi desse to, fleire kan bli lagt til
    { navn : "dark",   fargeTekst : "#ffffff", fargeBakgrunn : "#000000", fargeUtheva : "#ffff00" }, 
    { navn : "light",  fargeTekst : "#000000", fargeBakgrunn : "#ffffff", fargeUtheva : "#0fff00" }
];

/*
    ***************************************************************
    Oppstartsdelen av koden som sjekkar om det allerede ligg tema
    i localStorage som me kan hente fram.
    ***************************************************************
*/

//localStorage.clear('temaObjekt'); // Brukt for testing: Slettar det som ligg i localStorage

// Forklaring på kvifor me bruker JSON.parse og JSON.stringify: https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/
let temaSamling = JSON.parse(localStorage.getItem('temaObjekt')) || temaDefault; // Dersom det ikkje blir funne noko temaObjekt i localStorage så blir det satt til temaDefaulten øvst i dette dokumentet, ellers hentar den frå localStorage
localStorage.setItem('temaObjekt',  JSON.stringify(temaSamling));
console.log("Ved oppstart har me temasamlingen:");
console.table(temaSamling);
initialiserSelect();

/*
    ***************************************************************
    Funksjon som opprettar select-meny og legg den til HTML.
    Basert på koden over om localStorage så opprettast enten gamle
    innstillingar, eventuelt berre defaulten.
    ***************************************************************
*/
function initialiserSelect() {
    document.getElementById("tilSelect").innerHTML = "";
    let sel = document.createElement("select");
    sel.id = "selectTemavelger";
    for (let i = 0; i < temaSamling.length; i++) {
        let optionNy = document.createElement("option");
        optionNy.value = i;
        optionNy.innerHTML = temaSamling[i].navn;
        sel.appendChild(optionNy);
    }
    document.getElementById("tilSelect").appendChild(sel);
}

/*
    ***************************************************************
    Dropdown/select/nedtrykksmeny og den faktiske endringa av tema:
    ***************************************************************
*/
document.getElementById("selectTemavelger").addEventListener("change", selectEndring); // Eventuelt xxx.onchange = endreTema;

function selectEndring() {
    let valtTema = document.getElementById("selectTemavelger").value;
    console.log("Endra til temanummer: " + valtTema);
    endreTema(valtTema);
}

function endreTema(valtTema) {
    document.getElementById("boks").style.color = temaSamling[valtTema].fargeTekst;
    document.getElementById("boks").style.backgroundColor = temaSamling[valtTema].fargeBakgrunn;
    document.querySelector("h2").style.color = temaSamling[valtTema].fargeUtheva; // Eventuelt gje h2 ein id og bruk getElementById som før.

    // Lagre i localStorage, ikkje brukt per no
    localStorage.setItem('tema', temaSamling[valtTema].navn);
}

/*
    ***************************************************************
    Registrering av eit nytt tema inn i kolleksjonen, samt 
    oppdatering av dropdown/select/nedtrykksmenyen:
    ***************************************************************
*/
document.getElementById("registrerTema").addEventListener("submit", registrerTema);

function registrerTema(evt) {
    evt.preventDefault(); // Jfr. det boka beskriv som SPA (single page application), blokkerer at me går til ekstern side. Pass på '?' i adressefeltet!
    let navnTema        = document.getElementById("navnTema").value;
    let nyFargeTekst    = document.getElementById("fargeTekst").value;
    let nyFargeBakgrunn = document.getElementById("fargeBakgrunn").value;
    let nyFargeUtheva   = document.getElementById("fargeUtheva").value;
    console.log("Nytt tema: " + nyFargeTekst + ", " + nyFargeBakgrunn + ", " + nyFargeUtheva);

    let nyttTema = {
        navn: navnTema,
        fargeTekst: nyFargeTekst,
        fargeBakgrunn: nyFargeBakgrunn,
        fargeUtheva: nyFargeUtheva
    };
    temaSamling.push(nyttTema); // Legg nye data til i kolleksjonen
    console.table(temaSamling); // Snedig utskrift, lenke: https://www.youtube.com/watch?v=qkCwhNkA7dU&list=WL&index=25
    localStorage.setItem('temaObjekt', JSON.stringify(temaSamling)); // Oppdaterer localStorage med heile den nye kolleksjonen

    // Legg til nytt element i dropdown/select/nedtrykksmeny:
    let nyttValg = document.createElement("option");
    nyttValg.value = temaSamling.length-1;
    nyttValg.innerHTML = navnTema;
    //nyttValg.name = temanavn;
    document.getElementById("selectTemavelger").appendChild(nyttValg);
    
    alert("Du har lagt til eit nytt tema med navn: " + navnTema + ". Endre til dette i dropdown.");
}