export class UserInfo{
    constructor({nameSelector, infoSelector, avatarSelector}){
        this._nameElement = document.querySelector(nameSelector);
        this._infoElement = document.querySelector(infoSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }
    getUserInfo(){
        // метод *заносим изначальные данные в попап*
        const name = this._nameElement.textContent;
        const about = this._infoElement.textContent;
        const avatar = this._avatarElement.src;
        return {name, about, avatar};
    }
    setUserInfo({name, about, id, avatar}){
        this._nameElement.textContent = name;
        this._infoElement.textContent = about;
        this._id = id;
        console.log(this._id)
        this._avatarElement.src = avatar;
    }
    getId() {
        return this._id;
      }
}