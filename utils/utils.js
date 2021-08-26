import {
    inputProfileInfo,
    inputProfileName,
    profileInfoElement,
    profileNameElement
} from './constants.js';

import {
    editProfileFormValidator,
    popupClassEditProfile,
    popupClassAddCard,
    addNewPlaceFormValidator,
    PopupClassWithImage
} from '../pages/index.js';

import Card from "../components/Card.js";

// ___________________________________________________________________________________________________________________________
// Функции:
// ___________________________________________________________________________________________________________________________

// Попап "Редактировать профиль"

// Открыть попап редактирования
export function openPopupEditProfile() {
    // Значение полей ввода взято со страницы
    inputProfileName.value = profileNameElement.textContent;
    inputProfileInfo.value = profileInfoElement.textContent;
    editProfileFormValidator.clearErrors();
    editProfileFormValidator.toggleButtonState();
    popupClassEditProfile.open();
}

// Обработчик «отправки» формы (пока никуда отправляться не будет)
export function handlerProfileFormSubmit () {
    profileNameElement.textContent = inputProfileName.value;
    profileInfoElement.textContent = inputProfileInfo.value;
    popupClassEditProfile.close();
}

// ___________________________________________________________________________________________________________________________

// Попап Добавить карточки

// Открыть попап добавления места
export const openPopupAddPlace = function () {
    // Очистить поля формы
    document.forms.SubmitAddPlace.reset();
    addNewPlaceFormValidator.clearErrors();
    addNewPlaceFormValidator.toggleButtonState();
    popupClassAddCard.open();
}

// ___________________________________________________________________________________________________________________________

// Создать экземпляр класса Card и сгенерировать карточку
/**
 * return html-element
 * @param {object} card - test comment
 * @return {html-element} - test comment */

export function cardRenderer(cardData) {
    // Создадим экземпляр карточки
    const newCard = new Card(cardData, '.card-template_type_default',(data) => {
        PopupClassWithImage.open(data);
    });
    return newCard.generateCard();
}
