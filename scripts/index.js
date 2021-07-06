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


// Лайки
// Найти все карточки
const cards = document.querySelectorAll('.card');

const likeHandler = function (card) {
    // Найти кнопку лайка во всех карточках
    const buttonLike = card.querySelector('.card__button-like');
    // Добавить класс с тёмным лайком или удалить его
    buttonLike.addEventListener('click',() => {buttonLike.classList.toggle('card__button-like_active')});
}

// Перебрать все карточки на лайк
cards.forEach(likeHandler);
// ___________________________________________________________________________________________________________________________


// Попап Добавить карточки
// Кнопка Добавить место
const popupOpenButtonAddPlace = document.querySelector('.profile__button-add');
// Попап добавления места
const popupAddPlace = document.querySelector('.popup_add-card');
// Кнопка закрыть попап добавления
const buttonClosePopupAddPlace = popupAddPlace.querySelector('.popup__button-close_add-card');

// Открыть попап добавления места
popupOpenButtonAddPlace.addEventListener('click', () => {popupAddPlace.classList.add('popup_opened')});

// Закрыть попап добавления места
const closePopupAddPlace = function () {
    popupAddPlace.classList.remove('popup_opened')
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
    likeHandler(card);
// Слушать Удалить
    deleteCardHandler(card);
// Слушать Развернуть изображение
    openPopupExpandHandler(card);
// отображаем на странице
    cards.prepend(card);
// Закрыть после нажатия кнопки "Создать"
    closePopupAddPlace();
}

// Обработчик формы, следит за событием “submit” - кнопка "Создать"
formNewPlace.addEventListener('submit', formSubmitPlaceHandler);
// ___________________________________________________________________________________________________________________________


// Удаление карточки
const deleteCardHandler = function (card) {
    // Найти кнопку удаления во всех карточках
    const buttonDelete = card.querySelector('.card__button-delete');
    // Удалить элемент списка, передав его класс
    buttonDelete.addEventListener('click',() => {buttonDelete.closest('.card').remove()});
}

// Перебрать все карточки на удаление
cards.forEach(deleteCardHandler);
// ___________________________________________________________________________________________________________________________


// Попап Открыть изображение
// Попап с развернутой картинкой
const popupExpand = document.querySelector('.popup_expand');
// Кнопка закрыть развернутую картинку
const buttonCloseExpand = popupExpand.querySelector('.popup__button-close-expand');
// Название места на попапе
const nameExpandPlace = popupExpand.querySelector('.popup__name-expand');
// Развернутая картинка в попапе
const imgExpand = popupExpand.querySelector('.popup__img-expand');

// Открыть попап
const openPopupExpandHandler = function (card) {
    // Найти картинку (которую нужно открыть) на карточке
    const img = card.querySelector('.card__photo');
    // Название маста на карточке
    const nameCard = card.querySelector('.card__text');

    img.addEventListener('click',() => {
        popupExpand.classList.add('popup_opened')
        // Взять название из карточки
        nameExpandPlace.textContent = nameCard.textContent;
        // Взять ссылку из карточки
        imgExpand.src = img.src;
    });
}

// Перебрать все карточки на развернуть изображения
cards.forEach(openPopupExpandHandler);

// Закрыть попап
const closePopupExpand = function () {
    popupExpand.classList.remove('popup_opened')
}

buttonCloseExpand.addEventListener('click', closePopupExpand);
// ___________________________________________________________________________________________________________________________


// Массив изображений
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//Функция рендера карточек из массива
initialCards.forEach(function (element) {
    const cardTemplate = document.querySelector('#newcard').content;
    const cards = document.querySelector('.cards');
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    card.querySelector('.card__photo').src = element.link;
    card.querySelector('.card__text').textContent = element.name;
// Слушать Лайк
    likeHandler(card);
// Слушать Удалить
    deleteCardHandler(card);
// Слушать Развернуть изображение
    openPopupExpandHandler(card);
// отображаем на странице
    cards.prepend(card);
});
