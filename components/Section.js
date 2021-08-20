import {cards} from "../utils/constants";
import {initialCards} from "../scripts/initialCards";
import {createCard} from "../pages/index.js";

export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._itemsArray = items; // массив данных, которые нужно добавить на страницу при инициализации класса (initialCards)
        this._renderer = renderer; // функция, которая отвечает за создание и отрисовку данных на странице

        // this._container = document.querySelector(containerSelector);
        this._container = cards; //  селектор контейнера, в который нужно добавлять созданные элементы

    }

    // принимает DOM-элемент и добавляет его в контейнер
    addItem(DOM_element) {
        this._container.append(DOM_element);
    }

    // отвечает за отрисовку всех элементов
    // Отрисовка каждого отдельного элемента должна осуществляться функцией renderer
    renderItems() {
        initialCards.forEach((card) => {
            this.addItem(createCard(card));
        });
    }

}
