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

/** Переменные для закрытия попапа  */
const popupCloseBtn = document.querySelector('.popup__close-button');
const popupCloseBtnEdit = document.querySelector('.popup-edit__close-button');
const popupCloseBtnAdd = document.querySelector('.popup-add__close-button');

const card = document.querySelector('.element__template');

const popup = document.querySelector('.popup');

/**добавляем карточки на страницу*/
function renderCard(name, link){
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

    openPopup(popupImg)
  })

  return cardTemplate;
}

/**массив карточек выводится на страницу*/
initialCards.forEach((initialCard) => {
  const render = renderCard(initialCard.name, initialCard.link)
  elementsContainer.append(render);
})

/**открыть попап*/
function openPopup(popup){
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

/**закрыть попап*/
function closePopup(popup){
  popup.classList.remove('popup_opened');
} 

/**заносим изначальные данные в попап*/
editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
  openPopup(popupEdit)
  enableValidation(objectElement);
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
  const newCard = renderCard(name, link);

  elementsContainer.prepend(newCard, elementsContainer.firstChild)

  evt.target.reset(); 
  
  closePopup(popupAdd);
  enableValidation(objectElement);
}

/**Закрытие попап на оверлей */
popup.addEventListener('click', (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.target);
  }
})

addBtn.addEventListener('click', () => {
  openPopup(popupAdd)
})

popupCloseBtnAdd.addEventListener('click', () => {
  closePopup(popupAdd)
})

popupCloseBtnEdit.addEventListener('click', () => {
  closePopup(popupEdit)
})

/**Закрыть изображение */
closePopupImg.addEventListener('click', () => {
  closePopup(popupImg)
})

submitPopupAdd.addEventListener('submit', handleAddFormSubmit);
submitPopupEdit.addEventListener('submit', handleEditFormSubmit)


const objectElement = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}; 

enableValidation(objectElement);

