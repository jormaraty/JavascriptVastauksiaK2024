'use strict';

let tulos;          // laskutoimituksen tulos
let vastaus;        // html-sivulle lähetettävä vastaus

// kysytään käyttäjältä että lasketaanko vai ei?
// confirm()-funktio palauttaa true tai false.
let lasketaan = confirm("Lasketaanko neliöjuuri?")

if (lasketaan) {
    // Yllä on lyhennys lausekkeesta: if (lasketaan == true),
    // se on mahdolista vain boolean-tyyppisellä muuttujalla.

    // kysytään käyttäjältä luku, otetaan se talteen muuttujaan 'luku'
    let luku = prompt('Mistä luvusta neliöjuuri lasketaan?');

    // lasketaan neliöjuuren arvo, jos käyttäjä antoi positiivisen luvun
    if (luku >= 0) {
        tulos = Math.sqrt(luku);
        // muotoillaan html-sivun vastaus, tulos 3 desimaalilla
        vastaus = 'Luvun ' + luku + ' neliöjuuri = ' + tulos.toFixed(3);
    } else {
        // käyttäjä antoi negatiivisen luvun, jos tänne tullaan
        vastaus = "The square root of a negative number is not defined";
    }

} else {
    // käyttäjä antoi eka kysymykseen 'cancel', jos tänne tullaan
    vastaus = "The square root is not calculated";
}

// etsitään tulostuskohta html-sivulta
const tulostusPaikka = document.querySelector('#target');

// tulostetaan saatu vastaus html-sivulle
tulostusPaikka.innerHTML = vastaus;
