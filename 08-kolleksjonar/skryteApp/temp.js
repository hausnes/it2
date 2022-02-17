const skryteOrd = [
    "sjenerøs","omgjengelig","ambisiøs","munter","hardtarbeidende","troverdig","tålmodig","optimistisk","følsom","sosial","besluttsom","morsom","blid","vakker","lekende","elskverdig","talentfull","begavet"
];

//console.log(skryteOrd[0]); // Dette gjer oss "sjenerøs"

let setning = "Kjære Jo Bjørnar, du er ";

let antallSkryteord = parseInt(prompt("Kor mange skryteord?"));

for (let i = 0; i < antallSkryteord; i++) { // Korleis byte ut 5-talet med så mange brukaren ønsker?
    //console.log(skryteOrd[0]); // Sjå neste linje, me byter ut 0 med noko tilfeldig.
    //console.log(skryteOrd[tilfeldigTall(0,skryteOrd.length-1)]);
    // Meir lesbar kode:
    let tilfeldig = tilfeldigTall(0,skryteOrd.length-1);
    console.log(skryteOrd[tilfeldig]);
    setning += skryteOrd[tilfeldig] + ", ";
    skryteOrd.splice(tilfeldig,1); // Her fjernar me det ordet som me valte ut denne runden frå arrayen -> det kan aldri bli valt igjen
}

console.log(setning);

function tilfeldigTall(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}  