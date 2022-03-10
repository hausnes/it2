// Meir om map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// Objekter, som frå når me jobba med arrays med objekt
let klausKu = {
    pnr: "003",
    navn: "Klaus Ku",
    adresse: "Kvegfaret 12 B"
};

let tassen = {
    pnr: "002",
    navn: "Tassen",
    adresse: "Kjøttbeinstien 19"
};

// Putter objektet inn i Map
let mapDyr = new Map();
mapDyr.set(klausKu.pnr,klausKu);
mapDyr.set(tassen.pnr,tassen);

console.log("Størrelse på mapDyr: " + mapDyr.size);

// Alt innhald i mapDyr, men korleis blir det presentert med ei enkel løkke?
console.log("\nInnhald i mapDyr: ");
for (let dyr of mapDyr){
    console.log(dyr);
    //alert(dyr);
}

// Utvalte deler frå kvart objekt i mapDyr
console.log("\nUtvalte deler frå mapDyr: ");
for (let nokkel of mapDyr.keys()){
    let dyr = mapDyr.get(nokkel);
    console.log(dyr.pnr + ": " + dyr.navn);
}

// Korleis registrere ein ny kandidat frå ei nettside, til dømes? Sjå på koden frå t.d. påskerenn.
let generertPNR = "004"; // "Latar" som om desse tre er henta frå nettside
let innlestNavn = "Ugline";
let innlestAdre = "Ugletreet 23";
let nyttDyr = {
    pnr: generertPNR, navn: innlestNavn, adresse: innlestAdre
}
mapDyr.set(nyttDyr.pnr,nyttDyr);

// Testar at dei nye data er registrert 
console.log("\nTest om nye data er registrert:");
console.log(mapDyr.get("004"));
// Kan hente ut navnet og adressa basert på linja over slik:
console.log("Navnet " + mapDyr.get("004").navn + " med adresse " + mapDyr.get("004").adresse + ".");

// Sjekkar om map har ein viss verdi
let leitEtter = "002";
console.log("\nTest om " + leitEtter + " eksisterer:");
console.log(mapDyr.has(leitEtter));

// Testar å slette ein verdi frå Map-en. Sjekkar deretter om me finn denne verdien.
mapDyr.delete("002");
console.log("\nTest om " + leitEtter + " eksisterer etter sletting:");
console.log(mapDyr.has(leitEtter));