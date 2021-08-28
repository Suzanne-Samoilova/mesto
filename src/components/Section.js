export default class Section {
    // renderItems
    // addItem

    constructor({ items, renderer }, containerSelector) {
        // массив данных, которые нужно добавить (например initialCards)
        this._itemsArray = items;
        // функция, которая отвечает за создание и отрисовку данных на странице
        this.renderer = renderer;
        //  селектор контейнера, в который нужно добавлять созданные элементы
        this._container = document.querySelector(containerSelector);
    }

    // отвечает за отрисовку всех элементов
    // отрисовка каждого отдельного элемента должна осуществляться функцией renderer
    renderItems() {
        this._itemsArray.forEach((card) => {
            this.addItem(this.renderer(card), 'append');
        });
    }

    // принимает DOM-элемент и добавляет его в контейнер
    addItem(card, howAdded = 'prepend') {
        if (howAdded === 'prepend') {
            // добавленная карточка идет в начало
            this._container.prepend(card);
        } else {
            // изначальный массив карточка идет в конец
            this._container.append(card);
        }
    }
}
