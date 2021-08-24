export default class Section {
    // addItem
    // renderItems

    constructor({ items, renderer }, containerSelector) {
        // массив данных, которые нужно добавить (initialCards)
        this._itemsArray = items;
        // функция, которая отвечает за создание и отрисовку данных на странице
        this.renderer = renderer;
        //  селектор контейнера, в который нужно добавлять созданные элементы
        this._container = document.querySelector(containerSelector);
    }

    // принимает DOM-элемент и добавляет его в контейнер
    addItem(card) {
        // console.log('карточка',card)
        this._container.prepend(card);
    }

    // отвечает за отрисовку всех элементов
    // Отрисовка каждого отдельного элемента должна осуществляться функцией renderer
    renderItems() {
        this._itemsArray.forEach((card) => {
            this.addItem(this.renderer(card));
        });
    }
}

