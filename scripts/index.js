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
const inputProfileName = popupElement.querySelector('.popup__text_input_name');
const inputProfileInfo = popupElement.querySelector('.popup__text_input_info');


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




//Добавление новой карточки по такому принципу. ЗАМЕНИТЬ все значения
function addSong(artistValue, titleValue) {
    const trackContainer = document.createElement('div');
    trackContainer.classList.add('song');

    const artistElement = document.createElement('h4');
    artistElement.classList.add('song__artist');
    artistElement.textContent = artistValue;

    const titleElement = document.createElement('h4');
    titleElement.classList.add('song__title');
    titleElement.textContent = titleValue;

    const likeButtonElement = document.createElement('button');
    likeButtonElement.classList.add('song__like');


    addButton.addEventListener('click', function () {
        const artist = document.querySelector('.input__text_type_artist');
        const title = document.querySelector('.input__text_type_title');

        addSong(artist.value, title.value);
        renderHasSongs();

        artist.value = '';
        title.value = '';
    });