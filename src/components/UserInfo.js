export class UserInfo{
    constructor({nameSelector, infoSelector}){
        this._nameElement = document.querySelector(nameSelector);
        this._infoElement = document.querySelector(infoSelector);
    }
    getUserInfo(){
        // метод *заносим изначальные данные в попап*
        const name = this._nameElement.textContent;
        const status = this._infoElement.textContent;
        return {name, status};
    }
    setUserInfo({name, status}){
        // метод *статус и имя выводим на страницу*
        this._infoElement.textContent = status;
        this._nameElement.textContent = name;
    }
}