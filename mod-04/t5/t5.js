'use strict';

// tehdään datan haku asynkronisesti
async function getRandomJoke() {
    // haetaan data fetch-apin avulla, se palauttaa Promise-tyyppisen olion.
    // huom ollaan async sisällä -> fetch oltava await-määrityksellä
    let response = await fetch('https://api.chucknorris.io/jokes/random');
    // muutetaan Response-tyyppinen data json-dataksi
    let jsonData = await response.json();

    // tämän jälkeen ei yleensä tarvita synkronoituja toimintoja

    // tulostetaan vitsi konsoliin, saadaan json-datan avaimella 'value'.
    console.log(jsonData.value);
}

// nyt 'tapahtumankäsittelijänä' on pelkkä funktion kutsu
getRandomJoke();