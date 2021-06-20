// Кнопка "Редактировать профиль"
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
// Весь попап
const popupElement = document.querySelector('.popup');
// Кнопка "Закрыть попап"
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');

// Найти имя пользователя "Жак-Ив Кусто" и инфо пользователя "Исследователь океана"
const profileElement = document.querySelector('.profile');
const profileNameElement = profileElement.querySelector('.profile__name');
const profileInfoElement = profileElement.querySelector('.profile__text');


// Найти поле ввода имени и поле ввода информации
const inputProfileName = popupElement.querySelector('.popup__text_name');
const inputProfileInfo = popupElement.querySelector('.popup__text_info');


// Находим форму отправки (полей ввода имени и информации) в DOM
const formElement = document.querySelector('.popup__form');

// Переключение всплывающего окна
const openPopup = function () {
    popupElement.classList.add('popup_opened')
    //Значение полей ввода взято со страницы
    inputProfileName.value = profileNameElement.textContent;
    inputProfileInfo.value = profileInfoElement.textContent;
}

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

