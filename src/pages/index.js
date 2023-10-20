"use strict";
import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import  {Section}  from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api';
import { PopupWithDialog } from '../components/PopupWithDialog';
/**Переменные для Edit */
const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_name_edit');
const jobInput = document.querySelector('.popup__input_status_edit');
const formPopupEdit = document.querySelector('.popup-edit__form');
const buttonSaveProfile = document.querySelector('.popup__save-button_edit')
/**Переменные для Add */
const popupNewImageButton = document.querySelector('.profile__add-button');
const formPopupAdd = document.querySelector('.popup-add__form');
const buttonSaveNewImage = document.querySelector('.popup__save-button_add')

/**переменные для изображения */
const popupSelectorImage = document.querySelector('.popup-img');
const popupLinkImage = document.querySelector('.popup-img__full');
const popupTextImage = document.querySelector('.popup-img__text');

/**переменные для авы*/
const popupNewAvatarButton = document.querySelector('.profile__avatar');
const formPopupAvatar = document.querySelector('.popup-avatar__form');
const buttonSaveAvatar = document.querySelector('.popup-avatar__save-button')

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-77',
  headers: {
    authorization: '541229d3-61b8-44d0-8441-0c3c4441404d',
    'Content-Type': 'application/json'
  }
});
const cardList = new Section({renderer: createCard, containerSelector: '.elements'});
const userInfo = new UserInfo({nameSelector: '.profile__name', infoSelector: '.profile__status', avatarSelector: '.profile__avatar'});

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, userInfoData]) => {
    cardList.renderItems(cards);
    userInfo.setUserInfo({name: userInfoData.name, about: userInfoData.about, id: userInfoData._id, avatar: userInfoData.avatar});
  })
  .catch((err) => {
    console.log(err);
  });

/**Отредактированные данные профиля сохраняются на сервере */
const popupUserInfo = new PopupWithForm('.popup-edit', (formData) => {
  buttonSaveProfile.textContent = 'Сохранение...';
  api.updateUserProfile({name: formData.name, about: formData.status})//обязательно status 
    .then((userInfoUpdate) => {
      userInfo.setUserInfo({name: userInfoUpdate.name, about: userInfoUpdate.about, id: userInfoUpdate._id, avatar: userInfoUpdate.avatar})
      popupUserInfo.close();
    })
      .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSaveProfile.textContent = "Сохранить";
    });
})

//отвечает за то что в поппапе выводится инфа о человеке
popupProfileOpenButton.addEventListener('click', () =>{
  editForm.hideInputError();
  popupUserInfo.open();
  const updatedData = userInfo.getUserInfo();
  nameInput.value = updatedData.name;
  jobInput.value = updatedData.about;
})

/** Новая картинка сохраняется на сервере*/
const popupNewCard = new PopupWithForm('.popup-add', (formData) => {
  buttonSaveNewImage.textContent = 'Сохранение...';
  api.addCard({name: formData.caption, link: formData.link})
    .then((cardUpdate) => {
      const card = createCard(cardUpdate);
      cardList.prependItem(card);
      popupNewCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSaveNewImage.textContent = "Сохранить";
    });
});

//добавляем авку
const popupNewAvatar = new PopupWithForm('.popup-avatar', (formData) => {
  buttonSaveAvatar.textContent = 'Сохранение...';
  api.setAvatar({avatar: formData.avatar})
    .then((updateAvatar) => {
      userInfo.setUserInfo({name: updateAvatar.name, about: updateAvatar.about, id: updateAvatar._id, avatar: updateAvatar.avatar})//инфа обновляется в реальном времени 
      popupNewAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSaveAvatar.textContent = "Сохранить";
    });
});
popupNewAvatar.setEventListeners();

popupNewAvatarButton.addEventListener('click', () => {
  popupNewAvatar.open();
  avatarForm.hideInputError();
})

/**Функция создает новую карточку и отдает ее функции generateCard */
function createCard(card){
  // Создадим экземпляр карточки
  const newCard = new Card(card, '.element__template', handleCardClick, handleLikeCard, handleDeleteLikeCard, userInfo.getId(), handleDeleteCard);
  //возвращваем экземпляр карточки в generateCard
  const cardElement = newCard.generateCard();
  cardList.appendItem(cardElement);

  return cardElement;
}

//удаляем карточку
const popupWithDialog = new PopupWithDialog('.popup-delete')
function handleDeleteCard(card){
  popupWithDialog.open(() => {
    api.deleteCard(card.getCardId())
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
  api.setLike(card.getCardId())
    .then((res) => {
      card.setLikes(res)
    })
    .catch((err) => {
      console.log(err);
    });
}
//убираем лайк
function handleDeleteLikeCard(card){
  api.delLike(card.getCardId())
    .then((res) => {
      card.setLikes(res)
    })
    .catch((err) => {
      console.log(err);
    });
}

popupNewImageButton.addEventListener('click', () => {
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

const editForm = new FormValidator(formPopupEdit, validationConfig);
editForm.enableValidation();

const addForm = new FormValidator(formPopupAdd, validationConfig);
addForm.enableValidation();

const avatarForm = new FormValidator(formPopupAvatar, validationConfig);
avatarForm.enableValidation();

export {popupSelectorImage, popupLinkImage, popupTextImage, handleCardClick};
