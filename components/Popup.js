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

    setEventListeners() {
        // Кнопка Закрыть
        this._popup
            .querySelector('.popup__button-close')
            .addEventListener('click', this.close.bind(this));

        // Затемненная область
        this._popup
            .addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup')) {
                this.close();
            }
        });

        // Esc
        document.addEventListener('keydown', this._handleEscClose.bind(this));
    }

    _removeEventListeners() {
        this._popup
            .querySelector('.popup__button-close')
            .removeEventListener('click', this.close.bind(this));

        this._popup.removeEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup')) {
                this.close();
            }
        });

        document.removeEventListener('keydown', this._handleEscClose.bind(this));
    }
}
