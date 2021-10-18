// Registrerer lyttefunksjonar m.m.
document.getElementById("knappEndreFarge").addEventListener("click", endreBakgrunnsfargeString);
document.getElementById("knappEndreFargeHex").addEventListener("click", endreBakgrunnsfargeHex);
document.getElementById("knappEndreFargeRGB").addEventListener("click", endreBakgrunnsfargeRGB);
document.getElementById("animerBakgrunnsfarge").addEventListener("click", endreBakgrunnsfargeAnimasjon)
var utskrift = document.getElementById("utskrift");

/*
    ---------------------------------------------------------------
    Endrar bakgrunnsfarge vha. string (t.d. "black", "yellow", ...)
    ---------------------------------------------------------------
*/
function endreBakgrunnsfargeString() {
    var gammalFarge = document.body.style.backgroundColor;
    var fargeString = tilfeldigFargeString();
    while(fargeString == gammalFarge){
        console.log("Ups, den fargen var der frå før, me forsøker igjen...");
        fargeString = tilfeldigFargeString();
    }
    document.body.style.backgroundColor = fargeString;
    utskrift.innerHTML = '"' + fargeString + '"';
}

function tilfeldigFargeString(){
    // Alternativ 1
    var arrFargar = ["red","green","blue","yellow","pink","purple","black","gold","lavender"]; // Utvid etter behov https://htmlcolorcodes.com/color-names/
    return arrFargar[getRandomIntInclusive(0,arrFargar.length-1)];

    // Alternativ 2 (kvifor er ikkje denne like god/enkel?)
    /*
    var tal = getRandomIntInclusive(1,6);
    switch(tal){
        case 1:
            return "red";
        case 2:
            return "green";
        case 3:
            return "blue";
        case 4:
            return "yellow";
        case 5:
            return "pink";
        case 6:
            return "purple";
        default:
            return "black";
    }
    */
}

/*
    ------------------------------------------------------------
    Endrar bakgrunnsfarge vha. hexadesimale kodar (t.d. #ff434f)
    ------------------------------------------------------------
*/

function endreBakgrunnsfargeHex() {
    var fargeHex = tilfeldigFargeHex();
    utskrift.innerHTML = fargeHex;
    document.body.style.backgroundColor = fargeHex;
}

function tilfeldigFargeHex() {
    //return "#" + Math.floor(Math.random()*16777215).toString(16); // https://css-tricks.com/snippets/javascript/random-hex-color/

    // Alternativ
    var arrHex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    var ferdigHexKode = "";
    for(let i = 0; i < 6; i++) {
        ferdigHexKode += arrHex[getRandomIntInclusive(0,arrHex.length-1)];
    }
    return "#" + ferdigHexKode;
}

/*
    ---------------------------------------------------
    Endrar bakgrunnsfarge vha. RGB (t.d. rgb(0,244,124)
    ---------------------------------------------------
*/

function endreBakgrunnsfargeRGB() {
    var fargeRGB = tilfeldigFargeRGB();
    utskrift.innerHTML = "RGB: " + fargeRGB;
    document.body.style.backgroundColor = fargeRGB;
}

function tilfeldigFargeRGB() {
    var R = getRandomIntInclusive(0,255);
    var G = getRandomIntInclusive(0,255);
    var B = getRandomIntInclusive(0,255);
    var rgbString = "rgb(" + R + ", " + G + ", " + B + ")";
    return rgbString;
}

/*
    --------------------------------------------------------------------------------------
    Funksjon som returnerer tilfeldige tal mellom low (lågaste tal) og high (høgaste tal).
    --------------------------------------------------------------------------------------
*/

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

/*
    -----------------------------------------------------------
    Funksjon som lar oss jamnleg endre bakgrunnsfargen, animert
    -----------------------------------------------------------
*/

function endreBakgrunnsfargeAnimasjon() {
    // Gammel måte: paragraf.setAttribute("class", "klasseEndreFarge");
    
    // Ny måte: (NB: les meir om kvifor me legg til "remove" først og linja med "void": https://css-tricks.com/restart-css-animation/)
    document.body.classList.remove('klasseEndreFarge');
    void document.getElementById("knappEndreFarge").offsetWidth;
    document.body.classList.add('klasseEndreFarge');
}