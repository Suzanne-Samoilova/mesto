import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._handleFormSubmit = handleFormSubmit;
        this._handleEventSubmit = this._handleEventSubmit.bind(this);
    }

    _handleEventSubmit(evt) {
        evt.preventDefault();
        this._handleFormSubmit(this._data);
        this._form.removeEventListener('submit', this._handleEventSubmit);
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleEventSubmit);
    }

    open(data) {
        super.open();
        this._data = data;
    }
}
