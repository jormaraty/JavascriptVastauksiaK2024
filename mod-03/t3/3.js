'use strict';
const names = ['John', 'Paul', 'Jones'];

// etsitään web-sivulta tagi, jonka id=target
const ulElement = document.querySelector('#target');

// tehdään äsken etsityn ulElementin sisään
// uusia <li> elementtejä innerHTML-toiminnon avulla for-toiston avulla
for (let i = 0; i < names.length; i++)  {
    // lisätään aina uutta tekstiä entisen perään -> +=
    ulElement.innerHTML += `<li>${ names[i] } </li>`
}

