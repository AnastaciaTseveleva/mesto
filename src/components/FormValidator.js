export class FormValidator{
  constructor(formElement, validationConfig){
    this._inputSelector = validationConfig.inputSelector
    this._submitButtonSelector = validationConfig.submitButtonSelector
    this._inactiveButtonClass = validationConfig.inactiveButtonClass
    this._inputErrorClass = validationConfig.inputErrorClass
    this._errorClass = validationConfig.errorClass
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

/**функции блокировки и разблокировки кнопки "Отправить"*/
  _toggleButtonState(){
    if (this._hasInvalidInput()) {
      this.disableButton();
    } else {
      this._enableButton();
    }
  }

/**Функция обходит массив полей и возвращает true, если в массиве inputList есть хотя бы один невалидный input */ 
  _hasInvalidInput(){
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  disableButton = () => {
    this._buttonElement.setAttribute('disabled', true);//Блокируем кнопку
    this._buttonElement.classList.add(this._inactiveButtonClass);//декорируем заблокированную кнопку
  }
  _enableButton = () => {
    this._buttonElement.removeAttribute('disabled');//Разбокаем кнопку
    this._buttonElement.classList.remove(this._inactiveButtonClass);//удаляем класс
  }

/**Функция 'Проверка валидности'*/
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {//если во всех свойсвах validity значения корректны, то valid приобретет значение true
      this._showError(inputElement, inputElement.validationMessage);//покажем ошибку
    } else {
      this._hideError(inputElement);//скроем ошибку
    }
  };
  /**Функция 'Показать ошибку' */
  _showError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);//ищем для каждого input свой span
    inputElement.classList.add(this._inputErrorClass);//добавляем красную линию инпуту
    errorElement.classList.add(this._errorClass);//добавляем span видимость  
    errorElement.textContent = errorMessage;//выводим текст сообщения span
  };
      
  /**Функция 'Скрыть ошибку' */
  _hideError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };
  
  enableValidation(){
    this._setEventListeners();
  }

/**Функция 'Обход массива всех форм' */
  _setEventListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
    })
  }

  /**Функция сброса ошибки и заблокировать кнопку при повторном открытии формы */
  hideInputError(){
    this._toggleButtonState();
    
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    })
  }
}

