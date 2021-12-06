let skjema = document.getElementById("skjemaRegistrering");

skjema.addEventListener("submit", registrerBruker);

function registrerBruker(evt) {
    evt.preventDefault();

    let brukernavn = document.getElementById("inpBrukernavn").value;
    let epost = document.getElementById("inpEpost").value;
    
    if (brukernavn.toLowerCase().includes("promp") || brukernavn.includes("tiss")) { // Dersom brukernavnet inneheld stygge ord
        alert("Ikkje promp og tiss, takk!");
    }
    else if (opptattEpost.includes(epost)) { // Dersom e-posten er opptatt
        alert("Den e-postaddressa er dessverre opptatt. Skriv inn ei ny.");
    }
    // Om ingen feil oppstår, skriv ut godkjente data
    else {
        console.log("Brukernavn: " + brukernavn);
        document.getElementById("brukernavn").innerHTML = brukernavn;
        
        console.log("E-post: " + epost);
        document.getElementById("epost").innerHTML = epost;

        // Profilbilete
        if(document.getElementById("inpProfilSnowman").checked) {
            profilbilde ="snowman";
        }
        else if(document.getElementById("inpProfilSanta").checked) {
            profilbilde = "santa";
        }
        else {
            profilbilde = "star";
        }
        document.getElementById("profilbilete").src = "bileter/" + profilbilde + ".png";

        // Interesser
        let listeInteresser = document.querySelectorAll('input[type=checkbox]:checked');
        console.log(listeInteresser);
        if (listeInteresser.length > 0) { // Dersom det er huka av for nokre interesser   
            document.getElementById("interesser").innerHTML = "";
            for (let interesse of listeInteresser) {
                document.getElementById("interesser").innerHTML += "<li>" + interesse.value + "</li>";
            }
        }
        else {
            document.getElementById("interesser").innerHTML = "<li>Ingen interesser.</li>";
        }
    }
}

let opptattEpost = [
    "parasite@me.com",
    "amichalo@icloud.com",    
    "tbeck@att.net",
    "rnelson@att.net",
    "rogerspl@comcast.net",
    "oechslin@verizon.net",
    "kspiteri@att.net",
    "portscan@msn.com",
    "aukjan@verizon.net",
    "wilsonpm@mac.com",
    "csilvers@mac.com",
    "redingtn@sbcglobal.net"
];