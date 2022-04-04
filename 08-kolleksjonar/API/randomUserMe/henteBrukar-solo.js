// Alternativ kode som gjer det same som "kode.js", men med same tilnærming som Studio Ghibli-eksempelet.

var request = new XMLHttpRequest();
request.open('GET', 'https://randomuser.me/api/?results=1', true);
request.send();
request.onload = skrivUtData;

function skrivUtData() { // Køyrer først når data er mottatt frå nettsida
	var data = JSON.parse(this.response);
	console.log(data); // Test for å sjå kva data me får inn
	
    console.log(data.results[0].name.title + " " + data.results[0].name.last); // Enten ... NB: [0] fordi det uansett er eit JSON-objekt
	
    for(let bruker of data.results) // Eller ...
	{
		console.log(bruker.name.title + " " + bruker.name.last);
	}
}

// Kunne no hatt ein knapp som kalla på funksjonen skrivUtData() i tillegg.
document.getElementById("hent").addEventListener("click", function(){
    var request = new XMLHttpRequest();
    request.open('GET', 'https://randomuser.me/api/?results=1', true);
    request.send();
    request.onload = skrivUtData;
});