var chart = document.getElementById("chart");
            
var data = [
    {mnd:"Januar",verdi:100},
    {mnd:"Februar",verdi:20},
    {mnd:"Mars",verdi:70},
    {mnd:"April",verdi:150},
    {mnd:"Mai",verdi:140},
    {mnd:"Juni",verdi:20},
    {mnd:"Juli",verdi:40}
]

for(let i = 0; i < 4; i++){
    chart.innerHTML += `<line stroke="DarkGray" x1="50" y1="${50+i*50}" x2="350" y2="${50+i*50}"></line>`;
}

for(let i = 0; i < 7; i++){
    chart.innerHTML += `<line stroke="DarkGray" x1="${50+i*50}" y1="50" x2="${50+i*50}" y2="200"></line>`;
}

data.forEach(function(element, indeks){ // Tegner opp teksten 
    chart.innerHTML += `<text font-family="arial" text-anchor="middle" fill="Dark-Gray" font-size="12" x="${50+indeks*50}" y="220">${element.mnd}</text>`;
});

var punkter = ""; // Tegner opp linjen
data.forEach(function(element, indeks){
    punkter += `${50+indeks*50}, ${200-element.verdi},`;
    
    pktA = 50+indeks*50;
    pktB = 200-element.verdi;
    punkter += pktA + "," + pktB + ",";
    
    console.log("punkter = " + punkter);
    console.log("indeks = " + indeks);
    console.log("element.verdi = " + element.verdi)
});

chart.innerHTML += `<polyline points="${punkter}" marker-mid="url(#sirkel)" stroke="SteelBlue" stroke-width="2" fill="none"></polyline>`;