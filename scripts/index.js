// Поиск
// Кнопка "Редактировать профиль"
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
// Весь попап редактирования имени пользователя
const popupElement = document.querySelector('.popup');
// Кнопка "Закрыть попап"
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');

// Найти имя пользователя "Жак-Ив Кусто" и инфо пользователя "Исследователь океана"
const profileElement = document.querySelector('.profile');
const profileNameElement = profileElement.querySelector('.profile__name');
const profileInfoElement = profileElement.querySelector('.profile__text');

// Найти поле ввода имени и поле ввода информации
const inputProfileName = popupElement.querySelector('.popup__text_input_name');
const inputProfileInfo = popupElement.querySelector('.popup__text_input_info');

// Находим форму отправки (полей ввода имени и информации) в DOM
const formElement = document.querySelector('.popup__form');
// ___________________________________________________________________________________________________________________________


// Попап "Редактировать профиль"
// Открыть попап редактирования
const openPopup = function () {
    popupElement.classList.add('popup_opened')
    //Значение полей ввода взято со страницы
    inputProfileName.value = profileNameElement.textContent;
    inputProfileInfo.value = profileInfoElement.textContent;
}

// Закрыть попап редактирования
const closePopup = function () {
    popupElement.classList.remove('popup_opened')
}

// Открыть попап по кнопке редактирования/ закрыть по кнопке крестика
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

// Обработчик «отправки» формы (пока никуда отправляться не будет)
    function formSubmitHandler (evt) {
        evt.preventDefault();
        profileNameElement.textContent = inputProfileName.value;
        profileInfoElement.textContent = inputProfileInfo.value;
        closePopup();
    }

// Обработчик формы, следит за событием “submit” - кнопка "Сохранить"
formElement.addEventListener('submit', formSubmitHandler);
// ___________________________________________________________________________________________________________________________


// Добавить карточки
// Кнопка Добавить место
const popupOpenButtonAddPlace = document.querySelector('.profile__button-add');
// Попап добавления места
const popupAddPlace = document.querySelector('.popup_add-card');
// Кнопка закрыть попап добавления
const buttonClosePopupAddPlace = popupAddPlace.querySelector('.popup_button-close');

// Открыть попап добавления места

// const openPopupAddPlace = function () {
//     popupAddPlace.classList.add('popup_opened')
// }

// Заменила на стрелочную функцию, проверить
popupOpenButtonAddPlace.addEventListener('click', () => {popupAddPlace.classList.add('popup_opened')});

// Закрыть попап добавления места

// const closePopupAddPlace = function () {
//     popupAddPlace.classList.remove('popup_opened')
// }
// buttonClosePopupAddPlace.addEventListener('click', closePopupAddPlace);

// Заменила на стрелочную функцию, проверить
buttonClosePopupAddPlace.addEventListener('click', () => {popupAddPlace.classList.remove('popup_opened')});
// ___________________________________________________________________________________________________________________________


// Найти все карточки
const cards = document.querySelectorAll('.card');

// Перебрать все карточки на лайк
cards.forEach(function (card) {
    // Найти кнопку лайка во всех карточках
    const buttonLike = card.querySelector('.card__button-like');
    // Добавить класс с тёмным лайком или удалить его
    buttonLike.addEventListener('click',() => {buttonLike.classList.toggle('card__button-like_active')});
});
// ___________________________________________________________________________________________________________________________


