var bileteKylling = document.getElementById("bileteKylling");
bileteKylling.onclick = f_klikkPaaEgg; // Registrerer ein lyttefunksjon på egget

var undertekstBilete = document.getElementById("undertekstBilete"); // Her vil me skrive ut info om antall trykk
var antallKlikk = 0; // Held kontroll på kor mange klikk me har gjort

function f_klikkPaaEgg(){
    antallKlikk = antallKlikk + 1; // Aukar antall klikk
    undertekstBilete.innerHTML = "Du har trykt " + antallKlikk + " gonger."; // Info til brukar

    // Endrar biletet sin src for kvar gong ein trykker, basert på antallet. Informerer i tillegg om status mot slutten.
    if(antallKlikk===1){
        bileteKylling.src = "bileter/Egg2.jpg";
    }
    else if(antallKlikk===2){
        bileteKylling.src = "bileter/Egg3.jpg";

    }
    else if(antallKlikk===3){
        bileteKylling.src = "bileter/Egg4.jpg";
    }
    else if(antallKlikk===4){
        bileteKylling.src = "bileter/Egg5.jpg";
        undertekstBilete.innerHTML += "<br>Egget er ope! Hei kjotling. <span style='color:red'>Trykker du ein gong til så nullstiller programmet seg</span>.";
    }
    else{
        bileteKylling.src = "bileter/Egg1.jpg";
        antallKlikk = 0;
        undertekstBilete.innerHTML = "Egget uknust, kven befinn seg inni, mon tru?";
    }
}