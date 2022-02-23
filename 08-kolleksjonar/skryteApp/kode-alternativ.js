const skryteOrd = [
    "sjenerøs",
    "omgjengelig",
    "ambisiøs",
    "munter",
    "hardtarbeidende",
    "troverdig",
    "tålmodig",
    "optimistisk",
    "følsom",
    "sosial",
    "besluttsom",
    "morsom",
    "blid",
    "vakker",
    "lekende",
    "elskverdig",
    "talentfull",
    "begavet"
];

//let person = prompt("Hvem vil du skryte av?");
//let antallSkryteord = parseInt(prompt("Hvor mange skryteord?"));

function skrytAv(person, antallSkryteord) {
    let skryteSetning = "Kjære, <span class='navn'>" + person + "</span>!<br> Du er ";
    if(antallSkryteord >= 3) {
        for (let i = 0; i < antallSkryteord-2; i++) {
            let plassering = tilfeldigTall(0,skryteOrd.length-1);
            let utvaltOrd = skryteOrd[plassering];
            skryteOrd.splice(plassering,1);
            skryteSetning = skryteSetning + utvaltOrd + ", ";
        }
        plassering = tilfeldigTall(0,skryteOrd.length-1);
        let utvaltOrd1 = skryteOrd[plassering];
        skryteOrd.splice(plassering,1);
        
        plassering = tilfeldigTall(0,skryteOrd.length-1);
        let utvaltOrd2 = skryteOrd[plassering];
        skryteOrd.splice(plassering,1);

        skryteSetning = skryteSetning  + utvaltOrd1 + " og " + utvaltOrd2 + ".";
    }
    else {
        let plassering = tilfeldigTall(0,skryteOrd.length-1);
        let utvaltOrd1 = skryteOrd[plassering];
        skryteOrd.splice(plassering,1);
        
        plassering = tilfeldigTall(0,skryteOrd.length-1);
        let utvaltOrd2 = skryteOrd[plassering];
        skryteOrd.splice(plassering,1);
        
        skryteSetning = skryteSetning + utvaltOrd1 + " og " + utvaltOrd2 + ".";
    }
    console.log(skryteSetning);
    document.getElementById("skrytUt").innerHTML = skryteSetning;
}

skrytAv("Jo Bjørnar", 7);

function tilfeldigTall(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}