import {
    inputProfileInfo,
    inputProfileName, popupAddPlace,
    profileInfoElement,
    profileNameElement
} from './constants.js';

import {
    editProfileFormValidator, // addNewPlaceFormValidator,
    // defaultCardList,
    cardRenderer,
    popupClassEditProfile, popupClassAddCard
} from '../pages/index.js';
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import {initialCards} from "../scripts/initialCards.js";

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



