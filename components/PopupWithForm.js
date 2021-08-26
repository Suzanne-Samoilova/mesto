import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    // _getInputValues
    // _submitCallback
    // setEventListeners
    // close

    constructor({ popupSelector, handleFormSubmit }) {
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

    // Вынесем в отдельную функцию, чтобы потом можно было удалить из слушателя
    _submitCallback(event) {
        event.preventDefault();
        // добавим вызов функции _handleFormSubmit
        // передадим ей объект — результат работы _getInputValues
        this._handleFormSubmit(this._getInputValues());
        this.close();
    }

    // добавлять обработчик клика иконке закрытия и сабмита формы
    setEventListeners() {
        super.setEventListeners();
        this._submitCallback = this._submitCallback.bind(this)
        this._form.addEventListener('submit', this._submitCallback);
    }

    close() {
        this._form.removeEventListener('submit', this._submitCallback);
        super.close();
        // сброс формы
        this._form.reset();
    }
}

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm
