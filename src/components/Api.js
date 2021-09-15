export default class Api {

    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    // Обработка ответа
    _handleResponse(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    // Получить данные
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(this._handleResponse)
    }

    // Получить начальные карточки
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
            .then(this._handleResponse)
    }

    // Отправить свои данные профиля
    setUserInfo(item) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: item.EditName,
                about: item.EditInfo
            })
        })
            .then(this._handleResponse)
    }

    // Установка аватара
    setAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.EditAvatar
            })
        })
            .then(this._handleResponse)
    }

    // Запостить карточку
    postCard(newCard) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: newCard.AddNamePlace,
                link: newCard.AddLinkPlace
            })
        })
            .then(this._handleResponse)
    }

    // Удалить карточку
    deleteCard(data) {
        return fetch(`${this._baseUrl}/cards/${data._id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._handleResponse)
    }

    // Добавить лайк (+1 в счетчике лайков)
    addLike(data) {
        return fetch(`${this._baseUrl}/cards/likes/${data._id}`, {
            method: 'PUT',
            headers: this._headers,
        })
            .then(this._handleResponse)
    }

    // Удалить лайк (-1 в счетчике лайков)
    deleteLike(data) {
        return fetch(`${this._baseUrl}/cards/likes/${data._id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._handleResponse)
    }

    getInitialData() {
        return Promise.all([this.getUserInfo(), this.getInitialCards()]);
    }
}
