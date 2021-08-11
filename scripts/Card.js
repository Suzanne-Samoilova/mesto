import { openPopup, closePopup, popupExpand, namePopupExpand, photoPopupExpand } from './index.js';

export { Card };

class Card {
    // _getTemplate
    // generateCard
    // _setEventListeners
    // _addLikeHandler
    // _deleteCard
    // _openPopupExpand
    // _closePopupExpand

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
        // Добавить обработчики
        this._setEventListeners();
        // Добавим данные
        this._element.querySelector('.card__text').textContent = this._name;
        this._element.querySelector('.card__photo').alt = this._name;
        this._element.querySelector('.card__photo').src = this._link;
        // Вернём элемент наружу
        return this._element;
    }

    // Слушалки
    _setEventListeners() {
        // Слушать лайк
        this._element.querySelector('.card__button-like').addEventListener('click',() => {
            this._addLikeHandler();
        });

        // Слушать удалить
        this._element.querySelector('.card__button-delete').addEventListener('click',() => {
            this._deleteCard();
        });

        // Слушать Развернуть изображение
        this._element.querySelector('.card__photo').addEventListener('click',() => {
            this._openPopupExpand();
        });

        // Слушать закрыть попап разворота
        popupExpand.querySelector('.popup__button-close-expand').addEventListener('click',() => {
            this._closePopupExpand();
        });
    }

    // Переключатель лайка
    _addLikeHandler() {
        this._element.querySelector('.card__button-like').classList.toggle('card__button-like_active');
    }

    // Удаление карточки
    _deleteCard() {
        this._element.querySelector('.card__button-delete').closest('.card').remove();
    }

    // Открыть попап разворота
    _openPopupExpand() {
        openPopup(popupExpand);
        // Взять название из карточки
        namePopupExpand.textContent = this._name;
        // console.log(namePopupExpand.textContent);
        // Взять ссылку из карточки
        photoPopupExpand.src = this._link;
        photoPopupExpand.alt = this._name;
    }

    // Закрыть попап разворота
    _closePopupExpand() {
        closePopup(popupExpand);
    }
}
