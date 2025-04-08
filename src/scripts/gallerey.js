import {initialCard} from './cardsList.js';

const placesList = document.querySelector('.aa');

renderCards(initialCard);

function renderCards(cards) {
    cards.forEach(cardData => {
      const cardElement = createCard(cardData);
  
      placesList.appendChild(cardElement);
    });
  };