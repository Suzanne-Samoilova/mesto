import {cards} from "../utils/constants";

export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._itemsArray = items; // массив данных, которые нужно добавить на страницу при инициализации класса
        this._renderer = renderer; // функция, которая отвечает за создание и отрисовку данных на странице

        // this._container = document.querySelector(containerSelector);
        this._container = cards; //  селектор контейнера, в который нужно добавлять созданные элементы

    }


    // принимает DOM-элемент и добавляет его в контейнер
    addItem() {

    }

}
