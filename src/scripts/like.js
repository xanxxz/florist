function openModal(open) {
  open.classList.add('popup_is-animated');
  open.classList.add('popup_is-opened');
  document.addEventListener('keydown', escClose);
};

function closeModal(close) {
  close.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', escClose);
};

function escClose(evt) {
  if (evt.key === 'Escape') {
    closeModal(document.querySelector('.popup_is-opened'));
  };
};

function initOverlayClose(popups) {
  popups.forEach(popup => {
    popup.addEventListener('click', (evt) => {
      if (evt.target === popup) {
        closeModal(popup);
      };
    });
  });
};

export {openModal, closeModal, initOverlayClose};

import {openModal, closeModal, initOverlayClose} from '../components/modal.js';

const popups = document.querySelectorAll('.popup');
const placesList = document.querySelector('.places__list');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_new-card');

const userName = document.querySelector('.profile__title').textContent;
const userDescription = document.querySelector('.profile__description').textContent;
const inputName = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');

const newCardForm = document.forms['new-place'];
const editFormElement = document.querySelector('.popup__form');

addButton.addEventListener('click', () => openModal(addPopup));

initCloseButtonsListeners();

initOverlayClose(popups);

function initCloseButtonsListeners() {
  const closeButtons = document.querySelectorAll('.popup__close');
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const popup = button.closest('.popup');
  
      closeModal(popup);
    });
  });
};

<div class="popup popup_type_edit">
<div class="popup__content">
  <button type="button" class="popup__close"></button>
  <h3 class="popup__title">Редактировать профиль</h3>
  <form class="popup__form" name="edit-profile">
    <input type="text" name="name" class="popup__input popup__input_type_name" placeholder="Имя" required>
    <input type="text" name="description" class="popup__input popup__input_type_description" placeholder="Занятие" required>
    <button type="submit" class="button popup__button">Сохранить</button>
  </form>
</div>
</div>