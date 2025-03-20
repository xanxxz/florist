import '../pages/index.css';
import {createCard} from './card.js';
import {initialCards} from './cardsList.js';

const placesList = document.querySelector('.places__list');

renderCards(initialCards);

function renderCards(cards) {
  cards.forEach(cardData => {
    const cardElement = createCard(cardData);

    placesList.appendChild(cardElement);
  });
};