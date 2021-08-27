export default class Popup {
    // open
    // close
    // _handleEscClose
    // _handleDarkOrButtonClose
    // setEventListeners
    // _removeEventListeners

    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    // открыть попап
    open() {
        this._popup.classList.add('popup_opened');
        this.setEventListeners();
    }

    // закрыть попап
    close() {
        this._popup.classList.remove('popup_opened');
        this._removeEventListeners();
    }

    // закрыть на Esc
    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    _handleDarkOrButtonClose(event) {
        if (event.target.classList.contains('popup') || event.target.classList.contains('popup__button-close')) {
            this.close();
        }
    }

    // добавить слушатели
    setEventListeners() {
        // Кнопка Закрыть и Затемненная область
        this._bindedHandleDarkOrButtonClose = this._handleDarkOrButtonClose.bind(this);
        this._popup.addEventListener('click', this._bindedHandleDarkOrButtonClose);

        // Esc
        this._bindedHandleEscClose = this._handleEscClose.bind(this)
        document.addEventListener('keydown', this._bindedHandleEscClose);
    }

    // удалить слушатели
    _removeEventListeners() {
        this._popup.removeEventListener('click', this._bindedHandleDarkOrButtonClose);
        document.removeEventListener('keydown', this._bindedHandleEscClose);
    }
}
