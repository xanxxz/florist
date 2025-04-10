import '../pages/index.css';
import {createCard, initOverlayClose} from './card.js';
import {
  sbornyCard, 
  svadebnyCard, 
  svadebnyOformCard, 
  oformPrazdnikCard, 
  suxozvetCard, 
  oformPodarkCard, 
  ozelenenCard, 
  moxCard,
  fruitKorzinCard,
  flowerKorzinCard,
  indivudualCard,
  sezonCard,
  dekorCard
} from './cardsList.js';

const popup = document.querySelector('.popup-filter');

const placesList = document.querySelector('.a');
const placesListB = document.querySelector('.b');
const placesListC = document.querySelector('.c');
const placesListD = document.querySelector('.d');
const placesListE = document.querySelector('.e');
const placesListF = document.querySelector('.f');
const placesListG = document.querySelector('.g');
const placesListH = document.querySelector('.h');
const placesListI = document.querySelector('.i');
const placesListJ = document.querySelector('.j');
const placesListK = document.querySelector('.k');
const placesListL = document.querySelector('.l');
const placesListM = document.querySelector('.m');

initOverlayClose(popup);

renderCards(sbornyCard);
renderCardsB(svadebnyCard);
renderCardsC(svadebnyOformCard);
renderCardsD(oformPrazdnikCard);
renderCardsE(suxozvetCard);
renderCardsF(oformPodarkCard);
renderCardsG(ozelenenCard);
renderCardsH(moxCard);
renderCardsI(fruitKorzinCard);
renderCardsJ(flowerKorzinCard);
renderCardsK(indivudualCard);
renderCardsL(sezonCard);
renderCardsM(dekorCard);

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

function renderCardsE(cards) {
  cards.forEach(cardData => {
    const cardElement = createCard(cardData);

    placesListE.appendChild(cardElement);
  });
};

function renderCardsF(cards) {
  cards.forEach(cardData => {
    const cardElement = createCard(cardData);

    placesListF.appendChild(cardElement);
  });
};
function renderCardsG(cards) {
  cards.forEach(cardData => {
    const cardElement = createCard(cardData);

    placesListG.appendChild(cardElement);
  });
};
function renderCardsH(cards) {
  cards.forEach(cardData => {
    const cardElement = createCard(cardData);

    placesListH.appendChild(cardElement);
  });
};
function renderCardsI(cards) {
  cards.forEach(cardData => {
    const cardElement = createCard(cardData);

    placesListI.appendChild(cardElement);
  });
};
function renderCardsJ(cards) {
  cards.forEach(cardData => {
    const cardElement = createCard(cardData);

    placesListJ.appendChild(cardElement);
  });
};
function renderCardsK(cards) {
  cards.forEach(cardData => {
    const cardElement = createCard(cardData);

    placesListK.appendChild(cardElement);
  });
};
function renderCardsL(cards) {
  cards.forEach(cardData => {
    const cardElement = createCard(cardData);

    placesListL.appendChild(cardElement);
  });
};
function renderCardsM(cards) {
  cards.forEach(cardData => {
    const cardElement = createCard(cardData);

    placesListM.appendChild(cardElement);
  });
};