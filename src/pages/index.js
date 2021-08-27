import './index.css';

import {
    openPopupEditProfile,
    openPopupAddPlace,
    cardRenderer
} from '../utils/utils.js';

import {
    config,
    profileInfoElement,
    profileNameElement,
    initialCards
} from '../utils/constants.js';

import FormValidator from '../components/FormValidator.js';
import Section from "../components/Section.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

// ___________________________________________________________________________________________________________________________
// Валидация всех форм
// ___________________________________________________________________________________________________________________________

// Экземпляры класса FormValidator
const editProfileFormValidator = new FormValidator(config, document.querySelector('.popup').querySelector('.popup__form'));
const addNewPlaceFormValidator = new FormValidator(config, document.querySelector('.popup_add-card').querySelector('.popup__form'));

// Вызов валидации
editProfileFormValidator.enableValidation();
addNewPlaceFormValidator.enableValidation();


// ___________________________________________________________________________________________________________________________
// Попап с развернутой картинкой
// ___________________________________________________________________________________________________________________________

const PopupClassWithImage = new PopupWithImage('.popup_expand');


// ___________________________________________________________________________________________________________________________
// Добавление нового места
// ___________________________________________________________________________________________________________________________

// Попап Добавить новое место
const popupClassAddCard = new PopupWithForm({
    popupSelector: '.popup_add-card',
    handleFormSubmit: (item) => {
        const cardData = [{
            name: item.AddNamePlace,
            link: item.AddLinkPlace
        }];
        // для отрисовки карточки
        const newCardSection = new Section({ items: cardData, renderer: cardRenderer}, '.cards');
        newCardSection.renderItems();
    }
});

// Открыть попап по кнопке добавления (Добавить новое место)
document
    .querySelector('.profile__button-add')
    .addEventListener('click', openPopupAddPlace);


// ___________________________________________________________________________________________________________________________
// Редактирование профиля
// ___________________________________________________________________________________________________________________________

const user = new UserInfo({ profileNameElement, profileInfoElement });

// Попап Редактировать профиль
const popupClassEditProfile = new PopupWithForm({
    popupSelector: '.popup',
    handleFormSubmit: (data) => {
        // добавить данные инпутов на страницу
        user.setUserInfo(data);
    }
});

// Открыть попап по кнопке редактирования (Редактировать профиль)
document
    .querySelector('.profile__button-edit')
    .addEventListener('click', openPopupEditProfile);


// ___________________________________________________________________________________________________________________________
// Отрисовка начального массива
// ___________________________________________________________________________________________________________________________

export const defaultCardList = new Section({ items: initialCards, renderer: cardRenderer}, '.cards');
// Отрисовка карточек
defaultCardList.renderItems();


// ___________________________________________________________________________________________________________________________

export {
    editProfileFormValidator,
    addNewPlaceFormValidator,
    popupClassEditProfile,
    popupClassAddCard,
    PopupClassWithImage,
    user
};
