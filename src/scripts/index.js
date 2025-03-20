import '../pages/index.css';
import {createCard} from './card.js';
import {initialCard, initialCardB, initialCardC, initialCardD} from './cardsList.js';

const placesList = document.querySelector('.a');
const placesListB = document.querySelector('.b');
const placesListC = document.querySelector('.c');
const placesListD = document.querySelector('.d');

renderCards(initialCard);
renderCardsB(initialCardB);
renderCardsC(initialCardC);
renderCardsD(initialCardD);

function renderCards(cards) {
  cards.forEach(cardData => {
    const cardElement = createCard(cardData);

    placesList.appendChild(cardElement);
  });
};

function renderCardsB(cards) {
  cards.forEach(cardData => {
    const cardElement = createCard(cardData);

    placesListB.appendChild(cardElement);
  });
};

function renderCardsC(cards) {
  cards.forEach(cardData => {
    const cardElement = createCard(cardData);

    placesListC.appendChild(cardElement);
  });
};

function renderCardsD(cards) {
  cards.forEach(cardData => {
    const cardElement = createCard(cardData);

    placesListD.appendChild(cardElement);
  });
};
