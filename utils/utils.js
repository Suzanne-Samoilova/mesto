import {
    formAddPlace, inputLinkNewPlace, inputNameNewPlace,
    inputProfileInfo,
    inputProfileName, popupAddPlace, popupExpand,
    popupProfile,
    profileInfoElement,
    profileNameElement
} from './constants.js';
import {editProfileFormValidator, addNewPlaceFormValidator, defaultCardList } from '../pages/index.js';

// ___________________________________________________________________________________________________________________________
// Функции:
// ___________________________________________________________________________________________________________________________

// Открыть попап
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('click', closePopupByClickOnOverlay);
    document.addEventListener('keydown', closePopupByClickOnEsc);
}

// Закрыть попап
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('click', closePopupByClickOnOverlay);
    document.removeEventListener('keydown', closePopupByClickOnEsc);
}

// ___________________________________________________________________________________________________________________________

// Попап "Редактировать профиль"
// Открыть попап редактирования
export function openPopupEditProfile() {
    // Значение полей ввода взято со страницы
    inputProfileName.value = profileNameElement.textContent;
    inputProfileInfo.value = profileInfoElement.textContent;
    editProfileFormValidator.clearErrors();
    editProfileFormValidator.toggleButtonState();
    openPopup(popupProfile);
}

// Закрыть попап редактирования
export const closePopupEditProfile = function () {
    closePopup(popupProfile);
}

// Обработчик «отправки» формы (пока никуда отправляться не будет)
export function handlerProfileFormSubmit () {
    profileNameElement.textContent = inputProfileName.value;
    profileInfoElement.textContent = inputProfileInfo.value;
    closePopup(popupProfile);
}

// ___________________________________________________________________________________________________________________________

// Попап Добавить карточки
// Открыть попап добавления места
export const openPopupAddPlace = function () {
    // Очистить поля формы
    formAddPlace.reset();
    addNewPlaceFormValidator.clearErrors();
    addNewPlaceFormValidator.toggleButtonState();
    openPopup(popupAddPlace);
}

// Закрыть попап добавления места
export const closePopupAddPlace = function () {
    closePopup(popupAddPlace);
}

// Форма добавления места
export function formSubmitPlaceHandler () {
    const cardData = {
        name: inputNameNewPlace.value,
        link: inputLinkNewPlace.value
    };
    defaultCardList.addItem(defaultCardList.renderer(cardData));
    // Закрыть после нажатия кнопки "Создать"
    closePopupAddPlace();
}

// ___________________________________________________________________________________________________________________________

// Закрыть попап разворота
export const closePopupExpand = function () {
    closePopup(popupExpand)
}

// Закрыть на затемненную область
export function closePopupByClickOnOverlay(event) {
    if (event.target.classList.contains('popup')) {
        closePopup(document.querySelector('.popup_opened'));
    }
}

// Закрыть на Esc
export function closePopupByClickOnEsc(event) {
    if (event.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'));
    }
}
