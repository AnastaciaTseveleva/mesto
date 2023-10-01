import {popupLinkImage, popupTextImage, PopupImage, handleCardClick} from '../pages/index.js';
export class Card{
  constructor(data, templateSelector, handleCardClick){
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick; 
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
    this._element.querySelector('.element__img').alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;
    // Вернём элемент наружу
    return this._element;
  }
  _setEventListeners() {
    this._element.querySelector('.element__img').addEventListener('click', () => this._handleImageClick());//большое изображение
    this._element.querySelector('.element__trash-img').addEventListener('click', this._handleDeleteCard);
    this._element.querySelector('.element__like-img').addEventListener('click', this._handleLikeCard);
    }
  _handleImageClick(){
    this._handleCardClick(this._name, this._link);
  }
  _handleDeleteCard = () => {
    this._element.remove();
  }

  _handleLikeCard = (evt) => {
    evt.target.classList.toggle('element__like-img_active');
  }
}