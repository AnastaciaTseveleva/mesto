"use strict";
import './index.css';
import {Card} from '../components/Card.js';
export {popupSelectorImage, popupLinkImage, popupTextImage, handleCardClick};
import {FormValidator} from '../components/FormValidator.js';
import {initialCards} from '../utils/cards.js';
import  {Section}  from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

/**Переменные для Edit */
const editButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_name_edit');
const jobInput = document.querySelector('.popup__input_status_edit');
const submitPopupEdit = document.querySelector('.popup-edit__form');

/**Переменные для Add */
const addBtn = document.querySelector('.profile__add-button');
const submitPopupAdd = document.querySelector('.popup-add__form');

/**переменные для изображения */
const popupSelectorImage = document.querySelector('.popup-img');
const popupLinkImage = document.querySelector('.popup-img__full');
const popupTextImage = document.querySelector('.popup-img__text');

/**Функция создает новую карточку и отдает ее функции generateCard */
function createCard(card){
  // Создадим экземпляр карточки
  const newCard = new Card(card, '.element__template', handleCardClick);
  //возвращваем экземпляр карточки в generateCard
  return newCard.generateCard();
}
const popupImage = new PopupWithImage('.popup-img');
popupImage.setEventListeners();

function handleCardClick(name, link) {
  popupImage.open(name, link)
};
const cardList = new Section({items: initialCards, renderer: createCard}, '.elements');
cardList.renderItems();



const popupUserInfo = new PopupWithForm('.popup-edit', (formData) => {
  userInfo.setUserInfo({
    name: formData.name,
    status: formData.status
  });
  popupUserInfo.close();
})

editButton.addEventListener('click', () =>{
  editForm.hideInputError();
  popupUserInfo.open();
  const updatedData = userInfo.getUserInfo();
  nameInput.value = updatedData.name;
  jobInput.value = updatedData.status;
})
popupUserInfo.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  infoSelector: '.profile__status'
})

const popupNewCard = new PopupWithForm('.popup-add', (formData) => {
  const cardData = {
    name: formData.caption,
    link: formData.link
  };
  const cardElement = createCard(cardData);
  cardList.addItem(cardElement);
  popupNewCard.close();
});

popupNewCard.setEventListeners();

addBtn.addEventListener('click', () => {
  addForm.hideInputError();
  popupNewCard.open();
})

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


