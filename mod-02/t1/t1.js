// käytetään ns. tiukkaa moodia -> js huomaa paremmin koodaajan mokia.
'use strict';

// tyhjä taulukko käyttäjän lukuja varten
let numerot = [];

// kysytään käyttäjältä 5 lukua
for (let i = 0; i < 5; i++)  {
    // luetaan nyt numero sisään prompt() -> saadaan arvo tekstinä
    let lukuStr = prompt('Anna kokonaisluku: ');
    // muutetaan saatu arvo kokonaisluvuksi ns. parsimalla
    let luku = parseInt(lukuStr);
    // lisätään kokonaisluku (nyt oikeasti numero) taulukkoon
    numerot.push(luku);
}

// tulostetaan taulukon luvut viimeisestä ensimmäiseen for-toistolla
// taulukon indeksointi alkaa nollasta ->
// viimeisen luvun indeksi on 'taulukon pituus -1', ekan 0.
for (let index = numerot.length - 1; index >= 0; index--)  {
    // tulostetaan konsoliin taulukon kohdata 'index' löytyvä arvo
    console.log( numerot[index] );
}
