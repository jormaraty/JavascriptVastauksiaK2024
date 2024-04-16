// käytetään ns. tiukkaa moodia
'use strict';

// etsitään haluttu html-elementti web-sivulta
const ulElem = document.querySelector('#target');

// luodaan tarvittavat elementit
let li1Elem = document.createElement('li');
li1Elem.innerText = 'First item';

let li2Elem = document.createElement('li');
li2Elem.innerText = 'Second item';

let li3Elem = document.createElement('li');
li3Elem.innerText = 'Third item';

// 'kootaan palapeli' eli kerrotaan mikä elementti menee toisen sisään
ulElem.appendChild(li1Elem);
ulElem.appendChild(li2Elem);
ulElem.appendChild(li3Elem);


// määritellään vain listan toiselle li-elementille css-luokkamääritys.

// Tekniikka 1:
// toisen li-elementin nimi on li2Elem, määritellään css-määritys sille
// li2Elem.classList.add('my-item');

// Tapa 2:
// Etsitään aluksi kaikki web-sivulta löytyvät li-elementit
let liElementit = document.querySelectorAll('li');
// huomaa: liElementit on lista eli taulukko
// -> listan 2. alkioon viitataan: liElementit[1]
// Määritellään nyt toiselle li-elementille css-luuokkamääritys
liElementit[1].classList.add('my-item');


