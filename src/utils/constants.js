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

export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__form-error',
    errorClass: 'popup__form-error_active',
    errorBorderBottomRed: 'popup__text_invalid'
};

// Массив изображений
export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Цветы',
        link: 'https://images.unsplash.com/photo-1619981584847-25f9e3eb35e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
