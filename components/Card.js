import { popupClassExpand } from '../pages/index.js';

export default class Card {
    // _getTemplate
    // generateCard
    // _setEventListeners
    // _addLikeHandler
    // _deleteCard
    // _openPopupExpand

    constructor(data, cardSelector) {
        this._name = data.name;
        this._alt = data.name;
        this._link = data.link;

        this._cardSelector = cardSelector;
    }

    // Клон
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
        // вернём DOM-элемент карточки
        return cardElement;
    }

    generateCard() {
        // Запишем разметку в приватное поле _element. Так у других элементов появится доступ к ней.
        this._element = this._getTemplate();
        // Текст карточки
        this._titleElement = this._element.querySelector('.card__text');
        // Картинка
        this._imageElement = this._element.querySelector('.card__photo');
        // Кнопка лайка
        this._likeButton = this._element.querySelector('.card__button-like');
        // Кнопка удалить
        this._deleteButton = this._element.querySelector('.card__button-delete');

        // Добавить обработчики
        this._setEventListeners();

        // Добавим данные
        this._titleElement.textContent = this._name;
        this._imageElement.alt = this._name;
        this._imageElement.src = this._link;
        // Вернём элемент наружу
        return this._element;
    }

    // Слушалки
    _setEventListeners() {
        // Слушать лайк
        this._likeButton.addEventListener('click',() => {
            this._addLikeHandler();
        });

        // Слушать удалить
        this._deleteButton.addEventListener('click',() => {
            this._deleteCard();
        });

        // Слушать Развернуть изображение
        this._imageElement.addEventListener('click',() => {
            this._openPopupExpand();
        });
    }

    // Переключатель лайка
    _addLikeHandler() {
        this._likeButton.classList.toggle('card__button-like_active');
    }

    // Удаление карточки
    _deleteCard() {
        this._element.remove();
    }

    // Открыть попап разворота
    _openPopupExpand() {
        popupClassExpand.open();
        // Взять название из карточки
        document.querySelector('.popup__name-expand').textContent = this._name;
        // Взять ссылку из карточки
        document.querySelector('.popup__img-expand').src = this._link;
        document.querySelector('.popup__img-expand').alt = this._alt;
    }
}
