const popup = document.querySelector('.popup-filter');
const closeButton = popup.querySelector('.popup__close');

const imageInPopup = document.querySelector('.places-list__gallery')

function createCard(cardData) {
  const cardTemplate = document.getElementById('card-template');
  const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);
  
  const cardImage = cardElement.querySelector('.card__image');
  const popupImage = cardElement.querySelector('.popup__image');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  cardElement.addEventListener('click', () => {openModal(cardData.link)});

  return cardElement;
};

closeButton.addEventListener('click', closeModal);

function openPopup(imageSrc, imageCaption, imageName) {
  image.src = imageSrc;
  caption.textContent = imageCaption;
  image.alt = imageName;
  openModal(imagePopup);
};

function openModal(imageUrl) {
  const popupImage = document.querySelector('.popup__image');
  popupImage.src = imageUrl;
  popup.classList.add('popup_is-animated');
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', escClose);
};

function closeModal() {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', escClose);
};

function escClose(evt) {
  if (evt.key === 'Escape') {
    closeModal(document.querySelector('.popup_is-opened'));
  };
};

function initOverlayClose() {
  popup.addEventListener('click', (evt) => {
    if (evt.target === popup) {
      closeModal(popup);
    };
  });
};

export {createCard, openModal, closeModal, initOverlayClose};