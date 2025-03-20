function createCard(cardData) {
  const cardTemplate = document.getElementById('card-template');
  const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);
    
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardPrice = cardElement.querySelector('.card__price');
  const cardDescription = cardElement.querySelector('.card__description');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  cardPrice.textContent = cardData.price;
  cardDescription.textContent = cardData.description;
  

  return cardElement;
};
  


export {createCard};