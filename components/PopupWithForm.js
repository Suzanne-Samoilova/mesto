import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    // нужно ли указывать селектор попапа, который уже указан у родителя??
    constructor(popupSelector, колбэк_сабмита_формы ) {
    }


    // собирает данные всех полей формы
    _getInputValues() {

    }


    // должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы
    setEventListeners() {

    }

    // при закрытии попапа форма должна ещё и сбрасываться
    close() {

    }



    // Для каждого попапа создавайте свой экземпляр класса PopupWithForm
}
