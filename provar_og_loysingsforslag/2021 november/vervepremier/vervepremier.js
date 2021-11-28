// NB: LAGA AV EIRIK SOLBERG

/*
    ------------------------------------------------------------
    Først disabler jeg 2 av 3 tekstfelt og deres tilhørende knapper... dette er fordi jeg 
    tenker at bruker kan sende inn 1 og 1 verv til de er ferdige
    Jeg legger også inn en eventlistener som starter når første person blir vervet
    ------------------------------------------------------------
*/

let antallPremier = 0;
document.getElementById("vervPerson2").disabled = true;
document.getElementById("vervPerson3").disabled = true;
document.getElementById("submitPerson2").style.visibility = "hidden";
document.getElementById("submitPerson3").style.visibility = "hidden";
document.getElementById("premie1").style.visibility = "hidden";
document.getElementById("premie2").style.visibility = "hidden";
document.getElementById("premie3").style.visibility = "hidden";
document.getElementById("submitKnapp").style.visibility = "hidden";

document.getElementById("submitPerson1").addEventListener("click",vervetPerson1);

/*
    ------------------------------------------------------------
    Først i funksjonen sjekker jeg at de faktisk har skrevet noe i ruten
    Hvis de oppfyller dette kravet så disabler jeg den første tekstboksen og dens knapp, og 
    gjør den neste tilgjengelig. I tillegg øker jeg antall premier med 1, altså at de nå har mulighet til å
    velge seg en premie.     
    ------------------------------------------------------------
*/


function vervetPerson1() {
    if (document.getElementById("vervPerson1").value == "") {
        alert("Du må skrive inn et navn!");
    }
    else{
        antallPremier = +1;
        document.getElementById("vervPerson1").disabled = true;
        document.getElementById("submitPerson1").style.visibility = "hidden";
        document.getElementById("vervPerson2").disabled = false;
        document.getElementById("submitPerson2").style.visibility = "visible";

        document.getElementById("overskriftPremier").innerHTML = "Du kan velge " + antallPremier + " premier under:";
        document.getElementById("premie1").style.visibility = "visible";
        document.getElementById("premie2").style.visibility = "visible";
        document.getElementById("premie3").style.visibility = "visible";
    }
}

/*
    ------------------------------------------------------------
    Gjør liknende for 1 og 2. Mulig det kunne blitt gjort i 1 funksjon,
    men det var enklest for meg å bare ta det i 3. 
    Igjen sjekker jeg at noe er skrevet, før jeg evt åpner for verv 3...

    Etter verv 3 blir den siste disabled, men det åpnes ikke en 4. knapp fordi 3 var maksgrensen. 
    ------------------------------------------------------------
*/

document.getElementById("submitPerson2").addEventListener("click",vervetPerson2);
document.getElementById("submitPerson3").addEventListener("click",vervetPerson3);

function vervetPerson2() {
    if (document.getElementById("vervPerson2").value == "") {
        alert("Du må skrive inn et navn!");
    }
    else{
        antallPremier += 1;
        document.getElementById("vervPerson2").disabled = true;
        document.getElementById("submitPerson2").style.visibility = "hidden";
        document.getElementById("vervPerson3").disabled = false;
        document.getElementById("submitPerson3").style.visibility = "visible";
        document.getElementById("overskriftPremier").innerHTML = "Du kan velge " + antallPremier + " premier under:";
    }
}

function vervetPerson3() {
    if (document.getElementById("vervPerson2").value == "") {
        alert("Du må skrive inn et navn!");
    }
    else{
        antallPremier += 1;
        document.getElementById("vervPerson3").disabled = true;
        document.getElementById("submitPerson3").style.visibility = "hidden";
        document.getElementById("overskriftPremier").innerHTML = "Du kan velge " + antallPremier + " premier under:";
    }
}

/*
    ------------------------------------------------------------
    Fra og med når bruker har vervet minst 1 person vil de ha tilgang til å velge seg premier...
    Under har jeg lagt til event listeners som setter igang en funksjon etter de har trykket på en premie. 
    Da vil premien fjernes visuelt, og antall premier minker med 1.   
    ------------------------------------------------------------
*/

document.getElementById("premie1Bilde").addEventListener("click",valgtPremie);
document.getElementById("premie2Bilde").addEventListener("click",valgtPremie);
document.getElementById("premie3Bilde").addEventListener("click",valgtPremie);

/*
    ------------------------------------------------------------
    Her lager jeg variabler som heter hoytaler, klokke og pizza, som er de tre premiene.
    Når en av disse premiene blir valgt går variabelen opp til 1, og dette brukes igjen på slutten
    når vi skal gi info om hva som er på vei til bruker. 
    ------------------------------------------------------------
*/

let hoytaler = 0;
let klokke = 0;
let pizza = 0;

/*
    ------------------------------------------------------------
    Først sjekker jeg at de faktisk har flere premier til gode, ellers får de ikke lov å velge seg en premie.
    Har de flere premier igjen, så fjernes den valgte premien og lagres, slik som jeg beskrev litt over. 
    ------------------------------------------------------------
*/

function valgtPremie(evt) {
    if (antallPremier > 0) {
        antallPremier -= 1;
        let knapp = evt.target;
        console.log(knapp.id);
        if (knapp.id == "premie1Bilde") {
            document.getElementById("premie1").style.display = "none";
            console.log("Du valgte premie nr. 1");
            hoytaler = 1;
        }
        else if (knapp.id == "premie2Bilde") {
            document.getElementById("premie2").style.display = "none";
            console.log("Du valgte premie nr. 2");
            klokke = 1;
        }
        else if (knapp.id == "premie3Bilde") {
            document.getElementById("premie3").style.display = "none";
            console.log("Du valgte premie nr. 3");
            pizza = 1;
        }
        document.getElementById("overskriftPremier").innerHTML = "Du kan velge " + antallPremier + " premier under:";
        document.getElementById("submitKnapp").style.visibility = "visible";
    }
    else{
        alert("Du må verve flere folk for å få flere premier! Har du allerede vervet 3 har du nådd maksgrensen...");
    }
}

document.getElementById("submitKnapp").addEventListener("click",bekreftelsePremier)

/*
    ------------------------------------------------------------
    For at det skal være ryddigere gjør jeg under slik at man ikke kan se alt av premier osv...
    og samtidig at det ikke blir åpne hull der det ikke er content.
    ------------------------------------------------------------
*/

function bekreftelsePremier() {
    console.log("Bekreftelse av premier underveis...");
    document.getElementById("premie1").style.display = "none";
    document.getElementById("premie2").style.display = "none";
    document.getElementById("premie3").style.display = "none";
    document.getElementById("premie1Bilde").style.display = "none";
    document.getElementById("premie2Bilde").style.display = "none";
    document.getElementById("premie3Bilde").style.display = "none";
    document.getElementById("submitKnapp").style.display = "none";
    document.getElementById("overskriftPremier").innerHTML = "";
    document.getElementById("submitPerson1").style.display = "none";
    document.getElementById("submitPerson2").style.display = "none";
    document.getElementById("submitPerson3").style.display = "none";
    document.getElementById("vervPerson1").disabled = true;
    document.getElementById("vervPerson2").disabled = true;
    document.getElementById("vervPerson3").disabled = true;
    
    /*
    ------------------------------------------------------------
    Tilslutt skriver jeg ut hvilke premier som er på vei til brukeren etter de har submittet...
    ------------------------------------------------------------
    */

    document.getElementById("overskriftPremierPaaVei").innerHTML = "Du har følgene premier på vei til deg:";
    if (hoytaler == 1) {
        document.getElementById("infoPremierPaaVei").innerHTML += "HØYTALER, ";
    }
    if (klokke == 1) {
        document.getElementById("infoPremierPaaVei").innerHTML += "KLOKKE, ";
    }
    if (pizza == 1) {
        document.getElementById("infoPremierPaaVei").innerHTML += "PIZZA, ";
    }
}   