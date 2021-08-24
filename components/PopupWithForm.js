import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    // ренейм formSubmitPlaceHandler = handleFormSubmit
    constructor(popupSelector, handleFormSubmit ) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
    }

    // собирает данные всех полей формы
    _getInputValues() {
        this._inputList = Array.from(this._form.querySelectorAll('.popup__text'));
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        })
        return this._formValues;
    }

    // должен добавлять обработчик клика иконке закрытия
    // и добавлять обработчик сабмита формы
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    close() {
        super.close();
        // сброс формы
        this._form.reset();
    }

    // Для каждого попапа создавайте свой экземпляр класса PopupWithForm
}
