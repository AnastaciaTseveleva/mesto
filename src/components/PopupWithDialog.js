import { Popup } from "./Popup.js";

export class PopupWithDialog extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._buttonSubmit = document.querySelector('.popup-delete__option');
    }
    open(itemCallback){
        super.open();
        this.itemCallback = itemCallback;
        this._buttonSubmit.addEventListener('click', this.itemCallback)
    }
    close(){
        super.close()
    }
    setEventListeners(){
        super.setEventListeners();
    }
}
