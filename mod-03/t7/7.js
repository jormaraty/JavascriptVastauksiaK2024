'use strict';

// etsitään web-sivulta elementti, jonka id=trigger
const tekstiElem = document.querySelector('#trigger');
// etsitään kuva paikka web-sivulta, id=target
const kuvaElem = document.querySelector('#target');

// mitä tehdään kun hiiri tulee tekstin päälle?
function hiiriPaalle(evt)  {
    // vaihdetaan kuva
    kuvaElem.src = "img/picB.jpg";
}

// mitä tehdään kun hiiri poistuu kuvan päältä?
function hiiriPois(evt)  {
    kuvaElem.src = "img/picA.jpg";
}

// määritellään tapahtumankäsittelijä, kun hiiri tulee tekstin päälle (mouseover)
// Tekstin alue on nyt selaimella 'laidasta laitaan'.
tekstiElem.addEventListener('mouseover', hiiriPaalle);

// määritellään tapahtumankäsittelijä, kun hiiri poistuu tekstin päältä (mouseleave)
tekstiElem.addEventListener('mouseleave', hiiriPois);


