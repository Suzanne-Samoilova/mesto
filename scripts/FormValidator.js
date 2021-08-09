// export const str = 'Я переменная из модуля script-01.js';
// import { str, myFunc } from './script-01.js';

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




}