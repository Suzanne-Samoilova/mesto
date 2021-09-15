import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    // loading
    // _submitCallback
    // _getInputValues
    // setEventListeners
    // close

    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._handleFormSubmit = handleFormSubmit;
        this._buttonSubmit = this._form.querySelector('.popup__button-save');
        this._initialValueSubmitButton = this._buttonSubmit.textContent;
    }

    loading(isLoading, initialDownloadMessage = 'Сохранение...') {
        if (isLoading) {
            this._buttonSubmit.textContent = initialDownloadMessage;
        } else {
            this._buttonSubmit.textContent = this._initialValueSubmitButton;
        }
    }

    // Вынесем в отдельную функцию, чтобы потом можно было удалить из слушателя
    _submitCallback(event) {
        event.preventDefault();
        // добавим вызов функции _handleFormSubmit
        // передадим ей объект — результат работы _getInputValues
        this._handleFormSubmit(this._getInputValues());
    }

    // собирает данные всех полей формы
    _getInputValues() {
        this._inputList = Array.from(this._form.querySelectorAll('.popup__text'));
        const data = {};
        this._inputList.forEach(input => {
            data[input.name] = input.value;
        })
        return data;
    }

    // добавлять обработчик клика иконке закрытия (и сабмита формы)
    setEventListeners() {
        super.setEventListeners();
        this._submitCallback = this._submitCallback.bind(this);
        this._form.addEventListener('submit', this._submitCallback);
    }

    close() {
        super.close();
        // сброс формы
        this._form.reset();
        this._form.removeEventListener('submit', this._submitCallback);
    }
}
