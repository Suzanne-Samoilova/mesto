// отвечает за управление отображением информации о пользователе на странице

export default class UserInfo {
    // Принимает в конструктор объект с селекторами двух элементов:
    // элемента имени пользователя и элемента информации о себе
    constructor({ profileNameElement, profileInfoElement }) {
        this._profileNameElement = profileNameElement;
        this._profileInfoElement = profileInfoElement;
    }

    // возвращает объект с данными пользователя
    // Этот метод пригодится для подставления данных в форму при открытии
    getUserInfo() {
        return {
            name: this._profileNameElement.textContent,
            info: this._profileInfoElement.textContent
        };
    }

    // принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(data) {
        this._profileNameElement.textContent = data.name;
        this._profileInfoElement.textContent = data.info;
    }
}

