import '../pages/index.css';
import {createCard, initOverlayClose} from './card.js';
import {chooseMenu, scroll} from './menu-button.js';
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

const btnMenu = Array.from(document.querySelectorAll('.main__menu__button'));

const sbornyBtn = document.querySelector('.sborny-button');
const svadebnyBtn = document.querySelector('.svadebny-button');
const svadebnyOformBtn = document.querySelector('.svadebny-oform-button');
const oformPrazdnikBtn = document.querySelector('.oform-prazdnik-button');
const suxozvetBtn = document.querySelector('.suxozvet-button');
const oformPodarkBtn = document.querySelector('.oform-podark-buttun');
const ozelenenBtn = document.querySelector('.ozelenen-button');
const moxBtn = document.querySelector('.mox-button');
const fruitKorzinBtn = document.querySelector('.fruit-korzin-button');
const flowerKorzinBtn = document.querySelector('.flower-korzin-button');
const indivudualBtn = document.querySelector('.indivudual-button');
const sezonBtn = document.querySelector('.sezon-button');
const dekorBtn = document.querySelector('.dekor-button');

const sbornyPlace = document.querySelector('.sborny-places');
const svadebnyPlace = document.querySelector('.svadebny-places');
const svadebnyOformPlace = document.querySelector('.svadebny-oform-places');
const oformPrazdnikPlace = document.querySelector('.oform-prazdnik-places');
const suxozvetPlace = document.querySelector('.suxozvet-places');
const oformPodarkPlace = document.querySelector('.oform-podark-places');
const ozelenenPlace = document.querySelector('.ozelenen-places');
const moxPlace = document.querySelector('.mox-places');
const fruitKorzinPlace = document.querySelector('.fruit-korzin-places');
const flowerKorzinPlace = document.querySelector('.flower-korzin-places');
const indivudualPlace = document.querySelector('.indivudual-places');
const sezonPlace = document.querySelector('.sezon-places');
const dekorPlace = document.querySelector('.dekor-places');


sbornyBtn.addEventListener('click', () => scroll(sbornyPlace));
svadebnyBtn.addEventListener('click', () => scroll(svadebnyPlace));
svadebnyOformBtn.addEventListener('click', () => scroll(svadebnyOformPlace));
oformPrazdnikBtn.addEventListener('click', () => scroll(oformPrazdnikPlace));
suxozvetBtn.addEventListener('click', () => scroll(suxozvetPlace));
oformPodarkBtn.addEventListener('click', () => scroll(oformPodarkPlace));
ozelenenBtn.addEventListener('click', () => scroll(ozelenenPlace));
moxBtn.addEventListener('click', () => scroll(moxPlace));
fruitKorzinBtn.addEventListener('click', () => scroll(fruitKorzinPlace));
flowerKorzinBtn.addEventListener('click', () => scroll(flowerKorzinPlace));
indivudualBtn.addEventListener('click', () => scroll(indivudualPlace));
sezonBtn.addEventListener('click', () => scroll(sezonPlace));
dekorBtn.addEventListener('click', () => scroll(dekorPlace));

const menu = document.querySelector('.main__menu')
const menuList = menu.querySelector('.main__menu__list')

menu.addEventListener('wheel', (evt) => {
  if (window.innerWidth > 824) {
    evt.preventDefault();
    
    menuList.scrollBy({
        left: evt.deltaY,
        behavior: 'smooth'
    });
}
});


chooseMenu(btnMenu)

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