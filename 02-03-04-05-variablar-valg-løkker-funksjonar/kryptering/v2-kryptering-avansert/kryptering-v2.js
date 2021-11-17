let keyInput = document.getElementById("key");
let textInput = document.getElementById("textInput");
let returns = document.getElementById("returns");

textInput.addEventListener("focus", aktiverKryptering);
returns.addEventListener("focus", aktiverDekryptering);

keyInput.addEventListener("input", translate);
textInput.addEventListener("input", translate);
returns.addEventListener("input", translate);

const alphabet = "abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ,.-_!?";

var modus = "";

function aktiverKryptering() {
    modus = "krypter";
    //console.log(modus);
}

function aktiverDekryptering() {
    modus = "dekrypter"; 
    //console.log(modus);
}

function forflytt(bokstav, nokkel) {
    posisjon = alphabet.indexOf(bokstav);
    posisjonNy = (posisjon + nokkel);
    //console.log("posisjonNy= " + posisjonNy);
    if(posisjonNy >= alphabet.length){
        posisjonNy = posisjonNy - alphabet.length;
    }
    else if(posisjonNy < 0) {
        posisjonNy = posisjonNy + alphabet.length;
    }
    
    console.log("'forflytt' fekk inn bokstav:" + bokstav + ", nøkkel:" + nokkel + ", posisjon:" + posisjon + ", posisjonNy:" + posisjonNy + " - og returnerer: " + alphabet[posisjonNy]);
    return alphabet[posisjonNy];
}

function translate() {
    console.clear();
    //console.log("Forventa aktivitet: " + modus);

    let nokkel = parseInt(keyInput.value);
    let ukryptertMelding = textInput.value;
    let kryptertMelding = returns.value;
    let tekstSomSkalGjerastNokoMed = "";
    let utskrift = "";

    if (modus==="dekrypter") {
        console.log("Dekrypterer, må endre forteikn.");
        nokkel = -nokkel;
        tekstSomSkalGjerastNokoMed = kryptertMelding;
    } 
    else if (modus==="krypter") {
        console.log("Krypterer, endrar ikkje forteikn.");
        tekstSomSkalGjerastNokoMed = ukryptertMelding;
    }
    else {
        console.log("Noko gjekk gale.");
    }

    console.log("Nøkkel = " + nokkel);
    
    for (let i = 0; i < tekstSomSkalGjerastNokoMed.length; i++) {
        utskrift = utskrift + forflytt(tekstSomSkalGjerastNokoMed[i], nokkel);
    }

    console.log("Ferdig: " + utskrift);

    if (modus==="dekrypter") {
        textInput.value = utskrift;
    } 
    else {
        returns.value = utskrift;
    }

    // Dersom brukaren gløymer å fylle ut nøkkelen så fungerer ingenting. Nullstiller.
    if(isNaN(nokkel)) {
        alert("Hugs å fylle ut 'key'!");
        textInput.value = "";
        returns.value = "";
    }
}