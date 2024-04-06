'use strict';

// kysytään alkutiedot
let noppienLkm = parseInt( prompt('Kuinka monta noppaa heitetään?'))
let tavoite = parseInt( prompt('Mitä summaa nopilla tavoitellaan?'))

// kuinka monta kertaa kaikkien noppien heittäminen toistetaan?
const toistoLkm = 100000;
// kuinka monta kertaa on saatu käyttäjän haluama summa eli osuma?
let osumia = 0;

// aloitetaan simulointi, toistetaan 'toistoLkm' kertaa,
// muuttuja 'kierros' kertoo kuinka monta kertaa käyttäjän haluama määrä noppia on heitetty.
for (let kierros = 0; kierros < toistoLkm; kierros++)  {
    // yhden nopan antama silmäluku
    let silmaluku;
    // noppien summa alussa
    let summa = 0;

    // heitetään nopppaa 'noppienLkm' kertaa
    for (let nr = 0; nr < noppienLkm; nr++) {
        // arvotaan kokonaisluku väliltä 1 .. 6
        silmaluku = Math.floor( 1 + Math.random() * 6 );
        // lisätään saatu silmäluku summaan
        summa += silmaluku;
    }

    // saatiinko osuma? (noppien summa on sama kuin mitä käyttäjä halusi)
    if (summa === tavoite) {
        // lisätään osumien määrää yhdellä
        osumia++;
    }
}

// lasketaan osumaprosentti eli kuinka usein saatiin käyttäjän haluama summa
let osumaPros = 100 * osumia / toistoLkm;

// muotoillaan web-sivulle lähetettävä vastaus, prosenttiluku ilmoitetaan 2 desimaalilla
let vastaus = 'Probability to get sum ' + tavoite + ' with ' +
    noppienLkm + ' dice is ' + osumaPros.toFixed(2) + '%';

// etsitään web-sivulta tulostuspaikka
const tulostusPaikka = document.querySelector('#target');
// tulostetaan saatu vastaus web-sivulle
tulostusPaikka.innerHTML = vastaus;