export default class Section {
    // renderItems
    // addItem

    constructor({ renderer }, containerSelector) {
        // функция, которая отвечает за создание и отрисовку данных на странице
        this.renderer = renderer;
        //  селектор контейнера, в который нужно добавлять созданные элементы
        this._container = document.querySelector(containerSelector);
    }

    renderItems(cardsData) {
        cardsData.forEach(card => {
            this.renderer(card);
        })
    }

    // принимает DOM-элемент и добавляет его в контейнер
    addItem(card, howAdded = 'prepend') {
        if (howAdded === 'prepend') {
            // карточка идет в начало
            this._container.prepend(card);
        } else {
            // карточка идет в конец
            this._container.append(card);
        }
    }
}
