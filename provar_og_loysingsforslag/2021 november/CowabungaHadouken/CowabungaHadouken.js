let utskrift = document.getElementById("utskrift"); // HTML-elementet me skal skrive linjene til.

for (let index = 1; index < 101; index++) { // Ei løkke som går frå 1 til og med 100
    if(index % 15 === 0) { // % gjer som resultat det som ev. blir igjen (rest) av å dele. Eks. 15 % 15 gjer ein rest på 0, medan 15 % 4 gjer ein rest på 3.
        console.log("Cowabunga! Hadouken!");
        utskrift.innerHTML += "<li class='cowabungaHadouken'>Cowabunga! Hadouken!</li>";
    }
    else if(index % 5 === 0) {
        console.log("Hadouken!");
        utskrift.innerHTML += "<li class='hadouken'>Hadouken!</li>";
    }
    else if(index % 3 === 0) {
        console.log("Cowabunga!");
        utskrift.innerHTML += "<li class='cowabunga'>Cowabunga!</li>";
    }
    else {
        console.log(index);
        utskrift.innerHTML += "<li>" + index + "</li>"; // Dersom det ikkje er mogleg å dele på 15, 5 eller 3.
    }
}