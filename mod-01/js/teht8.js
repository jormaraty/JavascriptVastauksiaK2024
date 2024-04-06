'use strict';

// onko vuosi karkausvuosi (true/false)
let onKarkaus;

// kysytään alku- ja loppuvuosi
let alku = +prompt('Mikä on alkuvuosi?');
let loppu = +prompt('Mikä on loppuvuosi');

// aloitetaan html-sivulle lähetettävä vastauksen valmistelu
// html:n br-tagilla saadaan rivin vaihto
let vastaus = 'Karkausvuodet väliltä ' + alku + ' - ' + loppu + '<br>';

// lisätään vastaukseen listan aloitustagi ul
// nyt ul- ja li-tagien yhteyteen ei laiteta br-tagia.
// listan tagit (ul, li) tekevät itse rivin vaihdon web-sivulla
vastaus += '<ul>';

// Käydään kaikki vuodet halutulta väliltä yksitellen läpi
for (let vuosi = alku; vuosi <= loppu; vuosi++) {
    // tarkistetaan että muuttujan vuosi arvo karkausvuosi
    // Nyt lyhyt versio testistä:
    // vuosi on karkausvuosi jos se on jaollinen 400:lla  TAI
    // (vuosi on jaolliinen 4:llä JA ei ole jaollinen100:lla)
    if ( vuosi % 400 == 0  || (vuosi % 4 == 0  &&  vuosi % 100 != 0 ) ) {
        // vuosi on karkausvuosi, lisätään se ul-listaan
        vastaus += '<li>' + vuosi + '</li>';
    }
}

// lisätään vastaukseen listan lopetustagi
vastaus += '</ul>';

// etsitään html-sivulta target id
const tulostusPaikka = document.querySelector('#target');
// tulostetaan html-sivulle saatu vastaus
tulostusPaikka.innerHTML = vastaus;