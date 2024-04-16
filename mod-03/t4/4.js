'use strict';

// html-sivulla onkin nyt valikko (select-elementti)

// opiskelijoiden tiedot ovat nyt json-muodossa
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

// etsitään select-tagi web-sivulta, id='target'
const selectElem = document.querySelector('#target');

// käydään nyt json-data läpi for.. of tekniikalla, ei siis perus for-toisto.
// Muuttujan nimi 'opiskelija' saa itse keksiä.
// 'opiskelija saa kerrallaan aina yhden opiskelijan tiedot (name- ja id-arvot)
for (let opiskelija of students)  {
  // määritellään uusi vaihtoehto valintalistalle (option)
  let optionElem = document.createElement('option');
  // määritellään valikon vaihtoehdon näkyvä teksti ja varsinainen data
  optionElem.textContent = opiskelija.name;
  optionElem.value = opiskelija.id;
  // lisätään valintalistalle edellä tehty uusi vaihtoehto
  selectElem.appendChild(optionElem);
}