import {
    inputProfileInfo,
    inputProfileName, popupAddPlace,
    profileInfoElement,
    profileNameElement
} from './constants.js';
import {editProfileFormValidator, addNewPlaceFormValidator,
    defaultCardList,
    popupClassEditProfile, popupClassAddCard } from '../pages/index.js';

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

// Форма добавления места
export function formSubmitPlaceHandler () {
    const cardData = {
        name: popupAddPlace.querySelector('.popup__text_input_name-place').value,
        link: popupAddPlace.querySelector('.popup__text_input_link').value
    };
    defaultCardList.addItem(defaultCardList.renderer(cardData));
    // Закрыть после нажатия кнопки "Создать"
    popupClassAddCard.close();
}
