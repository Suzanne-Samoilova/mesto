export default class Card {
    // _getTemplate
    // _removeLikeClass
    // _addLikeClass
    // _dislike
    // _like
    // likeCounter
    // _deleteCardOrButton
    // _checkMyCard
    // _checkStateLike
    // _setEventListeners
    // generateCard
    // deleteCard

    constructor(data, cardSelector, ownerId,
                { handleCardClick, handleDeleteCardClick, addLikeCard, deleteLikeCard }) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._ownerId = ownerId;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCardClick = handleDeleteCardClick;
        this._addLikeCard = addLikeCard;
        this._deleteLikeCard = deleteLikeCard;
        this._imageElement = document.querySelector('.card__photo');
    }

    // Клон
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
        // вернём DOM-элемент карточки
        return cardElement;
    }

    _removeLikeClass() {
        this._likeButton.classList.remove('card__button-like_active');
    }

    _addLikeClass() {
        this._likeButton.classList.add('card__button-like_active');
    }

    _dislike(data) {
        this._removeLikeClass();
        this._deleteLikeCard(data);
    }

    _like(data) {
        this._addLikeClass();
        this._addLikeCard(data);
    }

    // Счетчик лайков
    likeCounter(data) {
        this._likeCounter.textContent = String(data.likes.length);
    }

    // Удалить и обнулить
    _deleteCardOrButton(cardOrButton) {
        cardOrButton.remove();
        cardOrButton = null;
    }

    // Проверить свою карточку
    _checkMyCard() {
        if (this._data.owner._id !== this._ownerId) {
            // кнопка удалить карточку
            this._deleteCardOrButton(this._deleteButton);
        }
    }

    // Проверить состояние лайка
    _checkStateLike() {
        this._data.likes.forEach((likeOwner) => {
            if (likeOwner._id === this._ownerId) {
                this._addLikeClass();
            }
        })
    }

    // Слушалки
    _setEventListeners() {
        // Слушать Развернуть изображение
        this._imageElement.addEventListener('click', () => {
            this._handleCardClick(this._data);
        })

        // Слушать лайк, свой или не свой
        this._likeButton.addEventListener('click', () => {
            if (this._likeButton.classList.contains('card__button-like_active')) {
                this._dislike(this._data);
            } else {
                this._like(this._data);
            }
        })

        // Слушать удалить
        this._deleteButton.addEventListener('click', this._handleDeleteCardClick);
    }

    generateCard() {
        // Запишем разметку в приватное поле _element.
        // Так у других элементов появится доступ к ней.
        this._element = this._getTemplate();
        // Текст карточки
        this._titleElement = this._element.querySelector('.card__text');
        // Картинка
        this._imageElement = this._element.querySelector('.card__photo');
        // Кнопка лайка
        this._likeButton = this._element.querySelector('.card__button-like');
        // Кнопка удалить
        this._deleteButton = this._element.querySelector('.card__button-delete');
        // Счетчик лайков
        this._likeCounter = this._element.querySelector('.card__counter-like');
        this._element.setAttribute('id', `a${this._data._id}`);

        // Добавим данные
        this._imageElement.src = this._data.link;
        this._titleElement.textContent = this._data.name;
        this._imageElement.alt = `Изображение ${this._data.name}`;

        // Добавить обработчики
        this._setEventListeners();
        this._checkMyCard();
        this._checkStateLike();

        // Вернём элемент наружу
        return this._element;
    }

    // Удалить карточку
    deleteCard() {
        this._deleteCardOrButton(this._element);
    }
}
