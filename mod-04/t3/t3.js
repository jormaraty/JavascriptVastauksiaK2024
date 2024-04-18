'use strict';

// etsitään html-sivulta div-elementti, jonka sisään js-koodin tulokset sijoitetaan
const results = document.querySelector('#results');

// etsitään html-sivulta syöttölomake (form)
const tvForm = document.querySelector('#tv');

// kun html-sivun lomakkeella painetaan nappulaa,
// niin tämä lomakkeen tapahtumankäsittelijä suoritetaan
tvForm.addEventListener('submit', async function (evt) {
    // estetään lomakkeen oletustapahtuma
    evt.preventDefault();
    // luetaan lomakkeelta käyttäjän antama hakusana
    const query = document.querySelector('input[name=q]').value;

    // virhealtis netin kautta tehtävä datan kysely try-osion sisään
    try {
        // asynkroniset funktioiden kutsut
        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${query}`,
        );

        // muutetaan edellä saatu Response-tyyppinen data json-dataksi
        const jsonData = await response.json();
        // debug: tulostetaan saatu json-data konsoliin
        console.log(jsonData);


        // ** datan tulostaminen web-sivulle alkaa **
        // poistetaan mahdolliset entiset tulokset web-sivulta
        results.innerHTML = '';

        // käydään edellä saatu json-data läpi yksi sarja kerrallaan
        for (const tvShow of jsonData) {
            // luodaan articlen sisään tulevat html-tagit (elementit)
            const h2 = document.createElement('h2');
            h2.innerText = tvShow.show.name;
            // kuvan käsittely
            const img = document.createElement('img');
            // huomaa: varaudutaan siihen, että show:n image-arvo puuttuu
            img.src = tvShow.show.image?.medium;
            img.alt = tvShow.show.name;
            // html-anakkurin (linkin) tekeminen
            const a = document.createElement('a');
            a.href = tvShow.show.url;
            a.innerText = 'Go to TV Show';
            // div-elementti, jonka sisälle tulee sarjan yhteenveto (summary)
            const div = document.createElement('div');
            div.innerHTML = tvShow.show.summary;
            // luodaan article-elementti ja laitetaan edellä luodut elementit sen sisään
            const article = document.createElement('article');
            article.append(h2, img, a, div);

            // lisätään valmis article-elementti html-sivulle
            results.append(article);
        }

    } catch (error) {
        // virhetilanteessa tullaan tänne
        console.log(error.message);
    }
});