let utskrift = document.getElementById("utskrift");

document.getElementById("formKlimaavtrykk").addEventListener("submit", klimaKontroll);

function klimaKontroll(evt) {
    evt.preventDefault();

    let CO2grunnavtrykk = 1;
    let CO2kjott = 0.17;
    let CO2fisk = 0.09;
    let CO2vegetar = 0.08;
    let CO2flyreise = 1.1;

    let antKjott   = parseInt(document.getElementById("antKjott").value);
    let antFisk    = parseInt(document.getElementById("antFisk").value);
    let antVegetar = parseInt(document.getElementById("antVegetar").value);
    console.log("Du et " + (antKjott + antFisk + antVegetar) + " måltid i veka.");

    let antFlyreiser = parseInt(document.getElementById("antFlyreiser").value);
    console.log("Du flyr " + antFlyreiser + " gonger i året.");

    let totaltAvtrykk = CO2grunnavtrykk + (CO2kjott * antKjott) + (CO2fisk * antFisk) + (CO2vegetar * antVegetar) + (CO2flyreise * antFlyreiser);
    console.log("Total CO2: " + totaltAvtrykk);

    utskrift.innerHTML =  "Totalt CO2-nivå: <em>" + totaltAvtrykk.toFixed(2) + " tonn/år</em>";
    let betegnelse = "";
    if (totaltAvtrykk < 6){
        betegnelse = "klimaengel";
    }
    else if (totaltAvtrykk > 6 && totaltAvtrykk <= 8) {
        betegnelse = "normal nordmann";
    }
    else if (totaltAvtrykk > 8) {
        betegnelse = "klimasvin";
    }
    utskrift.innerHTML += "<br>Du betegnes som: <em>" + betegnelse + ".</em>";
}