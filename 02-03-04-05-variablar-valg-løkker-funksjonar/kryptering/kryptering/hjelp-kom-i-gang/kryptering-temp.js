var alphabet = "abcdefghijklmnopqrstuvwxyzæøå";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ";

// Testutskrift
console.log("Alfabetet bestaar av " + alphabet.length + " bokstavar.");
console.log("Alfabetet sin plassering alphabet[0] = " + alphabet[0] + " og plasseringa alphabet[1] = " + alphabet[1] + ".");

// Testing av å finne innhald på ein spesifikk plass
var bokstav = "b";
var pos = alphabet.indexOf(bokstav);
console.log("indexOf() for bokstaven " + bokstav + " returnerer plass nr. " + pos + ".");

if(alphabet.indexOf(bokstav) !== -1){
    console.log("Suksess, me fant bokstaven!");
}
else{
    console.log("Me fant dessverre ikkje bokstaven i alfabetet.");
}
    
// Den hemmelege beskjeden, og annan informasjon om krypteringen
var message = "dette er ein test, og spesialteikn blir ikkje med, som # og &. kva med æ, ø og å?";
var secret = 2; // "Forskyvningen", kvitteringsnøkkelen, eksempelvis skal 'a' bli 'c'
var character = "";

// Krypteringsfunksjonen, som får inn bokstaven ein skal kryptere, samt krypteringsnøkkelen
function encode(letter, secret){
    
}

// Dekrypteringsfunksjonen, mistenkeleg lik som kryptering. 
function decode(letter, secret){
    
}

/*
    Køyrer gjennom eit eksempel der me krypterer ein melding.
    ---------------------------------------------------------
*/



/* 
    Køyrer gjennom eit eksempel der me dekrypterer ein melding
    ----------------------------------------------------------
*/