// Проверка подключения
console.log('Симпл Димпл! Нет, Поп ит!');

// Выборка
// Кнопка "Редактировать профиль"
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
// Весь попап
const popupElement = document.querySelector('.popup');
// Кнопка "Закрыть попап"
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');

// Переключение всплывающего окна
const openPopup = function () {
    popupElement.classList.add('popup_is-opened')
}

const closePopup = function () {
    popupElement.classList.remove('popup_is-opened')
}

//Закрыть на затемненную область
const closePopupByClickOnOverlay = function (event) {
    console.log(event.target, event.currentTarget)
    if (event.target !== event.currentTarget) {
        return
    }
    closePopup()
}

// Открыть/закрыть по клику
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);


// Найти имя пользователя "Жак-Ив Кусто" и инфо пользователя "Исследователь океана"
const profileElement = document.querySelector('.profile');
const profileNameElement = profileElement.querySelector('.profile__name');
const profileInfoElement = profileElement.querySelector('.profile__text');
// console.log(profileNameElement, profileInfoElement);

// Найти поле ввода имени и поле ввода информации
const inputProfileName = popupElement.querySelector('.popup__name');
const inputProfileInfo = popupElement.querySelector('.popup__info');
// console.log(inputProfileName, inputProfileInfo);

// Найти кнопку "Сохранить"
const popupSaveButton = popupElement.querySelector('.popup__button-save');

// Сохранить после нажатия кнопки "Сохранить"
const saveNameByClickOnSaveButton = function () {
    profileNameElement.textContent = inputProfileName.value;
    profileInfoElement.textContent = inputProfileInfo.value;
}

// Закрыть и сохранить после нажатия кнопки "Сохранить"
popupSaveButton.addEventListener('click', closePopup);
popupSaveButton.addEventListener('click', saveNameByClickOnSaveButton);


