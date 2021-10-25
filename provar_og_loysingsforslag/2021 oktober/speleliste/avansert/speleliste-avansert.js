let speleliste = ["Rompa mi", "Det går likar no", "Rompa di", "Rompa ho si", "Diddelidi", "Hihihi"];
let artistBileter = ["marker.svg","medicine.svg","muffin.svg","pin.svg","pizza.svg","sale.svg"];

let knappSpelAv = document.getElementById("spillAv");
knappSpelAv.addEventListener("click", startSpeleliste);

let utskrift = document.getElementById("utskrift");
let artistBilete = document.getElementById("artist");

function startSpeleliste() {
    //console.log("Startar avspeling...");
    let songNr = getRandomIntInclusive(0,speleliste.length-1);
    utskrift.innerHTML = "Låt: " + speleliste[songNr];
    artistBilete.src = "bileter/" + artistBileter[songNr];
    spelAvSong();
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
  
function spelAvSong() {
    const songLengde = getRandomIntInclusive(3,8); // Latar som at kvar song varar mellom 3 til 8 sekund
    let speletid = songLengde; // Dette gjer me fordi me ynskjer å gradvis endre speletida når songen spelast av
    // "Stiller inn" progressbarem, slik at dette gjeld for kvar nye låt (max vil endre seg etter kor lang songen er)
    document.getElementById("progressBar").value = 0;
    document.getElementById("progressBar").max = songLengde;

    // https://www.w3schools.com/js/js_timing.asp
    clearInterval(timer);
    var timer = setInterval(function(){
        if(speletid <= 0){
            clearInterval(timer);
        }
        document.getElementById("progressBar").value = songLengde - speletid;
        speletid -= 1;
    }, 1000);

    // NB: Bør legge til funksjonalitet som fiksar det at ein kan starte fleire "trådar" samtidig (forsøk sjølv å trykke på "play"-knappen fleire gonger etter kvarandre.)
}