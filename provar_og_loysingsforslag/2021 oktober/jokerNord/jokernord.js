let oppVelger = document.getElementById("opp");
let nedVelger = document.getElementById("ned");
let tilfeldigTallVisning = document.getElementById("utskrift");
let resultat = document.getElementById("resultatOgInfo");

let nedreGrense = 1;
let ovreGrense = 10;
let tilfeldigTall = getRandomIntInclusive(nedreGrense,ovreGrense);
tilfeldigTallVisning.innerHTML = tilfeldigTall;

resultat.innerHTML = "Trur du neste tal blir høgare eller lågare enn " + tilfeldigTall + "?";
resultat.style.color = "black";

let brukerGjett = "ikkje valgt"; // Til å begynne med har ikkje brukaren valgt høgare el. lågare

oppVelger.addEventListener("click", gjettOpp);
nedVelger.addEventListener("click", gjettNed);

function gjettOpp() {
    console.log("Du gjetta at det neste tilfeldige talet blei høgare.");
    brukerGjett = "høgare";
    kontrollerTall();
}

function gjettNed() {
    console.log("Du gjetta at det neste tilfeldige talet blei lågare.");
    brukerGjett = "lågare";
    kontrollerTall();
}

function kontrollerTall() {
    resultat.style.color = "white";
    let nesteTilfeldigeTal = getRandomIntInclusive(nedreGrense,ovreGrense);
    if (nesteTilfeldigeTal === tilfeldigTall) {
        document.body.style.backgroundColor = "yellow";
        resultat.innerHTML = "Kjedeleg, same tal.";
    }
    if ((nesteTilfeldigeTal > tilfeldigTall && brukerGjett === "høgare") || (nesteTilfeldigeTal < tilfeldigTall && brukerGjett === "lågare")) {
        document.body.style.backgroundColor = "green";
        resultat.innerHTML = "Riktig, godt gjetta!";
    }
    else {
        document.body.style.backgroundColor = "red";
        resultat.innerHTML = "Ah, det var synd!";
    }

    resultat.innerHTML += "<br>Tal 1 var " + tilfeldigTall + " og tal 2 var " + nesteTilfeldigeTal + ". Du gjetta at tal 2 var " + brukerGjett + ".";
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
  