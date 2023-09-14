import {popupImage, popupLinkImage, popupTextImage, openPopup} from './index.js';
export class Card{
  constructor(data, templateSelector){
    this._link = data.link;
    this._name = data.name;
    this._alt = data.alt;
    this._templateSelector = templateSelector;
  }

  _getTemplate(){
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')//без него 
    .cloneNode(true);

    return cardElement;
  }
 
  generateCard(){
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();

    this._setEventListeners();

    // Добавим данные
    this._element.querySelector('.element__img').src = this._link;
    this._element.querySelector('.element__img').alt = this._alt;
    this._element.querySelector('.element__text').textContent = this._name;
    // Вернём элемент наружу
    return this._element;
  }
  _setEventListeners() {
    this._element.querySelector('.element__img').addEventListener('click', this._setOpenPopupEventListener);//большое изображение
    this._element.querySelector('.element__trash-img').addEventListener('click', this._hendleDeleteCard);
    this._element.querySelector('.element__like-img').addEventListener('click', this._handleLikeCard);
    }
  _setOpenPopupEventListener = () => {
    popupLinkImage.src = this._link;
    popupTextImage.textContent = this._name;
    popupLinkImage.alt = this._alt;
    openPopup(popupImage);
  }
  _hendleDeleteCard = () => {
    this._element.remove();
  }

  _handleLikeCard = (evt) => {
    evt.target.classList.toggle('element__like-img_active');
  }
}