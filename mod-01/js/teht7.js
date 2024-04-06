'use strict';

// kuinka monta noppaa
let noppienLkm = +prompt('Kuinka monta noppaa heitetään? ');
// noppien summa on aluksi nolla
let summa = 0;

// heitetään jokaista noppaa kerraan ja lisätään saatu silmäluku summaan
for (let i = 0; i < noppienLkm; i++) {
    // silmäluku (kokonaisluku) arvotaan väliltä 1..6
    let silmaluku = 1 + Math.floor(Math.random() * 6);
    // tulostetaan heitetyn nopan silmäluku konsoliin
    console.log("Nopan silmäluku: " + silmaluku);
    // lisätään saatu silmäluku summaan
    summa = summa + silmaluku;
}

// etsitään tulostuspaikka html-sivulta
const tulostusPaikka = document.querySelector('#noppasumma');

// tulostetaan html-sivulle vastaus
tulostusPaikka.innerHTML = noppienLkm + ' nopan summa = ' + summa;