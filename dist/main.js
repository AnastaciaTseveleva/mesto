/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Api: () => (/* binding */ Api)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var url = _ref.url,
      headers = _ref.headers;
    _classCallCheck(this, Api);
    this._url = url;
    this._headers = headers;
  }
  _createClass(Api, [{
    key: "_getResponseData",
    value: function _getResponseData(res) {
      if (!res.ok) {
        return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
      }
      return res.json();
    }
    //Загрузка карточек с сервера
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      var _this = this;
      return fetch("".concat(this._url, "/cards"), {
        headers: this._headers,
        method: 'GET'
      }).then(function (res) {
        return _this._getResponseData(res);
      });
    }
    // Загрузка информации о пользователе с сервера
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      var _this2 = this;
      return fetch("".concat(this._url, "/users/me"), {
        headers: this._headers,
        method: 'GET'
      }).then(function (res) {
        return _this2._getResponseData(res);
      });
    }
    //Редактирование профиля
  }, {
    key: "updateUserProfile",
    value: function updateUserProfile(_ref2) {
      var _this3 = this;
      var name = _ref2.name,
        about = _ref2.about;
      return fetch("".concat(this._url, "/users/me"), {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(function (res) {
        return _this3._getResponseData(res);
      });
    }
    // Метод для добавления новой карточки
  }, {
    key: "addCard",
    value: function addCard(_ref3) {
      var _this4 = this;
      var name = _ref3.name,
        link = _ref3.link;
      return fetch("".concat(this._url, "/cards"), {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(function (res) {
        return _this4._getResponseData(res);
      });
    }
  }, {
    key: "setLike",
    value: function setLike(cardId) {
      var _this5 = this;
      return fetch("".concat(this._url, "/cards/").concat(cardId, "/likes"), {
        method: 'PUT',
        headers: this._headers
      }).then(function (res) {
        return _this5._getResponseData(res);
      });
    }
  }, {
    key: "delLike",
    value: function delLike(cardId) {
      var _this6 = this;
      return fetch("".concat(this._url, "/cards/").concat(cardId, "/likes"), {
        method: 'DELETE',
        headers: this._headers
      }).then(function (res) {
        return _this6._getResponseData(res);
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      var _this7 = this;
      return fetch("".concat(this._url, "/cards/").concat(cardId), {
        method: 'DELETE',
        headers: this._headers
      }).then(function (res) {
        return _this7._getResponseData(res);
      });
    }
  }, {
    key: "setAvatar",
    value: function setAvatar(link) {
      var _this8 = this;
      return fetch("".concat(this._url, "/users/me/avatar"), {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(link)
      }).then(function (res) {
        return _this8._getResponseData(res);
      });
    }
  }]);
  return Api;
}();

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Card = /*#__PURE__*/function () {
  function Card(data, templateSelector, handleCardClick, handleLikeCard, handleDeleteLikeCard, myId, handleDeleteCard) {
    _classCallCheck(this, Card);
    this._data = data;
    this._link = data.link;
    this._name = data.name;
    this._likesNumber = data.likesNumber; //число лайков
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeCard = handleLikeCard;
    this._myId = myId; //мой айди
    this._ownerId = data.owner._id;
    this._trashButton = data.trashButton;
    this._handleDeleteCard = handleDeleteCard;
    this._handleDeleteLikeCard = handleDeleteLikeCard;
    this._likes = data.likes;
    this._handleDeleteCard = handleDeleteCard;
  }
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._templateSelector).content.querySelector('.element') //без него 
      .cloneNode(true);
      return cardElement;
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      // Запишем разметку в приватное поле _element. 
      // Так у других элементов появится доступ к ней.
      this._element = this._getTemplate();
      this._setEventListeners();
      this._elemImg = this._element.querySelector('.element__img');
      this._likesNumber = this._element.querySelector('.element__like-counter');
      this._trashButton = this._element.querySelector('.element__trash-img');
      this._likesImg = this._element.querySelector('.element__like-img');
      this._likesNumber.textContent = this._likes.length; //цифры лайка

      // Добавим данные
      this._elemImg.src = this._link;
      this._elemImg.alt = this._name;
      this._element.querySelector('.element__text').textContent = this._name;
      this._toggleLikeVisibility();
      this._handleTrashButtonVisibility(); //видно ли мусорку
      // Вернём элемент наружу
      return this._element;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._element.querySelector('.element__like-img').addEventListener('click', function () {
        if (_this._likesImg.classList.contains('element__like-img_active')) {
          _this._handleDeleteLikeCard(_this);
        } else {
          _this._handleLikeCard(_this);
        }
      }); //большое изображение
      this._element.querySelector('.element__trash-img').addEventListener('click', function () {
        return _this._handleDeleteCard(_this);
      });
      this._element.querySelector('.element__img').addEventListener('click', function () {
        return _this._handleImageClick();
      });
    }

    //убрать и поставить лайк
  }, {
    key: "setLikes",
    value: function setLikes(data) {
      this._likes = data.likes; //обновляем лайки в реаьном времени 
      this._likesNumber.textContent = this._likes.length;
      this._likesImg.classList.toggle('element__like-img_active');
    }

    //увеличить картинку
  }, {
    key: "_handleImageClick",
    value: function _handleImageClick() {
      this._handleCardClick(this._name, this._link);
    }

    //удалить карточку
  }, {
    key: "removeCard",
    value: function removeCard() {
      this._element.remove();
      this._element = null;
    }

    //айди карточки
  }, {
    key: "getCardId",
    value: function getCardId() {
      return this._data._id;
    }
  }, {
    key: "_toggleLikeVisibility",
    value: function _toggleLikeVisibility() {
      var _this2 = this;
      if (this._likes.some(function (user) {
        return _this2._myId === user._id;
      })) {
        this._likesImg.classList.add('element__like-img_active');
      }
    }
  }, {
    key: "_handleTrashButtonVisibility",
    value: function _handleTrashButtonVisibility() {
      if (this._myId !== this._ownerId) {
        this._trashButton.remove(); //удаляем картинку корзины
      }
    }
  }]);
  return Card;
}();

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormValidator: () => (/* binding */ FormValidator)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(formElement, validationConfig) {
    var _this = this;
    _classCallCheck(this, FormValidator);
    _defineProperty(this, "disableButton", function () {
      _this._buttonElement.setAttribute('disabled', true); //Блокируем кнопку
      _this._buttonElement.classList.add(_this._inactiveButtonClass); //декорируем заблокированную кнопку
    });
    _defineProperty(this, "_enableButton", function () {
      _this._buttonElement.removeAttribute('disabled'); //Разбокаем кнопку
      _this._buttonElement.classList.remove(_this._inactiveButtonClass); //удаляем класс
    });
    /**Функция 'Проверка валидности'*/
    _defineProperty(this, "_checkInputValidity", function (inputElement) {
      if (!inputElement.validity.valid) {
        //если во всех свойсвах validity значения корректны, то valid приобретет значение true
        _this._showError(inputElement, inputElement.validationMessage); //покажем ошибку
      } else {
        _this._hideError(inputElement); //скроем ошибку
      }
    });
    /**Функция 'Показать ошибку' */
    _defineProperty(this, "_showError", function (inputElement, errorMessage) {
      var errorElement = _this._formElement.querySelector(".".concat(inputElement.id, "-error")); //ищем для каждого input свой span
      inputElement.classList.add(_this._inputErrorClass); //добавляем красную линию инпуту
      errorElement.classList.add(_this._errorClass); //добавляем span видимость  
      errorElement.textContent = errorMessage; //выводим текст сообщения span
    });
    /**Функция 'Скрыть ошибку' */
    _defineProperty(this, "_hideError", function (inputElement) {
      var errorElement = _this._formElement.querySelector(".".concat(inputElement.id, "-error"));
      inputElement.classList.remove(_this._inputErrorClass);
      errorElement.classList.remove(_this._errorClass);
      errorElement.textContent = '';
    });
    /**Функция 'Обход массива всех форм' */
    _defineProperty(this, "_setEventListeners", function () {
      _this._toggleButtonState();
      _this._inputList.forEach(function (inputElement) {
        _this._hideError(inputElement);
        inputElement.addEventListener('input', function () {
          _this._checkInputValidity(inputElement);
          _this._toggleButtonState();
        });
      });
    });
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  /**функции блокировки и разблокировки кнопки "Отправить"*/
  _createClass(FormValidator, [{
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this.disableButton();
      } else {
        this._enableButton();
      }
    }

    /**Функция обходит массив полей и возвращает true, если в массиве inputList есть хотя бы один невалидный input */
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners();
    }
  }, {
    key: "hideInputError",
    value: /**Функция сброса ошибки и заблокировать кнопку при повторном открытии формы */
    function hideInputError() {
      var _this2 = this;
      this._toggleButtonState();
      this._inputList.forEach(function (inputElement) {
        _this2._hideError(inputElement);
      });
    }
  }]);
  return FormValidator;
}();

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Popup: () => (/* binding */ Popup)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);
    this._popupSelector = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popupSelector.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popupSelector.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      this._popupSelector.querySelector('.popup__close-button').addEventListener('click', function () {
        _this.close();
      });
      this._popupSelector.addEventListener('mousedown', function (evt) {
        if (evt.target === evt.currentTarget) {
          _this.close();
        }
      });
    }
  }]);
  return Popup;
}();

/***/ }),

/***/ "./src/components/PopupWithDialog.js":
/*!*******************************************!*\
  !*** ./src/components/PopupWithDialog.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopupWithDialog: () => (/* binding */ PopupWithDialog)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithDialog = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithDialog, _Popup);
  var _super = _createSuper(PopupWithDialog);
  function PopupWithDialog(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithDialog);
    _this = _super.call(this, popupSelector);
    _this._buttonSubmit = document.querySelector('.popup-delete__option');
    return _this;
  }
  _createClass(PopupWithDialog, [{
    key: "open",
    value: function open(itemCallback) {
      _get(_getPrototypeOf(PopupWithDialog.prototype), "open", this).call(this);
      this.itemCallback = itemCallback;
      this._buttonSubmit.addEventListener('click', this.itemCallback);
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithDialog.prototype), "close", this).call(this);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      _get(_getPrototypeOf(PopupWithDialog.prototype), "setEventListeners", this).call(this);
    }
  }]);
  return PopupWithDialog;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopupWithForm: () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** класс PopupWithForm открывает попапы форм */
var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(popupSelector, submitCallback) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popupSelector);
    _this._submitCallback = submitCallback;
    _this._form = _this._popupSelector.querySelector('.popup__form');
    return _this;
  }
  //метод _getInputValues собирает данные всех полей формы.
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      this._inputList = this._popupSelector.querySelectorAll('.popup__input'); //получаем все элементы формы с классом "popup__input"
      var values = {}; //создаем пустой объект values
      this._inputList.forEach(function (input) {
        //перебираем все элементы формы. Для каждого элемента формы (input), мы записываем его значение (input.value) в объект values по ключу имени поля (input.name)
        values[input.name] = input.value;
      });
      return values;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this2._submitCallback(_this2._getInputValues());
      });
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      this._form.reset();
    }
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopupWithImage: () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popupSelector);
    _this._popupLinkImg = _this._popupSelector.querySelector('.popup-img__full');
    _this._popupTextImg = _this._popupSelector.querySelector('.popup-img__text');
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(name, link) {
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
      this._popupLinkImg.src = link;
      this._popupLinkImg.alt = name;
      this._popupTextImg.textContent = name;
    }
  }]);
  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Section: () => (/* binding */ Section)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(_ref) {
    var renderer = _ref.renderer,
      containerSelector = _ref.containerSelector;
    _classCallCheck(this, Section);
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }
  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;
      items.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }, {
    key: "appendItem",
    value: function appendItem(item) {
      this._containerSelector.append(item);
    }
  }, {
    key: "prependItem",
    value: function prependItem(item) {
      this._containerSelector.prepend(item);
    }
  }]);
  return Section;
}();

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserInfo: () => (/* binding */ UserInfo)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
      infoSelector = _ref.infoSelector,
      avatarSelector = _ref.avatarSelector;
    _classCallCheck(this, UserInfo);
    this._nameElement = document.querySelector(nameSelector);
    this._infoElement = document.querySelector(infoSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      // метод *заносим изначальные данные в попап*
      var name = this._nameElement.textContent;
      var about = this._infoElement.textContent;
      var avatar = this._avatarElement.src;
      return {
        name: name,
        about: about,
        avatar: avatar
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        about = _ref2.about,
        id = _ref2.id,
        avatar = _ref2.avatar;
      this._nameElement.textContent = name;
      this._infoElement.textContent = about;
      this._id = id;
      console.log(this._id);
      this._avatarElement.src = avatar;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this._id;
    }
  }]);
  return UserInfo;
}();

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleCardClick: () => (/* binding */ handleCardClick),
/* harmony export */   popupLinkImage: () => (/* binding */ popupLinkImage),
/* harmony export */   popupSelectorImage: () => (/* binding */ popupSelectorImage),
/* harmony export */   popupTextImage: () => (/* binding */ popupTextImage)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Api */ "./src/components/Api.js");
/* harmony import */ var _components_PopupWithDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PopupWithDialog */ "./src/components/PopupWithDialog.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









/**Переменные для Edit */
var popupProfileOpenButton = document.querySelector('.profile__edit-button');
var nameInput = document.querySelector('.popup__input_name_edit');
var jobInput = document.querySelector('.popup__input_status_edit');
var formPopupEdit = document.querySelector('.popup-edit__form');
var buttonSaveProfile = document.querySelector('.popup__save-button_edit');
/**Переменные для Add */
var popupNewImageButton = document.querySelector('.profile__add-button');
var formPopupAdd = document.querySelector('.popup-add__form');
var buttonSaveNewImage = document.querySelector('.popup__save-button_add');

/**переменные для изображения */
var popupSelectorImage = document.querySelector('.popup-img');
var popupLinkImage = document.querySelector('.popup-img__full');
var popupTextImage = document.querySelector('.popup-img__text');

/**переменные для авы*/
var popupNewAvatarButton = document.querySelector('.profile__avatar');
var formPopupAvatar = document.querySelector('.popup-avatar__form');
var buttonSaveAvatar = document.querySelector('.popup-avatar__save-button');
var api = new _components_Api__WEBPACK_IMPORTED_MODULE_7__.Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-77',
  headers: {
    authorization: '541229d3-61b8-44d0-8441-0c3c4441404d',
    'Content-Type': 'application/json'
  }
});
var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_3__.Section({
  renderer: createCard,
  containerSelector: '.elements'
});
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__.UserInfo({
  nameSelector: '.profile__name',
  infoSelector: '.profile__status',
  avatarSelector: '.profile__avatar'
});
Promise.all([api.getInitialCards(), api.getUserInfo()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    cards = _ref2[0],
    userInfoData = _ref2[1];
  cardList.renderItems(cards);
  userInfo.setUserInfo({
    name: userInfoData.name,
    about: userInfoData.about,
    id: userInfoData._id,
    avatar: userInfoData.avatar
  });
}).catch(function (err) {
  console.log(err);
});

/**Отредактированные данные профиля сохраняются на сервере */
var popupUserInfo = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__.PopupWithForm('.popup-edit', function (formData) {
  buttonSaveProfile.textContent = 'Сохранение...';
  api.updateUserProfile({
    name: formData.name,
    about: formData.status
  }) //обязательно status 
  .then(function (userInfoUpdate) {
    userInfo.setUserInfo({
      name: userInfoUpdate.name,
      about: userInfoUpdate.about,
      id: userInfoUpdate._id,
      avatar: userInfoUpdate.avatar
    });
    popupUserInfo.close();
  }).catch(function (err) {
    console.log(err);
  }).finally(function () {
    buttonSaveProfile.textContent = "Сохранить";
  });
});

//отвечает за то что в поппапе выводится инфа о человеке
popupProfileOpenButton.addEventListener('click', function () {
  editForm.hideInputError();
  popupUserInfo.open();
  var updatedData = userInfo.getUserInfo();
  nameInput.value = updatedData.name;
  jobInput.value = updatedData.about;
});

/** Новая картинка сохраняется на сервере*/
var popupNewCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__.PopupWithForm('.popup-add', function (formData) {
  buttonSaveNewImage.textContent = 'Сохранение...';
  api.addCard({
    name: formData.caption,
    link: formData.link
  }).then(function (cardUpdate) {
    var card = createCard(cardUpdate);
    cardList.prependItem(card);
    popupNewCard.close();
  }).catch(function (err) {
    console.log(err);
  }).finally(function () {
    buttonSaveNewImage.textContent = "Сохранить";
  });
});

//добавляем авку
var popupNewAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__.PopupWithForm('.popup-avatar', function (formData) {
  buttonSaveAvatar.textContent = 'Сохранение...';
  api.setAvatar({
    avatar: formData.avatar
  }).then(function (updateAvatar) {
    userInfo.setUserInfo({
      name: updateAvatar.name,
      about: updateAvatar.about,
      id: updateAvatar._id,
      avatar: updateAvatar.avatar
    }); //инфа обновляется в реальном времени 
    popupNewAvatar.close();
  }).catch(function (err) {
    console.log(err);
  }).finally(function () {
    buttonSaveAvatar.textContent = "Сохранить";
  });
});
popupNewAvatar.setEventListeners();
popupNewAvatarButton.addEventListener('click', function () {
  popupNewAvatar.open();
  avatarForm.hideInputError();
});

/**Функция создает новую карточку и отдает ее функции generateCard */
function createCard(card) {
  // Создадим экземпляр карточки
  var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__.Card(card, '.element__template', handleCardClick, handleLikeCard, handleDeleteLikeCard, userInfo.getId(), handleDeleteCard);
  //возвращваем экземпляр карточки в generateCard
  var cardElement = newCard.generateCard();
  cardList.appendItem(cardElement);
  return cardElement;
}

//удаляем карточку
var popupWithDialog = new _components_PopupWithDialog__WEBPACK_IMPORTED_MODULE_8__.PopupWithDialog('.popup-delete');
function handleDeleteCard(card) {
  popupWithDialog.open(function () {
    api.deleteCard(card.getCardId()).then(function () {
      card.removeCard();
      popupWithDialog.close();
    }).catch(function (err) {
      console.log(err);
    });
  });
}
//открыть изображение
var popupImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__.PopupWithImage('.popup-img');
function handleCardClick(name, link) {
  popupImage.open(name, link);
}
;
//количество лайков
function handleLikeCard(card) {
  api.setLike(card.getCardId()).then(function (res) {
    card.setLikes(res);
  }).catch(function (err) {
    console.log(err);
  });
}
//убираем лайк
function handleDeleteLikeCard(card) {
  api.delLike(card.getCardId()).then(function (res) {
    card.setLikes(res);
  }).catch(function (err) {
    console.log(err);
  });
}
popupNewImageButton.addEventListener('click', function () {
  addForm.hideInputError();
  popupNewCard.open();
});
popupUserInfo.setEventListeners();
popupNewCard.setEventListeners();
popupImage.setEventListeners();
popupWithDialog.setEventListeners();
var validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};
var editForm = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.FormValidator(formPopupEdit, validationConfig);
editForm.enableValidation();
var addForm = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.FormValidator(formPopupAdd, validationConfig);
addForm.enableValidation();
var avatarForm = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.FormValidator(formPopupAvatar, validationConfig);
avatarForm.enableValidation();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map