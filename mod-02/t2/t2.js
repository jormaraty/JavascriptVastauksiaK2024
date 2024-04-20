'use strict';

// etsitään html-sivulta js-koodin tulostuksen paikka,
// hyödynnetään web-sivun p-elementin id-arvoa 'target'
const targetElem = document.querySelector('#target');

// tyhjä taulukko osallistujien nimiä varten
let osallistujat = [];

// kysytään osallistujien lkm, käytetään nyt +prompt() ->
// muutetaan käyttäjän syöte heti numeroksi
let lkm = +prompt('Kuinka monta osallistujaa? ');

// kysytään nimet ja lisätään ne taulukkoon
for (let i = 0; i < lkm; i++)  {
    let nimi = prompt('Anna osallistujan nimi: ');
    osallistujat.push(nimi);
}

// järjestetään taulukon nimet aakkosjärjestykseen
osallistujat.sort();

// lisätään taulukosta yksi nimi kerrallaan html-sivun listan alkiksi ->
// -> taulukon nimi täytyy laittaa li-tagien sisään
// -> innerHTML kanssa käytetään '+=' -> uusi nimi tulee entisten perään

// käytetään nyt for .. of -toistorakennetta,
// nyt on pakko käyttää erikoismerkkejä `..`
for (let nimi of osallistujat) {
    targetElem.innerHTML += `<li> ${nimi} </li>`;
}