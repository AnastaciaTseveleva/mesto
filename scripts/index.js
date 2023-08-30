"use strict";

const elementsContainer = document.querySelector('.elements'); //разметка

/**переменные для изображения */
const popupImg = document.querySelector('.popup-img');
const fullImage = popupImg.querySelector('.popup-img__full');
const fullText = popupImg.querySelector('.popup-img__text');
const closePopupImg = popupImg.querySelector('.popup-img__close-button');

/**Переменные для Edit */
const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const nameInput = document.querySelector('.popup__input_name_edit');
const jobInput = document.querySelector('.popup__input_status_edit');
const popupEdit = document.querySelector('.popup-edit');
const submitPopupEdit = document.querySelector('.popup-edit__form');

/**Переменные для Add */
const popupAdd = document.querySelector('.popup-add');
const addBtn = document.querySelector('.profile__add-button');
const linkImg = document.querySelector('.popup__input_link_add');
const nameImg = document.querySelector('.popup__input_name_add');
const submitPopupAdd = document.querySelector('.popup-add__form');
const saveAddButton = document.querySelector('.popup__save-button_add')

/** Переменные для закрытия попапа  */
// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close-button');

const card = document.querySelector('.element__template');

/**добавляем карточки на страницу*/
function createCard(name, link){
  const cardTemplate = card.content.cloneNode(true);
  const img = cardTemplate.querySelector('.element__img');
  const text = cardTemplate.querySelector('.element__text');
  const like = cardTemplate.querySelector('.element__like-img');
  const element = cardTemplate.querySelector('.element');
  const trash = cardTemplate.querySelector('.element__trash-img');

  img.alt = name;
  img.src = link;
  text.textContent = name;

  /**like*/
  like.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-img_active');
 }); 

  /**trash*/
  trash.addEventListener('click', function () {
    element.remove();
  }); 

  /**открыть-закрыть фото*/
  img.addEventListener('click', function (){
    fullImage.src = link;
    fullText.textContent = name;
    fullImage.alt = name;
    openPopup(popupImg);
  })

  return cardTemplate;
}

/**массив карточек выводится на страницу*/
initialCards.forEach((initialCard) => {
  const render = createCard(initialCard.name, initialCard.link);
  elementsContainer.append(render);
})

/**открыть попап*/
function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
  document.addEventListener('click', handleOverlayClick);
}

/**закрыть попап*/
function closePopup(popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
} 

/**Закрыть попап на Esc */
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

/**Закрытие попап на оверлей */
function handleOverlayClick(evt) {
  console.log('shhs')
  const openedPopup = document.querySelector('.popup_opened');
  if (openedPopup === evt.target) {
    closePopup(openedPopup);
  }
}

/**Закрыть папапы */
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

/**заносим изначальные данные в попап*/
editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
  openPopup(popupEdit);
  hideError(submitPopupEdit, nameInput, validationConfig);
  hideError(submitPopupEdit, jobInput, validationConfig);
})

/**статус и имя выводим на страницу*/
function handleEditFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;
  closePopup(popupEdit);
}

/** добавить новую карточку*/
function handleAddFormSubmit (evt) {
  evt.preventDefault(); 

  const link = linkImg.value;
  const name = nameImg.value;
  const newCard = createCard(name, link);

  elementsContainer.prepend(newCard, elementsContainer.firstChild);

  evt.target.reset(); 
  
  closePopup(popupAdd);
  disableButton(saveAddButton, validationConfig);
}

addBtn.addEventListener('click', () => {
  openPopup(popupAdd);
})
submitPopupAdd.addEventListener('submit', handleAddFormSubmit);
submitPopupEdit.addEventListener('submit', handleEditFormSubmit);

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}; 

enableValidation(validationConfig);

