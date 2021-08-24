import {
    config,
    popupProfile, popupAddPlace
} from '../utils/constants.js';

import {
    openPopupEditProfile, handlerProfileFormSubmit,
    handleFormSubmit, openPopupAddPlace
} from '../utils/utils.js';

import FormValidator from '../components/FormValidator.js';
import Popup from "../components/Popup.js";
import Card from '../components/Card.js';
import Section from "../components/Section.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWIthForm from '../components/PopupWithForm.js';
import { initialCards } from '../scripts/initialCards.js';
import PopupWithForm from "../components/PopupWithForm.js";

// ___________________________________________________________________________________________________________________________

// Экземпляры класса FormValidator
const editProfileFormValidator = new FormValidator(config, document.querySelector('.popup').querySelector('.popup__form'));
const addNewPlaceFormValidator = new FormValidator(config, document.querySelector('.popup_add-card').querySelector('.popup__form'));

// Вызов валидации
editProfileFormValidator.enableValidation();
addNewPlaceFormValidator.enableValidation();

// Экземпляры класса Popup
const popupClassEditProfile = new PopupWithForm('.popup', handleFormSubmit);
const popupClassAddCard = new Popup('.popup_add-card');
const PopupClassWithImage = new PopupWithImage('.popup_expand');

// ___________________________________________________________________________________________________________________________








popupProfile
    .querySelector('.popup__button-close')
    .addEventListener('click', () => {
    popupClassEditProfile.close();
});

// Обработчик формы, следит за событием “submit” - кнопка "Сохранить" (Ред.профиль)
document
    .querySelector('.popup__form')
    .addEventListener('submit', handlerProfileFormSubmit);

// Слушать кнопки добавления места (и закрытия)
document
    .querySelector('.profile__button-add')
    .addEventListener('click', openPopupAddPlace);

popupAddPlace.
querySelector('.popup__button-close_add-card')
    .addEventListener('click', () => {
    popupClassAddCard.close();
});

// Обработчик формы, следит за событием “submit” - кнопка "Создать" (Новое место)
document
    .querySelector('.popup__form_add')
    .addEventListener('submit', handleFormSubmit);

// ___________________________________________________________________________________________________________________________

// Создать экземпляр класса и сгенерировать карточку
/**
 * return html-element
 * @param {object} card - test comment
 * @return {html-element} - test comment */
function cardRenderer(cardData) {
    // Создадим экземпляр карточки
    const newCard = new Card(cardData, '.card-template_type_default',(data) => {
        PopupClassWithImage.open(data);
    });
    return newCard.generateCard();
}

export const defaultCardList = new Section({ items: initialCards, renderer: cardRenderer}, '.cards');
defaultCardList.renderItems();

// ___________________________________________________________________________________________________________________________

// Открыть попап по кнопке редактирования/ закрыть по кнопке крестика (Редактировать профиль)
document
    .querySelector('.profile__button-edit')
    .addEventListener('click', openPopupEditProfile);

// ___________________________________________________________________________________________________________________________

export { editProfileFormValidator, addNewPlaceFormValidator, popupClassEditProfile, popupClassAddCard, PopupClassWithImage };
