import {
    config, popupExpand,
    formPopupProfile, formNewPlace,
    editProfileForm, addNewPlaceForm,
    buttonOpenPopupProfile, buttonClosePopupProfile,
    buttonOpenPopupAddPlace, buttonClosePopupAddPlace
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import { initialCards } from '../scripts/initialCards.js';
import {
    openPopupEditProfile, handlerProfileFormSubmit,
    formSubmitPlaceHandler, openPopupAddPlace
} from '../utils/utils.js';
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
// ___________________________________________________________________________________________________________________________

// Экземпляры класса FormValidator
const editProfileFormValidator = new FormValidator(config, editProfileForm);
const addNewPlaceFormValidator = new FormValidator(config, addNewPlaceForm);

// Вызов валидации
editProfileFormValidator.enableValidation();
addNewPlaceFormValidator.enableValidation();



// Экземпляры класса Popup
const popupClassEditProfile = new Popup('.popup');
const popupClassAddCard = new Popup('.popup_add-card');
const popupClassExpand = new Popup('.popup_expand');

// ___________________________________________________________________________________________________________________________
// Обработчики:
// ___________________________________________________________________________________________________________________________

buttonClosePopupProfile.addEventListener('click', popupClassEditProfile.close);
// Обработчик формы, следит за событием “submit” - кнопка "Сохранить" (Ред.профиль)
formPopupProfile.addEventListener('submit', handlerProfileFormSubmit);
// Слушать кнопки добавления места (и закрытия)
buttonOpenPopupAddPlace.addEventListener('click', openPopupAddPlace);
buttonClosePopupAddPlace.addEventListener('click', popupClassAddCard.close);
// Обработчик формы, следит за событием “submit” - кнопка "Создать" (Новое место)
formNewPlace.addEventListener('submit', formSubmitPlaceHandler);
// Слушать закрыть попап разворота
popupExpand.querySelector('.popup__button-close-expand').addEventListener('click',() => {
    popupClassExpand.close();
});

// ___________________________________________________________________________________________________________________________

// Создать экземпляр класса и сгенерировать карточку
/**
 * return html-element
 * @param {object} card - test comment
 * @return {html-element} - test comment */
function cardRenderer(cardData) {
    // Создадим экземпляр карточки
    const newCard = new Card(cardData, '.card-template_type_default');
    return newCard.generateCard();
}

export const defaultCardList = new Section({ items: initialCards, renderer: cardRenderer}, '.cards');
defaultCardList.renderItems();

// ___________________________________________________________________________________________________________________________

// Открыть попап по кнопке редактирования/ закрыть по кнопке крестика (Редактировать профиль)
buttonOpenPopupProfile.addEventListener('click', openPopupEditProfile);

// ___________________________________________________________________________________________________________________________

export { editProfileFormValidator, addNewPlaceFormValidator, popupClassEditProfile, popupClassAddCard, popupClassExpand };
