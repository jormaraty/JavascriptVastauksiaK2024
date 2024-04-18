'use strict';

// etsitään tarvittavat komponentit syöttölomakkeelta (form)
// form-elementti löytyy id-arvon perusteella
const formElem = document.querySelector('#source');
// lomakkeen sisältä voidaan kenttiä etsiä ilman id-arvoa, käytetään 'input[..]'
const firstElem = document.querySelector('input[name=firstname]');
const lastElem = document.querySelector('input[name=lastname]');
// etsitään vielä vastauksen paikka html-sivulta sen id-arvon perusteella
const vastausElem = document.querySelector('#target');

// määritellään lomakkeelle (form) tapahtumankäsittelijä,
// joka kuuntelee lomakkeella olevan nappulan painallusta.
// Nappulalle on html-sivulla määritelty että se tekee tapahtuman 'submit'.
// Parametri event sisältää tietoa tapahtuman käynnistäjästä.
formElem.addEventListener('submit',  function (event) {
    // estetään lomakkeen oletustoiminto
    event.preventDefault();
    // määritellään lomakkeelle lähetettävä vastaus, huomaa erikoismerkit `
    let vastaus = `Your name is ${firstElem.value} ${lastElem.value}`;
    // lähetetään vastaus web-sivulle
    vastausElem.innerHTML = vastaus;
});
