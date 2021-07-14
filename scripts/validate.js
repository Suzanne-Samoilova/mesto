// Формы
// Редактировать профиль

const showInputError = (formElement, inputElement, errorMessage) => {
    console.log(inputElement.name, errorMessage);
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__form-error_active');

};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = '';
    errorElement.classList.remove('popup__form-error_active');
};



const checkInputValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;
    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage);
    } else {
        hideInputError(formElement, inputElement);
    }

};


const setEventListeners = (formElement) => {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
    });
    const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
    inputList.forEach(inputElement =>{
        inputElement.addEventListener('input', (event) => {
            checkInputValidity(formElement, inputElement);
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach(setEventListeners);
};
enableValidation();
