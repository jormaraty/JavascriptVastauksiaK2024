/*
    Tätä tiedostoa  käyttää ../teht3b.html tiedosto.
    ../ viittaa ylemmän tason kansioon.
 */

// käytetään ns. tiukkaa koodausmoodia
'use strict';

/*
    Laiskan koodaajan muistisääntö:
    - tekstit luetaan prompt() avulla
    - numerot luetaan +prompt() avulla
       - js muuntaa käyttäjän syötteen heti numeroksi
    Teksti voidaan myös ns. parsia numeroksi (parseInt tai parseFloat)
 */

// kysytään käyttäjältä kolme lukua, esittelen samalla muuttujat
let eka = +prompt('Anna eka luku: ');
let toka = +prompt('Anna toka luku: ')
// On kuitenkin hyvä osata muuntaa teksti numeroksi.
// Tätä taitoa tarvitaan myöhemmin esim. syöttölomakkeiden yhteydessä.
// Kysyn nyt numeron prompt() avulla -> saan tekstiä. Muutan tekstin numeroksi ns. parsimalla.
// parseInt yrittää muuntaa tekstin kokonaisluvuksi, parseFloat desimaaliluvuksi.
let kolmas = parseFloat( prompt('Anna vielä vika numero: ') );

// lasketaan halutut tulokset, nyt helppoa kun kaikki ovat numeroita (ei tekstiä)
let summa = eka + toka + kolmas;
let kerto = eka * toka * kolmas;
let ka = (eka + toka + kolmas) / 3;

// valmistelen nätin tulostuksen web-sivulle
let vastaus = 'Lukusi antoivat seuraavia tuloksia <br>';
// lisään vastausta entisten perään -> +=
vastaus += 'Summa = ' + summa + '<br>';
vastaus += 'Kertolaskun tulos: ' + kerto;
// TODO: tee vielä jakolasku

// etsitään web-sivulta oikea paikka tulostukselle (id arvo = 'target'),
// määritellään se vakioksi
const tulostusPaikka = document.querySelector('#target');

// tulostetaan web-sivulle äsken koottu vastaus
tulostusPaikka.innerHTML = vastaus;
