'use strict';

// kysytään käyttäjän nimi
let nimi = prompt('Anna nimi: ');

// arvotaan kokonaisluku väliltä 1 .. 4
let tuvanNro = 1 + Math.floor( Math.random() * 4 );

let tuvanNimi;

// määritellään tuvan nimi tuvan numeron avulla
// käytetään nyt switch-rakennetta

switch (tuvanNro) {
    case 1:
        tuvanNimi = 'Gryffindor';
        break;
    case 2:
        tuvanNimi = 'Slytherin';
        break;
    case 3:
        tuvanNimi = 'Hufflepuff';
        break;
    case 4:
        tuvanNimi = 'Ravenclaw';
        break;
    default:
        tuvanNimi = 'jokin meni vikaan...'
}

// muodostetaan vastauksen teksti
let vastaus = nimi + ', you are ' + tuvanNimi;

// etsitään tulostuskohta web-sivulta
const tulostusKohta = document.querySelector('#target');

// tulostetaan web-sivulle saatu vasttaus
tulostusKohta.innerHTML = vastaus;