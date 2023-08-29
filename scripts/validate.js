
/** Функция 'Показать ошибку'*/
const showError = (formElement, inputElement, errorMessage, objectElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);//ищем для каждого input свой span
    inputElement.classList.add(objectElement.inputErrorClass);//добавляем красную линию инпуту
    errorElement.classList.add(objectElement.errorClass);//добавляем span видимость  
    errorElement.textContent = errorMessage;//выводим текст сообщения span
  };
  
/**Функция 'Скрыть ошибку' */
const hideError = (formElement, inputElement, objectElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(objectElement.inputErrorClass);
  errorElement.classList.remove(objectElement.errorClass);
  errorElement.textContent = '';
  };
  
/**Функция 'Проверка валидности'*/
const checkInputValidity = (formElement, inputElement, objectElement) => {
  if (!inputElement.validity.valid) {//если во всех свойсвах validity значения корректны, то valid приобретет значение true
    showError(formElement, inputElement, inputElement.validationMessage, objectElement);//покажем ошибку
  } else {
    hideError(formElement, inputElement, objectElement);//скроем ошибку
  }
  };
  
/**Функция 'Обход массива всех форм' */
const setEventListeners = (formElement, objectElement) => {
  const inputList = Array.from(formElement.querySelectorAll(objectElement.inputSelector));
  const buttonElement = formElement.querySelector(objectElement.submitButtonSelector);
  
  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement, objectElement);
  inputList.forEach((inputElement) => {
    hideError(formElement, inputElement, objectElement);//скрываем ошибку при повторном открытии попапа
    inputElement.addEventListener('input', function () { // каждому полю добавим обработчик события input
      checkInputValidity(formElement, inputElement, objectElement);//проверяем валидность
      toggleButtonState(inputList, buttonElement, objectElement);//
      });
    });
  };
  
/**Функция 'Перебора массива' */
function enableValidation(objectElement){
  const formList = Array.from(document.querySelectorAll(objectElement.formSelector));
  formList.forEach((formElement) => {// Обойдём все элементы полученной коллекции
    formElement.addEventListener('submit', (evt) => { 
      evt.preventDefault();
      });
    setEventListeners(formElement, objectElement);
    });
  }
  
/**Функция обходит массив полей и возвращает true, если в массиве inputList есть хотя бы один невалидный input */ 
function hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  });
  }

/**функция блокировка кнопки "Отправить"*/
function toggleButtonState(inputList, buttonElement, objectElement){
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);//Блокируем кнопку
    buttonElement.classList.add(objectElement.inactiveButtonClass);//декорируем заблокированную кнопку
  } else {
    buttonElement.removeAttribute('disabled');//Разбокаем кнопку
    buttonElement.classList.remove(objectElement.inactiveButtonClass);//удаляем класс
  }
}
  