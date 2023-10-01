import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._popupLinkImg = this._popupSelector.querySelector('.popup-img__full');
        this._popupTextImg = this._popupSelector.querySelector('.popup-img__text');
    }
    open(name, link){
        super.open();
        this._popupLinkImg.src = link;
        this._popupLinkImg.alt = name;
        this._popupTextImg.textContent = name;
    }
}