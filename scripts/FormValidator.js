export { config, FormValidator, formElement, formInput };

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__form-error',
    errorClass: 'popup__form-error_active',
    errorBorderBottomRed: 'popup__text_invalid'
};

const formElement = document.querySelector(config.formSelector);
const formInput = formElement.querySelector(config.inputSelector);

class FormValidator {
    constructor(config, formElement) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._errorBorderBottomRed = config.errorBorderBottomRed;

        this._formElement = formElement;

        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }


    // Показать ошибку
    _showInputError = (formElement, inputElement, errorMessage) => {
        this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._errorBorderBottomRed);
        this._errorElement.textContent = errorMessage;
        this._errorElement.classList.add(this._errorClass);
    };

    // Скрыть ошибку
    _hideInputError = (formElement, inputElement) => {
        this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._errorBorderBottomRed);
        this._errorElement.classList.remove(this._errorClass);
        this._errorElement.textContent = '';
    };

    // Проверка на валидность
    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(this._formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(this._formElement, inputElement);
        }
    };

    // this._formElement.addEventListener('submit', function (evt) {
    //     evt.preventDefault();
    // });

    // // Вызвать функцию isValid на каждый ввод символа
    // formInput.addEventListener('input', _isValid());

    // Если хоть один не валидный
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
        }
    };

    _setEventListeners(formElement) {
        this._toggleButtonState(inputList, buttonElement);
        this._inputList.forEach((inputElement) => {
            this._hideInputError(formElement, inputElement);
            inputElement.addEventListener('input', () => {
                this._isValid(formElement, inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    };

    _enableValidation() {
        const formList = Array.from(document.querySelectorAll(this._formSelector));
        formList.forEach((formElement) => {
            formElement.addEventListener('submit', (evt) => evt.preventDefault());
            this._setEventListeners(formElement);
        });
    };

}

