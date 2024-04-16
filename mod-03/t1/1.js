// käytetään ns. tiukkaa moodia
'use strict';

// etsitään haluttu elementti html-sivulta
const ulElem = document.querySelector('#target');

// muotoillaan web-sivulle lähetettävä html-koodi, muista erikoismerkit ` ..`
// eli taaksepäin olevat heittomerkit / akuutti aksentti / template string / backtict
let htmlKoodi =
    `
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    `;

// lisätään html-koodi edellä etsityn html-elementin sisään
ulElem.innerHTML = htmlKoodi;

// määritellään listalle css-luokkamääritys
ulElem.classList.add('my-list');