'use strict';

/*
    Funktio arpoo kokonaisluvun väliltä 1 ..6 ja palauttaa sen.
    Funktio ei tarvitse lähtöarvoja eli parametreja.
    Tyhjät sulut () täytyy kuitenkin aina olla funktion nimen perässä.
 */
function heitaNoppa() {
    // arvotaan kokonaisluku väliltä 1 .. 6
    let arvottu = 1 + Math.floor(Math.random() * 6);
    // palautetaan kutsujalle arvottu kokonaisluku
    return arvottu;
}


// -- pääohjelma --
// etsitään tulostuksen paikka html-sivulta (id-arvon avulla)
const targetElem = document.querySelector('#target');

// muuttuja johon funktion palauttama satunnaisluku otetaan talteen,
// annetaan sille sellainen alkuarvo että päästään while-toiston sisään
let silmaLuku = 0;

// toistetaan niin kauan kun silmäluku ei ole 6
while (silmaLuku != 6)  {
    // kutsutaan funktiota, muista ottaa sen palauttama arvo talteen
    silmaLuku = heitaNoppa();
    // lisätään saatu silmäluku html-sivun listaan entisteen perään (+=),
    // huomaa: heittomerkit taaksepäin ` ...`
    targetElem.innerHTML += `<li> ${silmaLuku} </li>`;
}

// while-toisto on loppunut jos tänne tullaan, eli saatiin kutonen