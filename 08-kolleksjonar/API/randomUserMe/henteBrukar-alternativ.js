// Alternativ kode som gjer det same som "kode.js", men med same tilnærming som Studio Ghibli-eksempelet.

var request = new XMLHttpRequest();
request.open('GET', 'https://randomuser.me/api/?results=5', true);

request.onload = function () { // Køyrer først når data er mottatt frå nettsida
	console.log("\nEKSEMPEL 2 (XMLHttpRequest):");
	console.log("--------------------------");
	
	// Begin accessing JSON data here
	var data = JSON.parse(this.response);
	console.log("Kva me får av data:");
	console.log(data); // Test for å sjå kva data me får inn
	
	// For-løkke på vår "vanlige" måte
	console.log("\nUtskrift 1 ('vanleg' for-løkke):");
	for(let bruker of data.results)
	{
		console.log(bruker.name.title + " " + bruker.name.last);
	}

	// For-løkke, alternativ
	console.log("\nUtskrift v2 (alternativ for-løkke):")
	if (request.status >= 200 && request.status < 400) {
		data.results.forEach((brukar) => {
            console.log(brukar.name.title + " " + brukar.name.last);
			console.log(brukar.picture.medium);
  	})
  	} else {
		console.log("Data blei ikkje lasta inn frå ekstern kjelde.");
  	}
}

request.send();