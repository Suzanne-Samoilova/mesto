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

// Открыть попап
function openPopup(popup) {
    popup.classList.add('popup_opened')
}

// Закрыть попап
function closePopup(popup) {
    popup.classList.remove('popup_opened')
}


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
popupOpenButtonElement.addEventListener('click', openPopupEditProfile);
popupCloseButtonElement.addEventListener('click', closePopupEditProfile);

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
// Найти все карточки
// const cards = document.querySelectorAll('.card');

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
// Кнопка закрыть попап добавления
const buttonClosePopupAddPlace = popupAddPlace.querySelector('.popup__button-close_add-card');

// Открыть попап добавления места
const openPopupAddPlace = function () {
    openPopup(popupAddPlace)
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

// Обработчик «отправки» формы названия места и ссылки
function formSubmitPlaceHandler (evt) {
    evt.preventDefault();
// Добавление карточки по шаблону template
// Нашли шаблон и обратились к его содержимому
    const cardTemplate = document.querySelector('#newcard').content;
// Найти блок со всеми карточками, куда надо добавить новую
    const cards = document.querySelector('.cards');
//клонируем содержимое тега template
    const card = cardTemplate.querySelector('.card').cloneNode(true);
// Наполняем содержимым
    card.querySelector('.card__text').textContent = inputNameNewPlace.value;
    card.querySelector('.card__photo').src = inputLinkNewPlace.value;
// Слушать Лайк
    addLikeHandler(card);
// Слушать Удалить
    deleteCard(card);
// Слушать Развернуть изображение
    expandImg(card);
// отображаем на странице
    cards.prepend(card);
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
const buttonCloseExpand = popupExpand.querySelector('.popup__button-close-expand');
// Название места на попапе разворота
const nameExpandPlace = popupExpand.querySelector('.popup__name-expand');
// Развернутая картинка в попапе
const imgExpand = popupExpand.querySelector('.popup__img-expand');

// Открыть попап разворота
const expandImg = function (card) {
    // Найти картинку (которую нужно открыть) на карточке
    const img = card.querySelector('.card__photo');
    // Название маста на карточке
    const nameCard = card.querySelector('.card__text');

    img.addEventListener('click',() => {
        openPopup(popupExpand);
        // Взять название из карточки
        nameExpandPlace.textContent = nameCard.textContent;
        // Взять ссылку из карточки
        imgExpand.src = img.src;
    });
}

// Закрыть попап
const closePopupExpand = function () {
    closePopup(popupExpand)
}
buttonCloseExpand.addEventListener('click', closePopupExpand);
// ___________________________________________________________________________________________________________________________


//Функция рендера карточек из массива
initialCards.forEach(function (element) {
    const cardTemplate = document.querySelector('#newcard').content;
    const cards = document.querySelector('.cards');
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    card.querySelector('.card__photo').src = element.link;
    card.querySelector('.card__text').textContent = element.name;
// Слушать Лайк
    addLikeHandler(card);
// Слушать Удалить
    deleteCard(card);
// Слушать Развернуть изображение
    expandImg(card);
// отображаем на странице
    cards.prepend(card);
});

