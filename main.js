let openPopUp = document.querySelector('#openPopup');
let closePopUp = document.querySelector('#closePopup');
let formElement = document.querySelector('#popup');
let submitBtn = document.querySelector('.popup__save-button');
document.querySelector('.popup__save-button').onclick = handleFormSubmit;
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    let nameInput = document.querySelector('#nameInput').value;
    let jobInput = document.querySelector('#jobInput').value;
    document.querySelector('.profile__name').textContent = nameInput;
    document.querySelector('.profile__status').textContent = jobInput;
}
formElement.addEventListener('submit', handleFormSubmit); 

openPopUp.addEventListener('click', function(){
    formElement.classList.add('active');
})
closePopUp.addEventListener('click',() => {
   formElement.classList.remove('active');
})
submitBtn.addEventListener('click',() => {
   formElement.classList.remove('active');
})


