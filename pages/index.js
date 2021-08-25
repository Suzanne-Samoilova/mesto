import { config,
    popupAddPlace
} from '../utils/constants.js';

import {
    openPopupEditProfile,
    handlerProfileFormSubmit,
    // handleFormSubmit
} from '../utils/utils.js';

import FormValidator from '../components/FormValidator.js';
import Popup from "../components/Popup.js";
import Card from '../components/Card.js';
import Section from "../components/Section.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from "../components/PopupWithForm.js";
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
// отрисовка карточек
defaultCardList.renderItems();


const popupClassAddCard = new PopupWithForm({
    popupSelector: '.popup_add-card',
    handleFormSubmit: (item) => {
        const cardData = [{
            name: item.AddNamePlace,
            link: item.AddLinkPlace
        }];
        const newCardSection = new Section({ items: cardData, renderer: cardRenderer}, '.cards');
        newCardSection.renderItems();

    }
});

// // Форма добавления места
// export function handleFormSubmit () {
//     const cardData = {
//         name: popupAddPlace.querySelector('.popup__text_input_name-place').value,
//         link: popupAddPlace.querySelector('.popup__text_input_link').value
//     };
//     const newCardSection = new Section({ items: cardData, renderer: cardRenderer}, '.cards');


//     // defaultCardList.addItem(defaultCardList.renderer(cardData));
//
//     // Все равно создает несколько карточек
//     const newCard = cardRenderer(cardData);
//     document.querySelector('.cards').prepend(newCard);
//
//     // Закрыть после нажатия кнопки "Создать"
//     popupClassAddCard.close();
// }

// Попап Добавить карточки
// Открыть попап добавления места
export const openPopupAddPlace = function () {
    // Очистить поля формы
    document.forms.SubmitAddPlace.reset();
    addNewPlaceFormValidator.clearErrors();
    addNewPlaceFormValidator.toggleButtonState();
    popupClassAddCard.open();
}

document.querySelector('.profile__button-add')
    .addEventListener('click', openPopupAddPlace);

// popupClassAddCard.setEventListeners();





// ___________________________________________________________________________________________________________________________

// Открыть попап по кнопке редактирования/ закрыть по кнопке крестика (Редактировать профиль)
document
    .querySelector('.profile__button-edit')
    .addEventListener('click', openPopupEditProfile);

// ___________________________________________________________________________________________________________________________

export { editProfileFormValidator, addNewPlaceFormValidator,
    popupClassEditProfile, popupClassAddCard, PopupClassWithImage, cardRenderer };
