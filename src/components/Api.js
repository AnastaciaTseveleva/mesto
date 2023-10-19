export class Api{
    constructor({url, headers}) {
        this._url = url;
        this._headers = headers;
    }
    //Загрузка карточек с сервера
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers,
            method: 'GET',
          })
          .then(response => {
            if (response.ok) {
                return response.json();            
            } else {
                Promise.reject(`Ошибка ${response.status} ${response.statusText}`);
            }
          });
      }
    // Загрузка информации о пользователе с сервера
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
            method: 'GET'
          })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
                Promise.reject(`Ошибка ${response.status} ${response.statusText}`);
            }
          });
      }
    //Редактирование профиля
    updateUserProfile({ name, about }) {
      return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({ name, about })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(`Ошибка ${response.status} ${response.statusText}`);
        }
      });
    }
    // Метод для добавления новой карточки
    addCard({ name, link}) {
      return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({ name, link})
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(`Ошибка ${response.status} ${response.statusText}`);
        }
      });
        
  }
    setLike(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(`Ошибка ${response.status} ${response.statusText}`);
        }
      });
    }
    delLike(cardId){
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(`Ошибка ${response.status} ${response.statusText}`);
        }
      });
    }
    deleteCard(cardId){
      return fetch(`${this._url}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(`Ошибка ${response.status} ${response.statusText}`);
        }
      });
    }
    setAvatar(link){
      return fetch(`${this._url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify( link )
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(`Ошибка ${response.status} ${response.statusText}`);
        }
      });
    }

}
