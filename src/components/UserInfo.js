// отвечает за управление отображением информации о пользователе на странице

export default class UserInfo {
    // getUserInfo
    // setUserInfo

    constructor({ profileNameElement, profileInfoElement }) {
        // Принимает селекторы имени и инфо пользователя
        this._profileNameElement = profileNameElement;
        this._profileInfoElement = profileInfoElement;
    }

    // возвращает объект с данными пользователя
    // нужен для подставления данных в форму при открытии
    getUserInfo() {
        return {
            name: this._profileNameElement.textContent,
            info: this._profileInfoElement.textContent
        };
    }

    // принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(data) {
        this._profileNameElement.textContent = data.EditName;
        this._profileInfoElement.textContent = data.EditInfo;
    }
}
