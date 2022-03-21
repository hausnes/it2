let temaSamling = [ // temaSamling har som standardverdi desse to, fleire kan bli lagt til
    { navn : "dark",   fargeTekst : "#ffffff", fargeBakgrunn : "#000000", fargeUtheva : "#ffff00" }, 
    { navn : "light",  fargeTekst : "#000000", fargeBakgrunn : "#ffffff", fargeUtheva : "#0fff00" }
];

/*
    ***************************************************************
    Dropdown/select/nedtrykksmeny og den faktiske endringa av tema:
    ***************************************************************
*/
document.getElementById("selectTemavelger").addEventListener("change", endreTema); // Eventuelt xxx.onchange = endreTema;

function endreTema(evt) {
    console.log("Endra til temanummer: " + evt.target.value); 
    let valtTema = parseInt(evt.target.value); // Eventuelt Number(evt.target.value);

    document.getElementById("boks").style.color = temaSamling[valtTema].fargeTekst;
    document.getElementById("boks").style.backgroundColor = temaSamling[valtTema].fargeBakgrunn;
    document.querySelector("h2").style.color = temaSamling[valtTema].fargeUtheva; // Eventuelt gje h2 ein id og bruk getElementById som før.
}

/*
    ***************************************************************
    Registrering av eit nytt tema inn i kolleksjonen, samt 
    oppdatering av dropdown/select/nedtrykksmenyen:
    ***************************************************************
*/
document.getElementById("registrerTema").addEventListener("submit", registrerTema);

let customNr = 0; // Brukes for å handtere å gje nye automatiske navn til nye tema (custom1, custom2 osv.)

function registrerTema(evt) {
    evt.preventDefault(); // Jfr. det boka beskriv som SPA (single page application), blokkerer at me går til ekstern side. Pass på '?' i adressefeltet!
    let nyFargeTekst    = document.getElementById("fargeTekst").value;
    let nyFargeBakgrunn = document.getElementById("fargeBakgrunn").value;
    let nyFargeUtheva   = document.getElementById("fargeUtheva").value;
    console.log("Nytt tema: " + nyFargeTekst + ", " + nyFargeBakgrunn + ", " + nyFargeUtheva);
    
    customNr++;
    let temanavn = "custom" + customNr; // Første custom temanavn blir custom1, andre blir custom2 osv.

    let nyttTema = {
        navn: temanavn,
        fargeTekst: nyFargeTekst,
        fargeBakgrunn: nyFargeBakgrunn,
        fargeUtheva: nyFargeUtheva
    };
    temaSamling.push(nyttTema); // Legg nye data til i kolleksjonen
    console.table(temaSamling); // Snedig utskrift, lenke: https://www.youtube.com/watch?v=qkCwhNkA7dU&list=WL&index=25

    // Legg til nytt element i dropdown/select/nedtrykksmeny:
    let nyttValg = document.createElement("option");
    nyttValg.value = temaSamling.length-1;
    nyttValg.innerHTML = temanavn;
    nyttValg.name = temanavn;
    document.getElementById("selectTemavelger").appendChild(nyttValg);
    alert("Du har lagt til eit nytt tema med navn: " + temanavn + ". Endre til dette i dropdown.");
}