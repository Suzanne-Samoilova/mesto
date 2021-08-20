import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._link = this._popup.querySelector('.popup__img-expand');
        this._name = this._popup.querySelector('.popup__name-expand');
    }

    // вставлять в попап картинку с src изображения и подписью к картинке
    open(link, name, alt) {
        // Взять ссылку из карточки
        this._link.src = link;
        this._link.alt = alt;
        // Взять название из карточки
        this._name.textContent = name;
        super.open();
    }
}

// // Открыть попап разворота
// _openPopupExpand() {
//     openPopup(popupExpand);
//     // Взять название из карточки
//     namePopupExpand.textContent = this._name;
//     // Взять ссылку из карточки
//     photoPopupExpand.src = this._link;
//     photoPopupExpand.alt = this._name;
// }
