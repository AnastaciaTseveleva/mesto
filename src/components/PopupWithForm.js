import { Popup } from "./Popup.js";
/** класс PopupWithForm открывает попапы форм */
export class PopupWithForm extends Popup{
    constructor(popupSelector, submitCallback){
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._form  = this._popupSelector.querySelector('.popup__form');
    }
    //метод _getInputValues собирает данные всех полей формы.
    _getInputValues(){
        this._inputList = this._popupSelector.querySelectorAll('.popup__input');//получаем все элементы формы с классом "popup__input"
        const values = {};//создаем пустой объект values
        this._inputList.forEach(input => {//перебираем все элементы формы. Для каждого элемента формы (input), мы записываем его значение (input.value) в объект values по ключу имени поля (input.name)
            values[input.name] = input.value;
        });
        return values;
    }
    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) =>{
            evt.preventDefault(); 
            this._submitCallback(this._getInputValues());
        })
    }
    close(){
        super.close();
        this._form.reset();
    }
}