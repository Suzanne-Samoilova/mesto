// Проверка подключения
console.log('Симпл Димпл! Нет, Поп ит!');

// Выборка
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
const popupElement = document.querySelector('.popup');
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

// Открыть по клику
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
