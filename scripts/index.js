"use strict";
import {Card} from './Card.js';
export {popupImage, popupLinkImage, popupTextImage, openPopup};
import {FormValidator} from './FormValidator.js'

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
const linkImgInput = document.querySelector('.popup__input_link_add');
const nameImgInput = document.querySelector('.popup__input_name_add');
const submitPopupAdd = document.querySelector('.popup-add__form');

/** Переменные для закрытия попапа  */
// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close-button');
const popupList = document.querySelectorAll('.popup')

/**переменные для изображения */
const popupImage = document.querySelector('.popup-img');
const popupLinkImage = document.querySelector('.popup-img__full');
const popupTextImage = document.querySelector('.popup-img__text');

const cardsContainer = document.querySelector('.elements');

/**Функция создает новую карточку и отдает ее функции generateCard */
function createCard(cards){
  // Создадим экземпляр карточки
  const card = new Card(cards, '.element__template');
  //возвращваем экземпляр карточки в generateCard
  return card.generateCard();
}

/**Колбек функция перебирает все карточки из данного массива и добаляет их в дом */
initialCards.forEach((cards) => {
  //передаем карточки в ф-ю 
  createCard(cards);

  // Добавляем в DOM
  cardsContainer.append(createCard(cards));
});

/** добавить новую карточку*/
function handleAddFormSubmit (evt) {
  evt.preventDefault(); 

  const newCard = {link: linkImgInput.value, name: nameImgInput.value}

  createCard(newCard, '.element__template');//передаем куда добавить элемент и сам элемент newCard(имя и ссылка) в createCard
  cardsContainer.prepend(createCard(newCard));

  evt.target.reset(); //очищаем поля
  closePopup(popupAdd);
}

/**открыть попап*/
function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
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
  const openedPopup = document.querySelector('.popup_opened');
  if (openedPopup === evt.target) {
    closePopup(openedPopup);
  }
}

popupList.forEach(popup => {
  popup.addEventListener('click', handleOverlayClick);
}) 

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
  editForm.hideInputError();
  openPopup(popupEdit);
})

/**статус и имя выводим на страницу*/
function handleEditFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;
  closePopup(popupEdit);
}

addBtn.addEventListener('click', () => {
  addForm.hideInputError();
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

const editForm = new FormValidator(submitPopupEdit, validationConfig);
editForm.enableValidation();

const addForm = new FormValidator(submitPopupAdd, validationConfig)
addForm.enableValidation();


