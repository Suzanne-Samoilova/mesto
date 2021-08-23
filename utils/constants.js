// ___________________________________________________________________________________________________________________________
// Константы:
// ___________________________________________________________________________________________________________________________

// Попап редактирования профиля
// Весь попап редактирования профиля
export const popupProfile = document.querySelector('.popup');
// Кнопка "Редактировать профиль"
export const buttonOpenPopupProfile = document.querySelector('.profile__button-edit');
// Кнопка "Закрыть попап"
export const buttonClosePopupProfile = popupProfile.querySelector('.popup__button-close');
// Найти имя пользователя "Жак-Ив Кусто" и инфо пользователя "Исследователь океана"
export const profileElement = document.querySelector('.profile');
export const profileNameElement = profileElement.querySelector('.profile__name');
export const profileInfoElement = profileElement.querySelector('.profile__text');
// Найти поле ввода имени и поле ввода информации
export const inputProfileName = popupProfile.querySelector('.popup__text_input_name');
export const inputProfileInfo = popupProfile.querySelector('.popup__text_input_info');
// Находим форму отправки (полей ввода имени и информации) в DOM
export const formPopupProfile = document.querySelector('.popup__form');

// Попап Добавления места
// Кнопка Добавить место
export const buttonOpenPopupAddPlace = document.querySelector('.profile__button-add');
// Попап добавления места
export const popupAddPlace = document.querySelector('.popup_add-card');
// Кнопка Закрыть попап добавления
export const buttonClosePopupAddPlace = popupAddPlace.querySelector('.popup__button-close_add-card');
// Вся форма добавления места
export const formAddPlace = document.forms.SubmitAddPlace;
// Найти поля ввода названия и ссылки в попапе
export const inputNameNewPlace = popupAddPlace.querySelector('.popup__text_input_name-place');
export const inputLinkNewPlace = popupAddPlace.querySelector('.popup__text_input_link');
// Находим форму отправки (полей названия и ссылки) в DOM
export const formNewPlace = document.querySelector('.popup__form_add');

// Попап Открыть изображение
// Сам попап с развернутой картинкой
export const popupExpand = document.querySelector('.popup_expand');
// // Название места на попапе разворота
// export const namePopupExpand = popupExpand.querySelector('.popup__name-expand');
// // Развернутая картинка в попапе
// export const photoPopupExpand = popupExpand.querySelector('.popup__img-expand');

// Для валидации
export const editProfileForm = document.querySelector('.popup').querySelector('.popup__form');
export const addNewPlaceForm = document.querySelector('.popup_add-card').querySelector('.popup__form');

export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__form-error',
    errorClass: 'popup__form-error_active',
    errorBorderBottomRed: 'popup__text_invalid'
};
