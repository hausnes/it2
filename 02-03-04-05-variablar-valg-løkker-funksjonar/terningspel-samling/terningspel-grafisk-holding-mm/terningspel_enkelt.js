// Hentar ut elementa me treng referere til 
var resultatUt = document.getElementById("resultatUt");
var bilde1 = document.getElementById("bilde1"); // bilde-elementet i HTML-koden
var bilde2 = document.getElementById("bilde2");
var bilde3 = document.getElementById("bilde3");
var terningarBoks = document.getElementById("terningar"); // DIV-boks som inneheld alle terningane
var kastTerningar = document.getElementById("kastTerningar"); // Knappen som lar deg kaste
var startSpelIgjen = document.getElementById("startSpelIgjen"); // Knappen som lar deg starte spelet på nytt

// Verdiar for dei ulike terningane, ml. 1-6
var tern1 = 1; var tern2 = 2; var tern3 = 3;

var antKast = 0; // Held styr på kor mange forsøk du har hatt på å kaste
var sum = 0; // Summen av terningane som blir trilla

// Blir nokon av terningane haldt (boolean)? Ved oppstart så er ingen holdt.
var tern1Holdt = false; var tern2Holdt = false; var tern3Holdt = false;

// Skjuler knappen for å starte spelet på nytt
document.getElementById("startSpelIgjen").style.visibility = "hidden";

// Startar funksjonen som set opp spelområdet og set variablar til ynskja verdiar.
f_startSpel();

// Registrerer lyttefunksjonar på elementa ein kan trykke på i brukargrensesnittet.
kastTerningar.addEventListener("click", f_trillAlleTerningar);
startSpelIgjen.addEventListener("click", f_startSpel);
bilde1.addEventListener("click", f_haldTerning1);
bilde2.addEventListener("click", f_haldTerning2);
bilde3.addEventListener("click", f_haldTerning3);

// Set opp spelområdet og set variablar til ynskja verdiar. Typisk nullstille alle variablar, og generelt gå (tilbake) til "0".
function f_startSpel() {
    // Viser knappen for å rulle terningar og skjuler den for å starte på nytt
    document.getElementById("startSpelIgjen").style.visibility = "hidden";
    document.getElementById("kastTerningar").style.visibility = "visible";
    // Fjerner evenetuelle rammer rundt terningane
    bilde1.style.border = "1px solid white";
    bilde2.style.border = "1px solid white";
    bilde3.style.border = "1px solid white";
    // Fjernar informasjon om kva resultata var
    resultatUt.innerHTML = "Spelet har no begynt. Lykke til!<br>";
    // Nullstiller terningane
    tern1 = 1; tern2 = 2; tern3 = 3;
    bilde1.src = "bilder/terning/terning01.png";
    bilde2.src = "bilder/terning/terning02.png";
    bilde3.src = "bilder/terning/terning03.png";
    tern1Holdt = false; 
    tern2Holdt = false; 
    tern3Holdt = false;
}

// Denne funksjonen kan skrivast meir generell med ei løkke, der funksjonen tek inn antall terningar
function f_trillAlleTerningar() { 
    // Trillar terning 1 dersom den ikkje er haldt
    if(tern1Holdt===false) {
        tern1 = trillTerning();
        bilde1.src = "bilder/terning/terning0"+tern1+".png";
        bilde1.width = 150;
    }
    else {
        console.log("Terning 1 blir holdt, den står!");
    }
    // Trillar terning 2 dersom den ikkje er haldt
    if(tern2Holdt===false) {
        tern2 = trillTerning();
        bilde2.src = "bilder/terning/terning0"+tern2+".png";
        bilde2.width = 150;
    }
    else {
        console.log("Terning 1 blir holdt, den står!");
    }
    // Trillar terning 3 dersom den ikkje er haldt
    if(tern3Holdt===false) {
        tern3 = trillTerning();
        bilde3.src = "bilder/terning/terning0"+tern3+".png";
        bilde3.width = 150;
    }
    else {
        console.log("Terning 2 blir holdt, den står!");
    }

    // Viser til slutt resultatet
    f_visResultat();
}

// Funksjon som returnerer ein verdi ml. 1-6
function trillTerning() {
    var tmp = Math.floor(Math.random()*6+1);
    return tmp;
}

// Viser resultatet av dei resultata ein har i det aktuelle øyeblikket ein kallar på funksjonen
// NB: Legg til eigne testar på andre ting basert på kva du ynskjer.
function f_visResultat() {
    resultatUt.innerHTML = "Resultat: " + tern1 + ", " + tern2 + " og " + tern3 + ".<br><br>";
    
    // Sjekkar om dei tre terningane er like.
    if(tern1 === tern2 && tern2 === tern3){ 
        resultatUt.innerHTML += "Du fikk tre like!<br>";
        document.getElementById("kastTerningar").style.visibility = "hidden"; // Gøymer knappen som lar deg trille på nytt; du har fullført spelet
        document.getElementById("startSpelIgjen").style.visibility = "visible"; // Viser knappen som lar deg starte på nytt
    }

    // Ser på om tala overstiger ein viss verdi.
    sum = tern1 + tern2 + tern3;
    if(sum >= 15){ 
        resultatUt.innerHTML += "Summen av terningane er femten eller meir.<br>";
    }

    // Legg til fleire sjekkar/kontrollar etter behov.
}

// Halde terningar
function f_haldTerning1() {
    if(tern1Holdt === true) {
        bilde1.style.border = "1px solid white"; // Fjernar den raude ramma rundt terningen; du held ikkje lenger
        console.log("Terning 1 er ikkje lenger haldt.");
        tern1Holdt = false;
    }
    else {
        bilde1.style.border = "1px solid red"; // Legg til ei raud ramme rundt terningen for å vise at ein held den
        tern1Holdt = true;
        console.log("Du held no terning 1!");
    }    
}

function f_haldTerning2() {
    if(tern2Holdt === true) {
        bilde2.style.border = "1px solid white";
        console.log("Terning 2 er ikkje lenger haldt.");
        tern2Holdt = false;
    }
    else {
        bilde2.style.border = "1px solid red";
        console.log("Du held no terning 2!");
        tern2Holdt = true;  
    }
}

function f_haldTerning3() {
    if(tern3Holdt === true) {
        bilde3.style.border = "1px solid white";
        console.log("Terning 3 er ikkje lenger haldt.");
        tern3Holdt = false;
    }
    else {
        bilde3.style.border = "1px solid red";
        console.log("Du held no terning 3!");
        tern3Holdt = true;  
    }
}