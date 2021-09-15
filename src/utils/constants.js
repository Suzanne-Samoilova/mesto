// ___________________________________________________________________________________________________________________________
// Константы:
// ___________________________________________________________________________________________________________________________

// Попап редактирования профиля
// Весь попап редактирования профиля
export const popupProfile = document.querySelector('.popup');
// Найти поля ввода имени и информации
export const inputProfileName = popupProfile.querySelector('.popup__text_input_name');
export const inputProfileInfo = popupProfile.querySelector('.popup__text_input_info');

// Весь профиль с данными пользователя
export const profileElement = document.querySelector('.profile');
// Найти на странице имя и инфо пользователя
export const profileNameElement = profileElement.querySelector('.profile__name');
export const profileInfoElement = profileElement.querySelector('.profile__text');

// Найти текущий аватар
export const profileAvatar = document.querySelector('.profile__image');

export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__form-error',
    errorClass: 'popup__form-error_active',
    errorBorderBottomRed: 'popup__text_invalid'
};
