export class Popup{
    constructor(popupSelector){
        this._popupSelector= document.querySelector(popupSelector);
    }
    open(){
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this.__handleEscClose);
    }
    close(){
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this.__handleEscClose);
    }
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
          }
    }
    setEventListeners(){
        this._popupSelector.querySelector('.popup__close-button').addEventListener('click', () => {
            this.close();
        });
        this._popupSelector.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
              }
        });
    }
}