import { Popup } from "./Popup.js";

export class PopupWithDialog extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._buttonSubmit = document.querySelector('.popup-delete__option');
    }
    open(cardCallback){
        super.open();
        this.cardCallback = cardCallback;
        this._buttonSubmit.addEventListener('click', this.cardCallback)
    }
    close(){
        super.close()
    }
    setEventListeners(){
        super.setEventListeners();
    }
}
