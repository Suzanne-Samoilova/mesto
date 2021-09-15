// отвечает за управление отображением информации о пользователе на странице

export default class UserInfo {
    // getUserInfo
    // setUserInfo
    // setUserAvatar

    constructor({ profileNameElement, profileInfoElement, profileAvatar }) {
        // Принимает селекторы имени и инфо пользователя
        this._profileNameElement = profileNameElement;
        this._profileInfoElement = profileInfoElement;
        this._avatar = profileAvatar;
    }

    // возвращает объект с данными пользователя
    // нужен для подставления данных в форму при открытии
    getUserInfo() {
        return {
            name: this._profileNameElement.textContent,
            about: this._profileInfoElement.textContent
        };
    }

    // принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(data) {
        this._profileNameElement.textContent = data.name;
        this._profileInfoElement.textContent = data.about;
        this.setUserAvatar(data);
        this._avatar.alt = `Аватар ${data.name}`;
    }

    setUserAvatar(data) {
        this._avatar.src = data.avatar;
    }
}
