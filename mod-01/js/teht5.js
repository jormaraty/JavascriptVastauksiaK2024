/*
    Tämä koodia käyttää web-sivu ../teht5.html
    '..' viittaa ylemmän kansion tiedostoihin.
 */

// tämä määritys on ensimmäinen koodirivi
'use strict';

// kysytään käyttäjältä vuosiluku, otetaan se talteen vakioon (arvoa ei pysty muuttamaan)
// luetaan arvo +promt() avulla -> js yrittää heti muuntaa käyttäjän syötteen numeroksi.
const vuosi = +prompt('Anna vuosiluku: ');

// esitellään boolean tyyppinen muuttuja (true/false), onko vuosi karkausvuosi.
let onKarkaus;

// tarkistetaan että onko vuosi karkausvuosi vai ei
// JOS jaollinen 400 -> ON karkausvuosi
if (vuosi % 400 == 0) {
    onKarkaus = true;
}
// muuten jos jaollinen 100 -> EI ole karkausvuosi
else if (vuosi % 100 == 0) {
    onKarkaus = false;
}
// muuten jos jaollinen 4 -> ON karkausvuosi
else if (vuosi % 4 == 0) {
    onKarkaus = true;
} else {
    onKarkaus = false;
}

// muodostetaan html-sivulle lähtevä vastauksen alkuosa
let vastaus = 'Vuosi ' + vuosi;
// määritetään vastauksen loppuosa, lisätään alkusan perään (+=)
if (onKarkaus == true) {
    // yllä oleva ehto perinteisenä varsiona: if (omKarkaus == true) {
    vastaus += ' ON karkausvuosi';
} else {
    vastaus += ' EI ole karkausvuosi';
}

// etsitään html-sivulta id-arvon 'target' omaava kohta
const tulostusPaikka = document.querySelector('#target');
// tulostetaan vastaus html-sivulle
tulostusPaikka.innerHTML = vastaus;
