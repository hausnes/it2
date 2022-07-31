let infoLagringsmedier = [
    { lagringsmedie: "HDD",  overskrift: "HDD",  bilete: "lagring-hdd.png",    beskrivelse: "Harddisk-lagring" },
    { lagringsmedie: "SSD",  overskrift: "SSD",  bilete: "lagring-ssd.png",    beskrivelse: "Solid state disk-lagring" },
    { lagringsmedie: "NVME", overskrift: "NVME", bilete: "lagring-m2nvme.png", beskrivelse: "NVM Express-lagring" }
];

let boks = document.createElement("div");
let overskrift = document.createElement("h1");
let bilete = document.createElement("img");
let beskrivelse = document.createElement("p");
