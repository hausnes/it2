document.getElementById("knappSpelNeste").addEventListener("click", spelNeste);
            
// let speleliste2= ["Rompa mi", "Det går likar no", "Rompa di", "Rompa ho si", "Diddelidi", "Hihihi"];
let speleliste = ['The Lazy Song—Bruno Mars','Love Song—Sara Bareilles','The Zephyr Song—Red Hot Chili Peppers','Immigrant Song—Led Zeppelin','Your Song—Elton John','Mama’s Song—Carrie Underwood','Undone (The Sweater Song)—Weezer','Adam’s Song—Blink 182','Our Song—Taylor Swift','This Ain’t a Love Song—Bon Jovi'];

function spelNeste() {
    document.getElementById("utskrift").innerHTML = "";
    while(speleliste.length > 0) {
        console.log("\nSpeleliste sin lengde: " + speleliste.length);
        let songNr = getRandomIntInclusive(0,speleliste.length-1);
        console.log("Songnr. (random): " +  songNr);
        let songTittel = speleliste[songNr];
        console.log("Song: " + songTittel);
        speleliste.splice(songNr,1);
        console.log("Etter splice-ing: " + speleliste);
        document.getElementById("utskrift").innerHTML += "<li>" + songTittel + "</li>";
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}