let vareoversiktKonkurrent = [48,58,14,23,34,45];
let vareoversiktEiga       = [56,60,10,21,34,49];
let fraktpris = 2;

let utskrift = document.getElementById("utskrift");

// Byrjar med å skrive ut originalprisane, vha. funksjonen "skrivUtHTMLTabell".
document.getElementById("prisEigen").innerHTML =      "Pris (våres): " + vareoversiktEiga;
document.getElementById("prisKonkurrent").innerHTML = "Pris (konk.): " + vareoversiktKonkurrent;

let utskriftLogg = document.getElementById("utskrift");

// Går gjennom og samanliknar alle prisane.
for (let i = 0; i < vareoversiktKonkurrent.length; i++) {
    // Sjekkar prisane opp mot kvarandre og justerer
    if (vareoversiktKonkurrent[i] < (vareoversiktEiga[i] + fraktpris)) { 
        // Oppdaterer "loggen" for kvar prisroboten har gjort i HTML
        utskriftLogg.innerHTML += "Vare nr. " + (i+1); // Me skriv i+1 fordi me ikkje vil at det skal stå vare 0 (det er jo slik elementa i ein array blir nummerert/ref. til)
        utskriftLogg.innerHTML += "<br>Prisen var lågare hjå konkurrent. Konkurrent: " +  vareoversiktKonkurrent[i] + ", eigen pris: " + vareoversiktEiga[i];
        utskriftLogg.innerHTML += "<br>Justerer pris.";
        vareoversiktEiga[i] = vareoversiktKonkurrent[i] - fraktpris; // Her endrar me faktisk prisen i vår eigen array
        utskriftLogg.innerHTML += "<br>Ny pris: " + vareoversiktEiga[i] + " (konkurrent: " + vareoversiktKonkurrent[i] + ")<br><br>";
    }
}

document.getElementById("prisEigenNy").innerHTML      = "Nye prisar (våres): " + vareoversiktEiga;
document.getElementById("prisKonkurrentNy").innerHTML = "Nye prisar (konk.): " + vareoversiktKonkurrent;