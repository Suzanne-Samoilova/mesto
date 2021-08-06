// export const str = 'Я переменная из модуля script-01.js';

import { cards } from './index.js';
import { initialCards } from './initial-сards.js';

class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        // у меня замена cardTemplate = cardElement
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

    // Метод слушателей событий
    _setEventListeners() {
        // Слушать лайк
        this._element.querySelector('.card__button-like').addEventListener('click',() => {
            this._addLikeHandler();
        });
        // Слушать удалить
        this._element.querySelector('.card__button-delete').addEventListener('click',() => {
            this._deleteCard();
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


}

initialCards.forEach((item) => {
    // Создадим экземпляр карточки
    const card = new Card(item, '.card-template_type_default');
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();
    cards.prepend(cardElement);
});

