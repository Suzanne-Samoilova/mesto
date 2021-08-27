// ___________________________________________________________________________________________________________________________
// Функции:
// ___________________________________________________________________________________________________________________________

import {
    inputProfileInfo,
    inputProfileName
} from './constants.js';

import {
    editProfileFormValidator,
    popupClassEditProfile,
    popupClassAddCard,
    addNewPlaceFormValidator,
    PopupClassWithImage,
    user
} from '../pages';

import Card from '../components/Card.js';


// ___________________________________________________________________________________________________________________________
// Попап "Редактировать профиль"
// ___________________________________________________________________________________________________________________________

// Открыть попап редактирования
export function openPopupEditProfile() {
    editProfileFormValidator.clearErrors();
    editProfileFormValidator.toggleButtonState();

    // Взять данные со страницы при открытии попапа
    const dataUser = user.getUserInfo();
    inputProfileName.value = dataUser.name;
    inputProfileInfo.value = dataUser.info;

    popupClassEditProfile.open();
}


// ___________________________________________________________________________________________________________________________
// Попап "Добавить карточки"
// ___________________________________________________________________________________________________________________________

// Открыть попап добавления места
export const openPopupAddPlace = function () {
    // Очистить поля формы
    document.forms.SubmitAddPlace.reset();
    addNewPlaceFormValidator.clearErrors();
    addNewPlaceFormValidator.toggleButtonState();
    popupClassAddCard.open();
}


// ___________________________________________________________________________________________________________________________
// Карточки
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
