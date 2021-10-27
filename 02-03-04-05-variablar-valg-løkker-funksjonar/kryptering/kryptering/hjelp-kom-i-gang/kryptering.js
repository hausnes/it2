var alphabet = "abcdefghijklmnopqrstuvwxyzæøå";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ";

// Testutskrift
console.log("Alfabetet bestaar av " + alphabet.length + " bokstavar.");
console.log("Alfabetet sin plassering alphabet[0] = " + alphabet[0]);

// Testing av å finne innhald på ein spesifikk plass
var bokstav = "b";
var pos = alphabet.indexOf(bokstav);
console.log("indexOf() for bokstaven " + bokstav + " returnerer plass nr. " + pos + ".");
    
// Den hemmelege beskjeden, og annan informasjon om krypteringen
var message = "dette er ein test, og spesialteikn blir ikkje med, som # og &. kva med æ, ø og å?";
var secret = 2; // "Forskyvningen", kvitteringsnøkkelen, eksempelvis skal 'a' bli 'c'
var character = "";

// Krypteringsfunksjonen, som får inn bokstaven ein skal kryptere, samt krypteringsnøkkelen
function encode(letter, secret){
    pos = alphabet.indexOf(letter);
    newpos = (pos + secret);
    if(newpos >= 29){
        newpos = newpos - 29;
    }
    return alphabet[newpos];
}

// Dekrypteringsfunksjonen, mistenkeleg lik som kryptering. 
function decode(letter, secret){
    pos = alphabet.indexOf(letter);
    newpos = (pos - secret);

    if(newpos < 0){
        newpos = newpos + 29;
    }
    return alphabet[newpos];
}

if(alphabet.indexOf(bokstav) !== -1){
    console.log("Suksess, me fant bokstaven!");
}
else{
    console.log("Me fant dessverre ikkje bokstaven i alfabetet.");
}

/*
    Køyrer gjennom eit eksempel der me krypterer ein melding.
    ---------------------------------------------------------
*/

var output = ""; // Blir brukt for å halde på resultatet
for(let i = 0; i < message.length; i++) {
    //console.log(message.charAt(i));
    if(alphabet.indexOf(message.charAt(i)) !== -1){
        output = output + encode(message.charAt(i),secret);
        //console.log("If, bokstav funnen. Iterasjon nr. " + i + ". Innhald message.charAt(i) = " + message.charAt(i));
    }
    else{
        output = output + message.charAt(i);
        //console.log("Else, bokstav ikkje funnen. Iterasjon nr. " + i + ". Innhald: " + message.charAt(i));
    }
}
console.log("output = " + output + ".");

// Alternativ for .. of
let resultat = "";
for(let letter of message) {
    //resultat += letter;
    if(alphabet.indexOf(letter) !== -1){
        resultat = resultat + encode(letter,secret);
    }
    else{
        //console.log("Else...");
        resultat = resultat + letter;
    }
}

console.log("Resultatet med for .. of er: " + resultat);

/* 
    Køyrer gjennom eit eksempel der me dekrypterer ein melding
    ----------------------------------------------------------
*/

var dekryptertMelding = "";
var kryptertmelding = "fgvvg gt gkp vguv, qi urgukcnvgkmp dnkt kmmlg ogf, uqo # qi &. mxc ogf å, a qi b?";

for(let character of kryptertmelding){
    if(alphabet.indexOf(character) !== -1){
        dekryptertMelding = dekryptertMelding + decode(character, secret);
    }
    else{
        dekryptertMelding = dekryptertMelding + character;
    }
}

console.log("Den krypterte meldinga " + kryptertmelding + " blir oversatt til: " + dekryptertMelding);