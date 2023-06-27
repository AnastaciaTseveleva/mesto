let openPopUp = document.querySelector('.profile__edit-button');
let closePopUp = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup');
let submitBtn = document.querySelector('.popup__save-button');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_status');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status'); 

function openPopup(){
    formElement.classList.add('popup_opened');
    nameInput.value = profileName.innerHTML;
    jobInput.value = profileStatus.innerHTML;
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileStatus.textContent = jobInput.value;
    closePopup();
}

function closePopup (){
    formElement.classList.remove('popup_opened');
}

openPopUp.addEventListener('click', openPopup)
formElement.addEventListener('submit', handleFormSubmit); 
closePopUp.addEventListener('click', closePopup); 





