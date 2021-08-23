// ___________________________________________________________________________________________________________________________
// Константы:
// ___________________________________________________________________________________________________________________________

// Попап редактирования профиля
// Весь попап редактирования профиля
export const popupProfile = document.querySelector('.popup');
// Найти имя пользователя "Жак-Ив Кусто" и инфо пользователя "Исследователь океана"
export const profileElement = document.querySelector('.profile');
export const profileNameElement = profileElement.querySelector('.profile__name');
export const profileInfoElement = profileElement.querySelector('.profile__text');
// Найти поле ввода имени и поле ввода информации
export const inputProfileName = popupProfile.querySelector('.popup__text_input_name');
export const inputProfileInfo = popupProfile.querySelector('.popup__text_input_info');

// Попап добавления места
export const popupAddPlace = document.querySelector('.popup_add-card');

export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__form-error',
    errorClass: 'popup__form-error_active',
    errorBorderBottomRed: 'popup__text_invalid'
};
