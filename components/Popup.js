export default class Popup {
    constructor(popupSelector) {
        // popupSelector - селектор попапа
        this._popup = document.querySelector(popupSelector);
    }

    // Открыть попап
    open() {
        this._popup.classList.add('popup_opened');
        this.setEventListeners();
    }

    // закрытие попапа
    close() {
        this._popup.classList.remove('popup_opened');
        this._removeEventListeners();
    }

    // Закрыть на Esc
    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    // Закрыть при клике на затемнение
    _handleMouseDownClose(event) {
        if (event.target.classList.contains('popup')) {
            this.close();
        }
    }

    setEventListeners() {
        // Кнопка Закрыть
        this._bindedClose = this.close.bind(this)
        this._popup
            .querySelector('.popup__button-close')
            .addEventListener('click', this._bindedClose);

        // Затемненная область
        this._bindedHandleMouseDownClose = this._handleMouseDownClose.bind(this)
        this._popup
            .addEventListener('mousedown', this._bindedHandleMouseDownClose);

        // Esc
        this._bindedHandleEscClose = this._handleEscClose.bind(this)
        document.addEventListener('keydown', this._bindedHandleEscClose);
    }

    _removeEventListeners() {
        this._popup
            .querySelector('.popup__button-close')
            .removeEventListener('click', this._bindedClose);

        this._popup.removeEventListener('mousedown', this._bindedHandleMouseDownClose);

        document.removeEventListener('keydown', this._bindedHandleEscClose);
    }
}
