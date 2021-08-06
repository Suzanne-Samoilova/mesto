// export const str = 'Я переменная из модуля script-01.js';

import { cards } from './index.js';
import { initialCards } from './initial-сards.js';

class Card {
    constructor(name, link, alt) {
        this._name = name;
        this._photo = link;
        this._alt = alt;
    }

    _getTemplate() {
        // у меня замена cardTemplate = cardElement
        const cardElement = document
            .querySelector('#newcard')
            .content
            .querySelector('.card')
            .cloneNode(true);
        // вернём DOM-элемент карточки
        return cardElement;
    }

    generateCard() {
        // Запишем разметку в приватное поле _element. Так у других элементов появится доступ к ней.
        this._element = this._getTemplate();
        // Добавим данные
        this._element.querySelector('.card__text').textContent = this._name;
        this._element.querySelector('.card__photo').alt = this._alt;
        this._element.querySelector('.card__photo').src = this._photo;
        // Вернём элемент наружу
        return this._element;
    }
}

initialCards.forEach((item) => {
    // Создадим экземпляр карточки
    const card = new Card(item.name, item.link, item.name);
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();

    // Добавляем в DOM
    cards.prepend(cardElement);
});

// const card = new Card();

