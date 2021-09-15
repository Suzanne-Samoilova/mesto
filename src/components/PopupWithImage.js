import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    // open

    constructor(popupSelector) {
        super(popupSelector);
        this._name = this._popup.querySelector('.popup__name-expand');
        this._link = this._popup.querySelector('.popup__img-expand');
    }

    // вставлять в попап картинку с src изображения и названием
    open(data) {
        super.open();
        // Взять название из карточки
        this._name.textContent = data.name;
        // Взять ссылку из карточки
        this._link.src = data.link;
        this._link.alt = data.name;
    }
}
