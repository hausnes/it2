let klokkeslett = document.getElementById("klokkeslett");
console.log(klokkeslett);
klokkeslett.style.color = "#f72121";
klokkeslett.innerHTML = "00:00:00";

let tid = new Date();
console.log(tid); // Kva er eigentleg "new Date()", sa du? Me sjekkar!
let timar = tid.getHours();
let minutt = tid.getMinutes();
let sekunder = tid.getSeconds();
let tidTilUtskrift = timar + ":" + minutt + ":" + sekunder;
console.log(tidTilUtskrift); // Testutskrift
klokkeslett.innerHTML = tidTilUtskrift;

// Oppgåve: Korleis få noko til å oppdatere seg automatisk i JS? Søk!

// Oppgåve: Korleis skal me fikse at det står berre eit enkelt tal når klokka t.d. er 20.48.8? 
// Tenk høgt! Bonuspoeng om du brukar ordet "dersom".