const elementsContainer = document.querySelector('.elements'); //разметка

/**переменные для изображения */
const popupImg = document.querySelector('.popup-img')
const fullImage = document.querySelector('.popup-img__full') 
const fullText = document.querySelector('.popup-img__text')
const closePopupImg = document.querySelector('.popup-img__close-button');

/**Переменные для Edit */
const editButton = document.querySelector('.profile__edit-button')
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const nameInput = document.querySelector('.popup__input_name_edit');
const jobInput = document.querySelector('.popup__input_status_edit');
const popupEdit = document.querySelector('.popup-edit')
const submitPopupEdit = document.querySelector('.popup-edit__form')

/**Переменные для Add */
const popupAdd = document.querySelector('.popup-add')
const addBtn = document.querySelector('.profile__add-button')
const linkImg = document.querySelector('.popup__input_link_add');
const nameImg = document.querySelector('.popup__input_name_add');
const submitPopupAdd = document.querySelector('.popup-add__form')

/** Переменные для закрытия попапа  */
const popupCloseBtn = document.querySelector('.popup__close-button');
const popupCloseBtnEdit = document.querySelector('.popup-edit__close-button');
const popupCloseBtnAdd = document.querySelector('.popup-add__close-button');

/**добавляем карточки на страницу*/
function renderCard(name, link){
  const card = document.getElementById('card-template');
  const cardTemplate = card.content.cloneNode(true);
  const img = cardTemplate.querySelector('.element__img');
  const text = cardTemplate.querySelector('.element__text')
  const like = cardTemplate.querySelector('.element__like-img')
  const element = cardTemplate.querySelector('.element')
  const trash = cardTemplate.querySelector('.element__trash-img')

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

  closePopupImg.addEventListener('click', () => {
    closePopup(popupImg)
  })

  return cardTemplate;
}

/**массив карточек выводится на страницу*/
initialCards.forEach((initialCard) => {
  render = renderCard(initialCard.name, initialCard.link)
  elementsContainer.append(render);
})



/**открыть попап*/
function openPopup(popup){
  popup.classList.add('popup_opened');
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
})

/**статус и имя выводим на страницу*/
function handleFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;
  closePopup(popupEdit);
}

addBtn.addEventListener('click', () => {
  openPopup(popupAdd)
})

popupCloseBtnAdd.addEventListener('click', () => {
  closePopup(popupAdd)
})

popupCloseBtnEdit.addEventListener('click', () => {
  closePopup(popupEdit)
})


/** добавить новую карточку*/
function handleAddSubmit (evt) {
  evt.preventDefault(); 

  const link = linkImg.value;
  const name = nameImg.value;

  const newCard = renderCard(name, link);
  elementsContainer.prepend(newCard, elementsContainer.firstChild)

  evt.target.reset()
  closePopup(popupAdd);
}

submitPopupAdd.addEventListener('submit', handleAddSubmit)
submitPopupEdit.addEventListener('submit', handleFormSubmit)

popupCloseBtn.addEventListener('click', closePopup);
