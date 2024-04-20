'use strict';

/*
    Tässä tehtävässä törmätään json-datan käsittelyssä hieman normaalia
    hankalampaan tapaukseen. Se ei kuitenkaan ole harvinaisra.
    Valitettavasti rajapinnan API-kuvaus on tässä tapauksessa turhan
    vaatimaton. Joutuu nyt itse selvittämään asian.
 */

// etsitään hakulomake
const formElem = document.querySelector('#lomake');

// etsitään tulosten paikka
const tulosElem = document.querySelector('#tulokset');

// määritellään syöttölomakkeelle tapahtumankäsittelijä,
// data haetaan asynkronisesti netin yli
formElem.addEventListener('submit', async function (evt) {
    // estetään oletustoiminto
    evt.preventDefault();
    // luetaan käyttäjän antama hakusana lomakkeelta
    let hakuSana = document.querySelector('input[name=q]').value;
    // muodostetaan nettiin lähetettävä hakulause
    let hakuLause = `https://api.chucknorris.io/jokes/search?query=${hakuSana}`;
    // debug: tulostetaan hakulause konsoliin
    console.log(hakuLause);

    // *** Vinkki: kopioi nettiin lähtevä hakulause selaimeen ja katso mitä dataa sieltä tulee.
    // esim: https://api.chucknorris.io/jokes/search?query=girls
    // Havaitaan että nyt data ei tulekaan tavallisena json-muotona.
    // Saatu data sisältää nyt 2 kpl pääavaimia: total ja result.
    // Näistä result sisältää mm. vitsit ja se on json-muodossa.

    try {
        // haetaan data asynkronisesti netin yli, fetch-apin avulla -> saadaan Promise-tyyppinen vastaus
        let response = await fetch(hakuLause);
        // muutetaan data json-muotoon
        let jsonData = await response.json();
        // debug: tulostetaan json-data konsoliin
        // console.log(jsonData);

        // * tämän jälkeen tulee normaalia synkronista koodia *
        // tyhjennetään selaimen tulosalue
        tulosElem.innerHTML = '';

        // käydään jokainen saatu vitsi yksitellen läpi,
        // Edellä esitetyn huomion perusteella haluttu json-data löytyy nyt
        // netistä tuleen datan 'result' pääavaimen avulla ->
        // käydään läpi 'jsonData.result' alta löytyvä data.
        for (let vitsiData of jsonData.result) {
            // vitsin sisältö tulee p-elementin sisään
            let pElem = document.createElement('p');
            // varsinainen vitsi löytyy yksittäisen vitsin 'value' avaimen arvona
            pElem.innerText = vitsiData.value;
            // jokainen vitsi (p-elementin sisällä) tulee tulee oman article-elementin sisään.
            let articleElem = document.createElement('article');
            articleElem.append(pElem);
            // lisätään valmis article tulosalueelle
            tulosElem.append(articleElem);
        }

    }
    catch (e) {
        console.log(e);
    }


});