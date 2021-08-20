import Popup from "./Popup.js";
import {formSubmitPlaceHandler} from "../utils/utils.js";

export default class PopupWithForm extends Popup {
    // нужно ли указывать селектор попапа, который уже указан у родителя??
    constructor(popupSelector, formSubmitPlaceHandler ) {
        super(popupSelector);
        this._formSubmitPlaceHandler = formSubmitPlaceHandler;
        this._form = this._popup.querySelector('.popup__form');


    }


    // собирает данные всех полей формы
    _getInputValues() {
        this._inputList = Array.from(this._form.querySelectorAll('.popup__text'));

    }


    // должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы
    setEventListeners() {

    }

    // при закрытии попапа форма должна ещё и сбрасываться
    close() {

    }



    // Для каждого попапа создавайте свой экземпляр класса PopupWithForm
}
