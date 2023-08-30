
/** Функция 'Показать ошибку'*/
const showError = (formElement, inputElement, errorMessage, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);//ищем для каждого input свой span
    inputElement.classList.add(validationConfig.inputErrorClass);//добавляем красную линию инпуту
    errorElement.classList.add(validationConfig.errorClass);//добавляем span видимость  
    errorElement.textContent = errorMessage;//выводим текст сообщения span
  };
  
/**Функция 'Скрыть ошибку' */
const hideError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = '';
  };
  
/**Функция 'Проверка валидности'*/
const checkInputValidity = (formElement, inputElement, validationConfig) => {
  if (!inputElement.validity.valid) {//если во всех свойсвах validity значения корректны, то valid приобретет значение true
    showError(formElement, inputElement, inputElement.validationMessage, validationConfig);//покажем ошибку
  } else {
    hideError(formElement, inputElement, validationConfig);//скроем ошибку
  }
  };
  
/**Функция 'Обход массива всех форм' */
const setEventListeners = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  
  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement, validationConfig);
  inputList.forEach((inputElement) => {
    hideError(formElement, inputElement, validationConfig);//скрываем ошибку при повторном открытии попапа
    inputElement.addEventListener('input', function () { // каждому полю добавим обработчик события input
      checkInputValidity(formElement, inputElement, validationConfig);//проверяем валидность
      toggleButtonState(inputList, buttonElement, validationConfig);//
      });
    });
  };
  
/**Функция 'Перебора массива' */
function enableValidation(validationConfig){
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {// Обойдём все элементы полученной коллекции
    formElement.addEventListener('submit', (evt) => { 
      evt.preventDefault();
      });
    setEventListeners(formElement, validationConfig);
    });
  }
  
/**Функция обходит массив полей и возвращает true, если в массиве inputList есть хотя бы один невалидный input */ 
function hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  });
  }

/**функции блокировки и разблокировки кнопки "Отправить"*/
function toggleButtonState(inputList, buttonElement, validationConfig){
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, validationConfig);
  } else {
    enableButton(buttonElement, validationConfig);
  }
}

const disableButton = (buttonElement, validationConfig) => {
  buttonElement.setAttribute('disabled', true);//Блокируем кнопку
  buttonElement.classList.add(validationConfig.inactiveButtonClass);//декорируем заблокированную кнопку
}

const enableButton = (buttonElement, validationConfig) => {
  buttonElement.removeAttribute('disabled');//Разбокаем кнопку
  buttonElement.classList.remove(validationConfig.inactiveButtonClass);//удаляем класс
}