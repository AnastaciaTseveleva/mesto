export class Card{
  constructor(data, templateSelector, handleCardClick, handleLikeCard, handleDeleteLikeCard, myId, handleDeleteCard) {
    this._data = data;
    this._link = data.link;
    this._name = data.name;
    this._likesNumber = data.likesNumber//число лайков
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick; 
    this._handleLikeCard = handleLikeCard;
    this._myId = myId;//мой айди
    this._ownerId = data.owner._id;
    this._trashButton = data.trashButton;

    this._handleDeleteCard = handleDeleteCard;
    this._handleDeleteLikeCard = handleDeleteLikeCard;
    this._likes = data.likes;
    this._handleDeleteCard = handleDeleteCard;
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

    this._elemImg = this._element.querySelector('.element__img');
    this._likesNumber = this._element.querySelector('.element__like-counter');
    this._trashButton = this._element.querySelector('.element__trash-img');
    this._likesImg = this._element.querySelector('.element__like-img');
    this._likesNumber.textContent = this._likes.length;//цифры лайка

    // Добавим данные
    this._elemImg.src = this._link;
    this._elemImg.alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;
    
    this._toggleLikeVisibility();
    this._handleTrashButtonVisibility();//видно ли мусорку
    // Вернём элемент наружу
    return this._element;
  }
  _setEventListeners() {
    this._element.querySelector('.element__like-img').addEventListener('click', () => {
      if(this._likesImg.classList.contains('element__like-img_active')){
        this._handleDeleteLikeCard(this);
      }else{
        this._handleLikeCard(this);
      }
    });//большое изображение
    this._element.querySelector('.element__trash-img').addEventListener('click', () => this._handleDeleteCard(this));
    this._element.querySelector('.element__img').addEventListener('click', () => this._handleImageClick());
    }

  //убрать и поставить лайк
  setLikes(data){
    this._likes = data.likes;//обновляем лайки в реаьном времени 
    this._likesNumber.textContent = this._likes.length;
    this._likesImg.classList.toggle('element__like-img_active');
    }

  //увеличить картинку
  _handleImageClick(){
    this._handleCardClick(this._name, this._link);
  }

  //удалить карточку
  removeCard(){
    this._element.remove();
    this._element = null;
  }

  //айди карточки
  getCardId(){
    return this._data._id;
  }

  _toggleLikeVisibility(){
    if(this._likes.some((user) => this._myId === user._id)){
      this._likesImg.classList.add('element__like-img_active');
    }
  }
  _handleTrashButtonVisibility(){
    if (this._myId !== this._ownerId ){
      this._trashButton.remove();//удаляем картинку корзины
    }
  }

}
