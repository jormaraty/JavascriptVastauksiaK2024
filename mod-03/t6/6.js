'use strict';

// etsitään html-sivulta nappula, jonka painallusta aletaan kohta kuunnella.
// etsintä tapahtuu nyt html-komponentin ('button') avulla, ei id-arvolla.
const nappula = document.querySelector('button');

// määritellään, mitä tehdään kun nappulaa painetaan
function nappulanPainallus(evt)  {
    alert('Button Clicked');
}

// määritellään nappulalle tapahtumankuuntelija
nappula.addEventListener('click', nappulanPainallus);



