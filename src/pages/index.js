"use strict";
import './index.css';
import {Card} from '../components/Card.js';
export {popupSelectorImage, popupLinkImage, popupTextImage, handleCardClick};
import {FormValidator} from '../components/FormValidator.js';
import  {Section}  from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api';
import { error } from 'jquery';
import { PopupWithDialog } from '../components/PopupWithDialog';
/**Переменные для Edit */
const editButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_name_edit');
const jobInput = document.querySelector('.popup__input_status_edit');
const submitPopupEdit = document.querySelector('.popup-edit__form');
const editButtonSave = document.querySelector('.popup__save-button_edit')
/**Переменные для Add */
const addBtn = document.querySelector('.profile__add-button');
const submitPopupAdd = document.querySelector('.popup-add__form');
const addButton = document.querySelector('.popup__save-button_add')

/**переменные для изображения */
const popupSelectorImage = document.querySelector('.popup-img');
const popupLinkImage = document.querySelector('.popup-img__full');
const popupTextImage = document.querySelector('.popup-img__text');

/**переменные для авы*/
const addAvatar = document.querySelector('.profile__avatar');
const submitPopupAvatar = document.querySelector('.popup-avatar__form');
const avatarButton = document.querySelector('.popup__save-button_avatar')

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-77',
  headers: {
    authorization: '541229d3-61b8-44d0-8441-0c3c4441404d',
    'Content-Type': 'application/json'
  }
});

/**загружаем карточки с сервера */
const cardList = new Section({renderer: createCard, containerSelector: '.elements'});
api.getInitialCards()
  .then((cards) => {
    cardList.renderItems(cards);//выводим карточки с помощью класса section и метода renderItems
  })
  .catch((err) => {
    console.log(err);
  });

/** загружаем данные профиля с сервера*/
const userInfo = new UserInfo({nameSelector: '.profile__name', infoSelector: '.profile__status', avatarSelector: '.profile__avatar'});
api.getUserInfo()
  .then((userInfoData) => {
    userInfo.setUserInfo({name: userInfoData.name, about: userInfoData.about, id: userInfoData._id, avatar: userInfoData.avatar})})
  .catch((err) => {
    console.log(err);
  });


/**Отредактированные данные профиля сохраняются на сервере */
const popupUserInfo = new PopupWithForm('.popup-edit', (formData) => {
  api.updateUserProfile({name: formData.name, about: formData.status})//обязательно status 
    .then((userInfoUpdate) => {
      userInfo.setUserInfo({name: userInfoUpdate.name, about: userInfoUpdate.about, id: userInfoUpdate._id, avatar: userInfoUpdate.avatar})})
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editButtonSave.textContent = "Сохранение...";
    });
  
    
  popupUserInfo.close();
})

//отвечает за то что в поппапе выводится инфа о человеке
editButton.addEventListener('click', () =>{
  editForm.hideInputError();
  popupUserInfo.open();
  const updatedData = userInfo.getUserInfo();
  nameInput.value = updatedData.name;
  jobInput.value = updatedData.about;
})

/** Новая картинка сохраняется на сервере*/
const popupNewCard = new PopupWithForm('.popup-add', (formData) => {
  api.addCard({name: formData.caption, link: formData.link})
    .then((cardUpdate) => {
      const card = createCard(cardUpdate);
      cardList.prependCard(card);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addButton.textContent = "Сохранение...";
    });
  popupNewCard.close();
});

//добавляем авку
const popupNewAvatar = new PopupWithForm('.popup-avatar', (formData) => {
  api.setAvatar({avatar: formData.avatar})
    .then((updateAvatar) => {
      userInfo.setUserInfo({name: updateAvatar.name, about: updateAvatar.about, id: updateAvatar._id, avatar: updateAvatar.avatar})//инфа обновляется в реальном времени 
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarButton.textContent = "Сохранение...";
    });
  popupNewAvatar.close();
});
popupNewAvatar.setEventListeners();

addAvatar.addEventListener('click', () => {
  popupNewAvatar.open();
  avatarForm.hideInputError();
})

/**Функция создает новую карточку и отдает ее функции generateCard */
function createCard(card){
  // Создадим экземпляр карточки
  const newCard = new Card(card, '.element__template', handleCardClick, handleLikeCard, handleDeleteLikeCard, userInfo.getId(), handleDeleteCard);
  //возвращваем экземпляр карточки в generateCard
  const cardElement = newCard.generateCard();
  cardList.appendCard(cardElement);

  return cardElement;
}

//удаляем карточку
const popupWithDialog = new PopupWithDialog('.popup-delete')
function handleDeleteCard(card){
  popupWithDialog.open(() => {
    api.deleteCard(card.idCard())
    .then(() => {
      card.removeCard();
      popupWithDialog.close();
    })
    .catch((err) => {
      console.log(err);
    });
  });

}
//открыть изображение
const popupImage = new PopupWithImage('.popup-img');
function handleCardClick(name, link) {
  popupImage.open(name, link)
};
//количество лайков
function handleLikeCard(card){
  api.setLike(card.idCard())
    .then((res) => {
      card.setLikes(res)
    })
    .catch((err) => {
      console.log(err);
    });
}
//убираем лайк
function handleDeleteLikeCard(card){
  api.delLike(card.idCard())
    .then((res) => {
      card.setLikes(res)
    })
    .catch((err) => {
      console.log(err);
    });
}

addBtn.addEventListener('click', () => {
  addForm.hideInputError();
  popupNewCard.open();
})

popupUserInfo.setEventListeners();
popupNewCard.setEventListeners();
popupImage.setEventListeners();
popupWithDialog.setEventListeners();

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

const addForm = new FormValidator(submitPopupAdd, validationConfig);
addForm.enableValidation();

const avatarForm = new FormValidator(submitPopupAvatar, validationConfig);
avatarForm.enableValidation();

