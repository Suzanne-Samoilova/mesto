import {
    config, cards,
    popupProfile, popupAddPlace, popupExpand,
    formAddPlace,formPopupProfile, formNewPlace,
    editProfileForm, addNewPlaceForm, inputProfileName, inputProfileInfo,
    profileNameElement, profileInfoElement, inputNameNewPlace, inputLinkNewPlace,
    buttonOpenPopupProfile, buttonClosePopupProfile,
    buttonOpenPopupAddPlace, buttonClosePopupAddPlace
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import { initialCards } from '../scripts/initialCards.js';
import {
    openPopupEditProfile, closePopupEditProfile, handlerProfileFormSubmit,
    openPopupAddPlace, closePopupAddPlace,
    formSubmitPlaceHandler, closePopupExpand
} from '../utils/utils.js';

// ___________________________________________________________________________________________________________________________

// Экземпляры класса FormValidator
const editProfileFormValidator = new FormValidator(config, editProfileForm);
const addNewPlaceFormValidator = new FormValidator(config, addNewPlaceForm);

// Вызов валидации
editProfileFormValidator.enableValidation();
addNewPlaceFormValidator.enableValidation();

// ___________________________________________________________________________________________________________________________
// Обработчики:
// ___________________________________________________________________________________________________________________________

// Открыть попап по кнопке редактирования/ закрыть по кнопке крестика (Редактировать профиль)
buttonOpenPopupProfile.addEventListener('click', openPopupEditProfile);
buttonClosePopupProfile.addEventListener('click', closePopupEditProfile);
// Обработчик формы, следит за событием “submit” - кнопка "Сохранить" (Ред.профиль)
formPopupProfile.addEventListener('submit', handlerProfileFormSubmit);
// Слушать кнопки добавления места (и закрытия)
buttonOpenPopupAddPlace.addEventListener('click', openPopupAddPlace);
buttonClosePopupAddPlace.addEventListener('click', closePopupAddPlace);
// Обработчик формы, следит за событием “submit” - кнопка "Создать" (Новое место)
formNewPlace.addEventListener('submit', formSubmitPlaceHandler);
// Слушать закрыть попап разворота
popupExpand.querySelector('.popup__button-close-expand').addEventListener('click',() => {
    closePopupExpand();
});

// ___________________________________________________________________________________________________________________________

// function createCard(item) {
//     // Создадим экземпляр карточки
//     const card = new Card(item, '.card-template_type_default');
//     return card.generateCard();
// }

// Развернуть карточки из массива
initialCards.forEach((item) => {
    // Создадим экземпляр карточки
    const card = new Card(item, '.card-template_type_default');
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();

    cards.append(cardElement);
});

// ___________________________________________________________________________________________________________________________

export { editProfileFormValidator, addNewPlaceFormValidator };
