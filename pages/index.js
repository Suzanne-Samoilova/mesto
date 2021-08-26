import {
    openPopupEditProfile,
    openPopupAddPlace,
    cardRenderer,
    handlerProfileFormSubmit
} from '../utils/utils.js';

import FormValidator from '../components/FormValidator.js';
import Popup from "../components/Popup.js";
import Section from "../components/Section.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from "../components/PopupWithForm.js";

import { config } from '../utils/constants.js';
import { initialCards } from '../scripts/initialCards.js';

// ___________________________________________________________________________________________________________________________

// Экземпляры класса FormValidator
const editProfileFormValidator = new FormValidator(config, document.querySelector('.popup').querySelector('.popup__form'));
const addNewPlaceFormValidator = new FormValidator(config, document.querySelector('.popup_add-card').querySelector('.popup__form'));

// Вызов валидации
editProfileFormValidator.enableValidation();
addNewPlaceFormValidator.enableValidation();

// Экземпляры класса Popup
const popupClassEditProfile = new Popup('.popup');
const PopupClassWithImage = new PopupWithImage('.popup_expand');

// ___________________________________________________________________________________________________________________________

// Обработчик формы, следит за событием “submit” - кнопка "Сохранить" (Ред.профиль)
document
    .querySelector('.popup__form')
    .addEventListener('submit', handlerProfileFormSubmit);

// ___________________________________________________________________________________________________________________________

// Для отрисовки начального массива
export const defaultCardList = new Section({ items: initialCards, renderer: cardRenderer}, '.cards');
// Отрисовка карточек
defaultCardList.renderItems();

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

// Открыть попап по кнопке Добавить (Добавить новое место)
document
    .querySelector('.profile__button-add')
    .addEventListener('click', openPopupAddPlace);

// ___________________________________________________________________________________________________________________________



// Открыть попап по кнопке редактирования (Редактировать профиль)
document
    .querySelector('.profile__button-edit')
    .addEventListener('click', openPopupEditProfile);

// ___________________________________________________________________________________________________________________________

export {
    editProfileFormValidator,
    addNewPlaceFormValidator,
    popupClassEditProfile,
    popupClassAddCard,
    PopupClassWithImage
};
