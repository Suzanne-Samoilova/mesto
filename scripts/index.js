import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards } from './initialCards.js';

export { openPopup, closePopup, popupExpand, namePopupExpand, photoPopupExpand };

// ___________________________________________________________________________________________________________________________
// Константы:
// ___________________________________________________________________________________________________________________________

// Попап редактирования профиля
// Весь попап редактирования профиля
const popupProfile = document.querySelector('.popup');
// Кнопка "Редактировать профиль"
const buttonOpenPopupProfile = document.querySelector('.profile__button-edit');
// Кнопка "Закрыть попап"
const buttonClosePopupProfile = popupProfile.querySelector('.popup__button-close');
// Найти имя пользователя "Жак-Ив Кусто" и инфо пользователя "Исследователь океана"
const profileElement = document.querySelector('.profile');
const profileNameElement = profileElement.querySelector('.profile__name');
const profileInfoElement = profileElement.querySelector('.profile__text');
// Найти поле ввода имени и поле ввода информации
const inputProfileName = popupProfile.querySelector('.popup__text_input_name');
const inputProfileInfo = popupProfile.querySelector('.popup__text_input_info');
// Находим форму отправки (полей ввода имени и информации) в DOM
const formPopupProfile = document.querySelector('.popup__form');
// Весь блок с карточками
const cards = document.querySelector('.cards');

// Попап Добавления места
// Кнопка Добавить место
const buttonOpenPopupAddPlace = document.querySelector('.profile__button-add');
// Попап добавления места
const popupAddPlace = document.querySelector('.popup_add-card');
// Кнопка Закрыть попап добавления
const buttonClosePopupAddPlace = popupAddPlace.querySelector('.popup__button-close_add-card');
// Вся форма добавления места
const formAddPlace = document.forms.SubmitAddPlace;
// Найти поля ввода названия и ссылки в попапе
const inputNameNewPlace = popupAddPlace.querySelector('.popup__text_input_name-place');
const inputLinkNewPlace = popupAddPlace.querySelector('.popup__text_input_link');
// Находим форму отправки (полей названия и ссылки) в DOM
const formNewPlace = document.querySelector('.popup__form_add');

// Попап Открыть изображение
// Сам попап с развернутой картинкой
const popupExpand = document.querySelector('.popup_expand');
// Название места на попапе разворота
const namePopupExpand = popupExpand.querySelector('.popup__name-expand');
// Развернутая картинка в попапе
const photoPopupExpand = popupExpand.querySelector('.popup__img-expand');

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__form-error',
    errorClass: 'popup__form-error_active',
    errorBorderBottomRed: 'popup__text_invalid'
};

// Для валидации
const editProfileForm = document.querySelector('.popup').querySelector('.popup__form');
const addNewPlaceForm = document.querySelector('.popup_add-card').querySelector('.popup__form');

const editProfileFormValidator = new FormValidator(config, editProfileForm);
const addNewPlaceFormValidator = new FormValidator(config, addNewPlaceForm);


// Вызывайте активацию валидации один раз при старте программы, а для задания правильного состояния кнопки
// отправки используйте вызов метода toggleButtonState  у советующего экземпляра класса FormValidator.
// editProfileFormValidator.toggleButtonState()
// addNewPlaceFormValidator.toggleButtonState()


// ___________________________________________________________________________________________________________________________

// Открыть попап
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('click', closePopupByClickOnOverlay);
    document.addEventListener('keydown', closePopupByClickOnEsc);
}

// Закрыть попап
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('click', closePopupByClickOnOverlay);
    document.removeEventListener('keydown', closePopupByClickOnEsc);
}

// ___________________________________________________________________________________________________________________________

// Попап "Редактировать профиль"
// Открыть попап редактирования
function openPopupEditProfile() {
    // Значение полей ввода взято со страницы
    inputProfileName.value = profileNameElement.textContent;
    inputProfileInfo.value = profileInfoElement.textContent;
    openPopup(popupProfile);
    // editProfileFormValidator.enableValidation();
}

// Закрыть попап редактирования
const closePopupEditProfile = function () {
    closePopup(popupProfile);
}

// Обработчик «отправки» формы (пока никуда отправляться не будет)
function handlerProfileFormSubmit (evt) {
    evt.preventDefault();
    profileNameElement.textContent = inputProfileName.value;
    profileInfoElement.textContent = inputProfileInfo.value;
    closePopup(popupProfile);
}

// // Заглушка на все поля ввода
// formPopupProfile.addEventListener('submit', function (evt) {
//     evt.preventDefault();
// });

// ___________________________________________________________________________________________________________________________
// Функции:
// ___________________________________________________________________________________________________________________________

// Попап Добавить карточки
// Открыть попап добавления места
const openPopupAddPlace = function () {
    openPopup(popupAddPlace);
    // Очистить поля формы
    formAddPlace.reset();
    // addNewPlaceFormValidator.enableValidation();
}

// Закрыть попап добавления места
const closePopupAddPlace = function () {
    closePopup(popupAddPlace)
}

// Закрыть попап разворота
const closePopupExpand = function () {
    closePopup(popupExpand)
}

// Форма добавления места
function formSubmitPlaceHandler (evt) {
    evt.preventDefault();
    const item = {
            name: inputNameNewPlace.value,
            link: inputLinkNewPlace.value
        };
    const card = new Card(item, '.card-template_type_default');
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();
    cards.prepend(cardElement);
    // Закрыть после нажатия кнопки "Создать"
    closePopupAddPlace();
}

// Закрыть на затемненную область
function closePopupByClickOnOverlay(event) {
    if (event.target.classList.contains('popup')) {
        closePopup(document.querySelector('.popup_opened'));
    }
}

// Закрыть на Esc
function closePopupByClickOnEsc(event) {
    if (event.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'));
    }
}

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

// Развернуть карточки из массива
initialCards.forEach((item) => {
    // Создадим экземпляр карточки
    const card = new Card(item, '.card-template_type_default');
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();
    cards.append(cardElement);
});
