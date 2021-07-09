// Поиск
// Весь попап редактирования имени пользователя
const popupElement = document.querySelector('.popup');
// Кнопка "Редактировать профиль"
const buttonOpenPopupElement = document.querySelector('.profile__button-edit');
// Кнопка "Закрыть попап"
const buttonClosePopupElement = popupElement.querySelector('.popup__button-close');

// Найти имя пользователя "Жак-Ив Кусто" и инфо пользователя "Исследователь океана"
const profileElement = document.querySelector('.profile');
const profileNameElement = profileElement.querySelector('.profile__name');
const profileInfoElement = profileElement.querySelector('.profile__text');

// Найти поле ввода имени и поле ввода информации
const inputProfileName = popupElement.querySelector('.popup__text_input_name');
const inputProfileInfo = popupElement.querySelector('.popup__text_input_info');

// Находим форму отправки (полей ввода имени и информации) в DOM
const formElement = document.querySelector('.popup__form');

// Весь блок с карточками
const cards = document.querySelector('.cards');
// ___________________________________________________________________________________________________________________________

// Открыть попап
function openPopup(popup) {
    popup.classList.add('popup_opened')
}

// Закрыть попап
function closePopup(popup) {
    popup.classList.remove('popup_opened')
}
// ___________________________________________________________________________________________________________________________

// Попап "Редактировать профиль"
// Открыть попап редактирования
function openPopupEditProfile() {
    // Значение полей ввода взято со страницы
    inputProfileName.value = profileNameElement.textContent;
    inputProfileInfo.value = profileInfoElement.textContent;
    openPopup(popupElement);
}

// Закрыть попап редактирования
const closePopupEditProfile = function () {
    closePopup(popupElement);
}

// Открыть попап по кнопке редактирования/ закрыть по кнопке крестика
buttonOpenPopupElement.addEventListener('click', openPopupEditProfile);
buttonClosePopupElement.addEventListener('click', closePopupEditProfile);

// Обработчик «отправки» формы (пока никуда отправляться не будет)
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileNameElement.textContent = inputProfileName.value;
    profileInfoElement.textContent = inputProfileInfo.value;
    closePopup(popupElement);
}

// Обработчик формы, следит за событием “submit” - кнопка "Сохранить"
formElement.addEventListener('submit', formSubmitHandler);
// ___________________________________________________________________________________________________________________________

// Лайки
const addLikeHandler = function (card) {
    // Найти кнопку лайка во всех карточках
    const buttonLike = card.querySelector('.card__button-like');
    // Добавить класс с тёмным лайком или удалить его
    buttonLike.addEventListener('click',() => {buttonLike.classList.toggle('card__button-like_active')});
}
// ___________________________________________________________________________________________________________________________

// Попап Добавить карточки
// Кнопка Добавить место
const buttonOpenPopupAddPlace = document.querySelector('.profile__button-add');
// Попап добавления места
const popupAddPlace = document.querySelector('.popup_add-card');
// Кнопка Закрыть попап добавления
const buttonClosePopupAddPlace = popupAddPlace.querySelector('.popup__button-close_add-card');

// Открыть попап добавления места
const openPopupAddPlace = function () {
    openPopup(popupAddPlace);
    inputNameNewPlace.value = '';
    inputLinkNewPlace.value = '';
}
buttonOpenPopupAddPlace.addEventListener('click', openPopupAddPlace);

// Закрыть попап добавления места
const closePopupAddPlace = function () {
    closePopup(popupAddPlace)
}
buttonClosePopupAddPlace.addEventListener('click', closePopupAddPlace);

// Найти поля ввода названия и ссылки в попапе
const inputNameNewPlace = popupAddPlace.querySelector('.popup__text_input_name-place');
const inputLinkNewPlace = popupAddPlace.querySelector('.popup__text_input_link');

// Находим форму отправки (полей названия и ссылки) в DOM
const formNewPlace = document.querySelector('.popup__form_add');

// Создать карточку из Template
const createCard = function (name, photo) {
    // Нашли шаблон и обратились к его содержимому
    const cardTemplate = document.querySelector('#newcard').content;
    //клонируем содержимое тега template
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    card.querySelector('.card__text').textContent = name;
    card.querySelector('.card__photo').alt = name;
    card.querySelector('.card__photo').src = photo;
    // Слушать Лайк
    addLikeHandler(card);
    // Слушать Удалить
    deleteCard(card);
    // Слушать Развернуть изображение
    openPopupExpand(card);
    return card;
}

// Создать карточку и поставить в начало
function renderCard (name, photo) {
    const card = createCard(name, photo);
    // отображаем на странице
    cards.prepend(card);
}

// Форма
function formSubmitPlaceHandler (evt) {
    evt.preventDefault();
    const name = inputNameNewPlace.value;
    const photo = inputLinkNewPlace.value;
    renderCard(name, photo);
    // Закрыть после нажатия кнопки "Создать"
    closePopupAddPlace();
}

// Обработчик формы, следит за событием “submit” - кнопка "Создать"
formNewPlace.addEventListener('submit', formSubmitPlaceHandler);
// ___________________________________________________________________________________________________________________________

// Удаление карточки
const deleteCard = function (card) {
    // Найти кнопку удаления во всех карточках
    const buttonDelete = card.querySelector('.card__button-delete');
    // Удалить элемент списка, передав его класс
    buttonDelete.addEventListener('click',() => {buttonDelete.closest('.card').remove()});
}
// ___________________________________________________________________________________________________________________________

// Попап Открыть изображение
// Попап с развернутой картинкой
const popupExpand = document.querySelector('.popup_expand');
// Кнопка закрыть развернутую картинку
const buttonClosePopupExpand = popupExpand.querySelector('.popup__button-close-expand');
// Название места на попапе разворота
const namePopupExpand = popupExpand.querySelector('.popup__name-expand');
// Развернутая картинка в попапе
const photoPopupExpand = popupExpand.querySelector('.popup__img-expand');

// Открыть попап разворота
const openPopupExpand = function (card) {
    // Название маста на карточке
    const name = card.querySelector('.card__text');
    // Найти картинку (которую нужно открыть) на карточке
    const photo = card.querySelector('.card__photo');

    photo.addEventListener('click',() => {
        openPopup(popupExpand);
        // Взять название из карточки
        namePopupExpand.textContent = name.textContent;
        // Взять ссылку из карточки
        photoPopupExpand.src = photo.src;
        photoPopupExpand.alt = photo.alt;
    });
}

// Закрыть попап
const closePopupExpand = function () {
    closePopup(popupExpand)
}
buttonClosePopupExpand.addEventListener('click', closePopupExpand);
// ___________________________________________________________________________________________________________________________

//Функция рендера карточек из массива
initialCards.forEach(function (element) {
    renderCard(element.name, element.link)
});
