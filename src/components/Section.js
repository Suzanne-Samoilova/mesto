export default class Section {
    // renderItems
    // setItem

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
            this.setItem(this.renderer(card));
        });
    }

    // принимает DOM-элемент и добавляет его в контейнер
    setItem(card) {
        // console.log('карточка',card)
        this._container.prepend(card);
    }


    // addItem(card, howAdded) {
    //     if (howAdded) {
    //         // добавленная карточка идет в начало
    //         this._container.prepend(card);
    //     } else {
    //         // изначальный массив карточка идет в конец
    //         this._container.append(card);
    //     }
    // }
}
