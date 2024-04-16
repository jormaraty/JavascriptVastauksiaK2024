// tiukka moodi
'use strict';

// ** Selityksiä alkuun **

// ** html-sivulta tulevat tekstimuotoiset numerot saadaan luettua toiminnolla
// num1.value ja num2.value. Mutta ne tulevat web-sivulta tekstinä.
// Muunnetaan ne numeromuotoon ns.unaarisella etunollalla: +num1.value

// ** Huomataan, että web-sivulta tulee toimintona jokin seuraavista:
// add, sub, multi tai div.
// Käyttäjän valinta saadaan selville muuttujan 'operation' avulla -> operation.value


// ** Sitten varsinainen toteutus eli koodi **

// etsitään html-sivulta kaikki tarvittavat elementit, niiden id-arvojen avulla
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const operation = document.querySelector('#operation');
const start = document.querySelector('#start');
const result = document.querySelector('#result');

// esitellään muuttuja, johon valitun laskutoimituksen tulos tulee
let calcResult = 0;

// funktio, joka laskee vastauksen eri toiminnoille
function laskeTulos(evt)  {
    // määritellään käyttäjän valitsema toiminto,
    // tulee valintalistan value-kentän arvona
    let toiminto = operation.value;

    // tehdään eri laskennat switch-rakenteen avulla
    switch (toiminto) {
        case 'add':
            // sulut ovat tarpeettomat, nyt ehkä selventää
            calcResult = (+num1.value) + (+num2.value);
            break;
        case 'sub':
            calcResult = +num1.value - +num2.value
            break;
        case 'multi':
            calcResult = +num1.value * +num2.value;
            break;
        case 'div':
            calcResult = +num1.value / +num2.value;
            break;
        default:
            calcResult = 'Tuntematon toiminto';
    }

    // esitetään saatu laskun tulos web-sivulla
    result.innerHTML = calcResult;
}

// määritetään html-sivun 'Calculate'-nappulalle tapahtumankäsittelijä,
// täällä js-koodissa nappula tunnetaan muuttujana 'start'.
// Kuunnellaan nappulan painallusta (click),
// kutsutaan funktiota lasketulos kun havaitaan nappulan painallus.
start.addEventListener('click', laskeTulos);

