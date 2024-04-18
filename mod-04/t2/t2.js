'use strict';

// etsitään web-sivulta syöttölomake
const tvForm = document.querySelector('#tv');

// määritellään lomakkeen datan lähetykselle tapahtumankäsittelijä.
tvForm.addEventListener('submit', async function (evt) {
    // estetään oletustoiminto
    evt.preventDefault();
    // luetaan lomakkeelta käyttäjän antama hakusana
    const query = document.querySelector('input[name=q]').value;

    // laitetaan virhaltis datan haku ja käsittely try-catch rakenteen sisään.
    // Huom: nyt datan käsittely tehdään asynkronisilla funktioilla,
    // eli selain 'ei jämähdä' haun ajaksi.
    try {
        // haetaan data fetch avulla. Se palauttaa Response-tyyppisen arvon
        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${query}`,
        );

        // muutetaan saatu Response-tyyppinen data json-tyyppiseksi json() funktion avulla.
        const jsonData = await response.json();

        // tulostetaan json-data selaimen konsoliin (F12)
        console.log(jsonData);

    } catch (error) {
        // tänne tullaan vain jos try-osiossa tapahtuu poikkeus eli virhe
        console.log(error.message);
    }
});
