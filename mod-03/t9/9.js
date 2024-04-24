'use strict';

// etsitään syöttölomake sen id-arvon avulla
const formElem = document.querySelector('#source');
// etsitään syöttölomakkeen sisältä varsinainen laskutoimitus,
// jolla on id-arvo 'calculation'.
const calcElem = document.querySelector('#calculation');
// etsitään html-sivulta tulostusalue (id=target)
const resultElem = document.querySelector('#target');

/*
    Laskennan idea: syöte sisältää jonkun näistä operaatioista (+, -, *, /)
    Käytetään laskuoperaatiota jakamaan käyttäjän syöte kahteen osaan.
    Eka osa, indeksi = 0, sisältää eka numeron. Toinen osa, indeksi =1
    sisältää toisen numeron. Syötteen pilkkomisen 2 osaan käytetään
    split()-metodia. split()-metodi poistaa välilyönnit tms.
    Käyttäjä voi siis kirjoittaa 3+5 tai 3 + 5.
 */

// muuttuja, johon laskennan lopputulos sijoitetaan
let calcResult =0;

// määritellään lomakkeen tapahtumankäsittelijä,
// lomakkeen nappulalle on määritelty että se tekee tapahtuman 'submit'.
// funktion parametri evt sisältää tietoa tapahtuman käynnistäjästä
formElem.addEventListener('submit', function(evt)  {
    // estetään lomakkeen oletustoiminta
    evt.preventDefault();
    // luetaan käyttäjän antama laskutoimitus lomakkeelta
    let laskutoimitus = calcElem.value;

    // etsitään käyttäjän syötteestä laskutoimitus ja edetään sen mukaan
    if (laskutoimitus.includes('+'))  {
        // käyttäjä oli antanut + merkin, joten jaetaan käyttäjän syöte
        // kahteen osaan + merkin kohdalta
        let osat = laskutoimitus.split('+');
        // 'osat' on nyt taulukko, joka sisältää 2 alkiota.
        // osat[0] sisältää käyttäjän antaman eka luvun jne.
        // Huom: luvut on luettu lomakkeelta tekstinä, ei numeroina.

        // Tehdään nyt yhteenlasku käyttäjän numeroille,
        // +osat[0] muuntaa eka alkion numeroksi laskutoimituksen ajaksi.
        calcResult = +osat[0] + +osat[1];
    } else if (laskutoimitus.includes('-'))  {
        // tehdään vastaavat toiminnot vähennyslaskulle
        let osat = laskutoimitus.split('-');
        calcResult = +osat[0] - +osat[1];
    }
    // TODO: tee kerto- ja jakolasku
    else {
        // käyttäjä ei antanut mitään peruslaskutoimitusta,
        // jos tänne tullaan
        calcResult = 'En tunnistanut laskutoimitusta';
    }

    // lisätään laskutoimituksen tulos html-sivulle
    resultElem.innerHTML = calcResult;

});

