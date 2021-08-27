export default class FormValidator {
    // _showInputError
    // _hideInputError
    // _isValid
    // _hasInvalidInput
    // toggleButtonState
    // setEventListeners
    // enableValidation
    // clearErrors

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
    _showInputError = (inputElement, errorMessage) => {
        this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._errorBorderBottomRed);
        this._errorElement.classList.add(this._errorClass);
        this._errorElement.textContent = errorMessage;
    };

    // Скрыть ошибку
    _hideInputError = (inputElement) => {
        this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._errorBorderBottomRed);
        this._errorElement.classList.remove(this._errorClass);
        this._errorElement.textContent = '';
    };

    // Проверка на валидность
    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    // Если хоть один не валидный
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    // Переключатель кнопки
    toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    };

    setEventListeners() {
        this.toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this.toggleButtonState();
            });
        });
    };

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => evt.preventDefault());
            this.setEventListeners();
    };

    clearErrors() {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
    };
}
