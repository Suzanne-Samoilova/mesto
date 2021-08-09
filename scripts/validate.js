// const config = {
//     formSelector: '.popup__form',
//     inputSelector: '.popup__text',
//     submitButtonSelector: '.popup__button-save',
//     inactiveButtonClass: 'popup__button-save_inactive',
//     inputErrorClass: 'popup__form-error',
//     errorClass: 'popup__form-error_active',
//     errorBorderBottomRed: 'popup__text_invalid'
// };

const formElement = document.querySelector(config.formSelector);
const formInput = formElement.querySelector(config.inputSelector);

// ___________________________________________________________________________________________________________________________

// // Показать ошибку
// const showInputError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add(config.errorBorderBottomRed);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(config.errorClass);
// };

// // Скрыть ошибку
// const hideInputError = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove(config.errorBorderBottomRed);
//     errorElement.classList.remove(config.errorClass);
//     errorElement.textContent = '';
// };

// // Проверка на валидность
// const isValid = (formElement, inputElement) => {
//     if (!inputElement.validity.valid) {
//         showInputError(formElement, inputElement, inputElement.validationMessage);
//     } else {
//         hideInputError(formElement, inputElement);
//     }
// };

formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
});

// Вызвать функцию isValid на каждый ввод символа
formInput.addEventListener('input', isValid);

// Если хоть один не валидный
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    });
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(config.inactiveButtonClass);
    } else {
        buttonElement.classList.remove(config.inactiveButtonClass);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        hideInputError(formElement, inputElement);
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

// ___________________________________________________________________________________________________________________________

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => evt.preventDefault());
        setEventListeners(formElement);
    });
};

