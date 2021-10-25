let vareoversiktKonkurrent = [48,58,15,23,34,45];
let vareoversiktEiga       = [56,60,10,21,34,49];
let fraktpris = 2; // Definerer ein fast fraktpris 

let utskrift = document.getElementById("utskrift");

// Byrjar med å skrive ut originalprisane, vha. funksjonen "skrivUtHTMLTabell".
document.getElementById("prisEigen").innerHTML = skrivUtHTMLTabell(vareoversiktEiga,"Eigen pris");
document.getElementById("prisKonkurrent").innerHTML = skrivUtHTMLTabell(vareoversiktKonkurrent,"Konkurrent");

// Går gjennom og samanliknar alle prisane.
for (let i = 0; i < vareoversiktKonkurrent.length; i++) {
    // Sjekkar prisane opp mot kvarandre og justerer, første sjekk er om konk. har lågare pris enn oss
    if (vareoversiktKonkurrent[i] < (vareoversiktEiga[i] + fraktpris)) {
        /* 
        // console-utskrift kan vere ein mindre forvirrande løysing i første omgang.
        console.log("\nVare nr. " + (i+1));
        console.log("Prisen var lågare hjå konkurrent. Konkurrent: " +  vareoversiktKonkurrent[i] + ", eigen pris: " + vareoversiktEiga[i]);
        console.log("Justerer pris..");
        vareoversiktEiga[i] = vareoversiktKonkurrent[i] - fraktpris;
        console.log("Ny pris: " + vareoversiktEiga[i] + " (konkurrent: " + vareoversiktKonkurrent[i] + ")");
        */

        // Utskrift til HTML (bruker 'template string' (sjå boka) for at det kanskje skal sjå meir oversikteleg ut):
        let tilUtskrift =  `<li>Vare nr. ${i+1}</li>
                                <ul>
                                    <li>
                                        Prisen var lågare hjå konkurrent. 
                                        Konkurrent: ${vareoversiktKonkurrent[i]}, eigen pris: ${vareoversiktEiga[i]}
                                    </li>
                                    <li>
                                        Justerer pris..
                                    </li>
                                    `;
        
        // Justerer/endrar prisen:                         
        vareoversiktEiga[i] = vareoversiktKonkurrent[i] - fraktpris;

        // Legg til/skriv ut korrigert pris til variabelen "tilUtskrift":
                tilUtskrift +=      `<li>
                                            Ny eigen pris: ${vareoversiktEiga[i]} (konkurrent: ${vareoversiktKonkurrent[i]}) 
                                    </li>
                                </ul>`;

        // Her skriv me faktisk ut variabelen "tilUtskrift" til HTML-en.
        utskrift.innerHTML += tilUtskrift;
    }
}

document.getElementById("prisEigenNy").innerHTML = skrivUtHTMLTabell(vareoversiktEiga,"Ny eigen pris");
document.getElementById("prisKonkurrentNy").innerHTML = skrivUtHTMLTabell(vareoversiktKonkurrent,"Ny pris konkurrent");

/* 
   ---------------------------------------------------------------------------
    Funksjon som tek inn ein array, og kva ein vil ha for overskrift på denne, 
    og returnerer ein HTML-tabell som kan plasserast i HTML-koden.
   ---------------------------------------------------------------------------
*/
function skrivUtHTMLTabell(arrayInn,overskrift){
    var HTMLtabell = "<table><tr><th>" + overskrift + "</th></tr>";
    for(var j = 0; j<arrayInn.length;j++){
        HTMLtabell += "<tr><td>" + arrayInn[j] + "</td></tr>";
    }
    HTMLtabell += "</table>";
    return HTMLtabell;
}