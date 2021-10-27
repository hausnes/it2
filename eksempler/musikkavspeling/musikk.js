let mp3spelar = document.getElementById("mp3spelar");
mp3spelar.setAttribute("src","lydfiler/8bitbilliejean.mp3");

const musikkSamling = [
    { artist: "Jo Bjørnars", album: "Fem Fine Fyrer i Farta", albumCover: "jobjornars.jpg", song: "Cowabunga", songLink: "8bitbilliejean.mp3" },
    { artist: "Jo Bjørnars", album: "Fem Fine Fyrer i Farta", albumCover: "jobjornars.jpg", song: "Yabbadabbadoo", songLink: "highasakite.mp3" }, 
    { artist: "Jo Bjørnars", album: "Fem Fine Fyrer i Farta", albumCover: "jobjornars.jpg", song: "Adioskabæna", songLink: "8bitbilliejean.mp3" }
];

console.log("Original musikksamling:");
console.log(musikkSamling);
console.log(musikkSamling[1].song);

const songliste = ['The Lazy Song—Bruno Mars','Love Song—Sara Bareilles','The Zephyr Song—Red Hot Chili Peppers','Immigrant Song—Led Zeppelin','Your Song—Elton John','Mama’s Song—Carrie Underwood','Undone (The Sweater Song)—Weezer','Adam’s Song—Blink 182','Our Song—Taylor Swift','This Ain’t a Love Song—Bon Jovi'];

// Fisher Yates alg.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        //[array[i].song, array[j].song] = [array[j].song, array[i].song]; // Dette ser ut til å bli feil
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shufflaSongliste = shuffleArray(musikkSamling);

console.log("Shuffla musikksamling:");
console.log(shufflaSongliste);
console.log(musikkSamling[1].song);

for (let song of musikkSamling) {
    document.getElementById("utskrift").innerHTML += "<li>" + song.song + "</li>";
}

document.getElementById("mp3spelar").src = "lydfiler/" + shufflaSongliste[1].songLink;
console.log("Spelar no: " + shufflaSongliste[1].songLink);
document.getElementById("utskrift").childNodes[4].style.backgroundColor = "yellow";
console.log(document.getElementById("utskrift").childNodes[4]);