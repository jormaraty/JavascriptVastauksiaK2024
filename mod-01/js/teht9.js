'use strict';

// kysytään käyttäjältä tutkittava luku, prompt -> saadaan tekstiä
// -> 'parsitaan' se kokonaisluvuksi (parseInt).
let tutkittavaLuku = parseInt( (prompt('Anna tutkittava kokonaisluku: ')));

// boolean-tyyppinen muuttuja (true/false), joka kertoo onko tutkittava luku alkuluku.
// asetetaan muuttujan alkuarvoksi true eli alkuoletuksena tutkittava luku on alkuluku.
let onAlku = true;

// Idea: jaetaan tutkittava luku muuttujan 'jakaja' arvolla.
// 'jakaja' saa arvot 2, 3, 4, ... (tutkittavaLuku -1)
// eli suurin 'jakaja' arvo on yhtä pienempi kuin 'tutkittavaLuku'.
// Jos tutkittava luku on yhdenkin kerran jaollinen jollakin muuttuja 'jakaja'
// arvolla -> 'tutkittavaLuku' EI ole alkuluku, ja tutkinta voidaan lopettaa.

// for-toisto jakaantuu aina 3 osaan:
// 1) Alkutoimet, suoritetaan vain 1 kerran
//      - muuttuja 'jakaja' saa arvon 2
// 2) Toistoehto
//      - toistetaan niin kauan, kun 'jakaja' on pienempi kuin 'tutkittavaLuku'
// 3) Lopetustoimet
//      - jokaisen toiston lopussa muuttujan 'jakaja' arvoa lisätään yhdellä
for ( let jakaja = 2; jakaja < tutkittavaLuku; jakaja++ )  {
    // tutkitaan onko 'tutkittavaLuku' jaollinen muuttujan 'jakaja' arvolla
    // eli onko jakojäännös (%) nolla
    if (tutkittavaLuku % jakaja == 0)  {
        // jos oli jaollinen -> 'onAlku' asetetaan arvoon false,
        onAlku = false;
        // ja lopetetaan saman tien for-toisto
        break;
    }

    // tässä kohtaa suoritetaan automaattisesti lopetustoimet eli
    // nyt lisätään muuttujan 'jakaja' arvoa yhdellä.
}

// esitellään muuttuja 'vastaus', jonka sisältö tulostetaan web-sivulle,
// alkuarvoksi castauksen alkuosa
let vastaus = 'Lukusi ' + tutkittavaLuku;

// päätellään vastauksen loppuosa muuttujan 'onAlku' arvon perusteella
if (onAlku)  {
    // onAlku on true jos tänne tullaan -> 'tutkittavaLuku' ON alkuluku.
    // lisätään uutta tekstiä nykyisen tekstin perään (+=)
    vastaus += ' ON alkuluku';
} else {
    // tutkittavaLuku EI ollut alkuluku, jos tänne tullaan eli onAlku on false
    vastaus += ' EI ole alkuluku';
}

// etsitään tulostuksen paikka (id='target') web-sivulta
let tulostusKohta = document.querySelector('#target');

// tulostetaan saatu vastaus äsken löydettyyn kohtaan web-sivulle
tulostusKohta.innerHTML = vastaus;