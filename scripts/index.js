// Проверка подключения
console.log('Симпл Димпл! Нет, Поп ит!');


// Кнопка "Редактировать профиль"
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
// Весь попап
const popupElement = document.querySelector('.popup');
// Кнопка "Закрыть попап"
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');


// Переключение всплывающего окна
const openPopup = function () {
    popupElement.classList.add('popup_opened')
}

const closePopup = function () {
    popupElement.classList.remove('popup_opened')
}


//Закрыть на затемненную область
const closePopupByClickOnOverlay = function (event) {
    console.log(event.target, event.currentTarget)
    if (event.target !== event.currentTarget) {
        return
    }
    closePopup()
}


// Открыть попап по кнопке редактирования/ закрыть по кнопке крестика или затемненной области
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);


// Найти имя пользователя "Жак-Ив Кусто" и инфо пользователя "Исследователь океана"
const profileElement = document.querySelector('.profile');
const profileNameElement = profileElement.querySelector('.profile__name');
const profileInfoElement = profileElement.querySelector('.profile__text');


// Найти поле ввода имени и поле ввода информации
const inputProfileName = popupElement.querySelector('.popup__name');
const inputProfileInfo = popupElement.querySelector('.popup__info');


//Значение полей ввода взято со страницы
inputProfileName.value = profileNameElement.textContent;
inputProfileInfo.value = profileInfoElement.textContent;


// Находим форму отправки (полей ввода имени и информации) в DOM
const formElement = document.querySelector('.popup__input');


// Обработчик «отправки» формы (пока никуда отправляться не будет)
    function formSubmitHandler (evt) {
        evt.preventDefault();
        profileNameElement.textContent = inputProfileName.value;
        profileInfoElement.textContent = inputProfileInfo.value;
    }


// Обработчик формы, следит за событием “submit” - кнопка "Сохранить"
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', closePopup);

