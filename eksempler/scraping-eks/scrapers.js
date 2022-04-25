// Guide: https://www.youtube.com/watch?v=TzZ3YOUhCxo
// NB: Du må ha installert node js og puppeteer for å få dette eksempelet til å virke

const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Hentar ut eit bilete
    const el = await page.$x('/html/body/div/div/p[2]/img'); // Inspect, find element, copy xpath
    const src = await el[0].getProperty('src');
    console.log("Kjelde: " + src);
    const srcTxt = await src.jsonValue();

    console.log(srcTxt);

    browser.close(); // Avsluttar nettlesarøkt
}

scrapeProduct('https://www.hausnes.no/');