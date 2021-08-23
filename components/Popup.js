export default class Popup {
    constructor(popupSelector) {
        // popupSelector - селектор попапа
        this._popup = document.querySelector(popupSelector);
    }


    // Открыть попап
    open() {
    this._popup.classList.add('popup_opened');
    }


    // закрытие попапа
    close() {
        this._popup.classList.remove('popup_opened');
    }


    // Закрыть на Esc
    _handleEscClose() {
        if (event.key === 'Escape') {
            this.close();
        }
    }


    // Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
    // Модальное окно также закрывается при клике на затемнённую область вокруг формы.

    // добавляет слушатель клика иконке закрытия попапа
    // Модальное окно также закрывается при клике на затемнённую область вокруг формы
    setEventListeners() {
        this._popup
            .querySelector('.popup__button-close')
            .addEventListener('click', this.close.bind(this));

        this._popup.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup')) {
                this.close();
            }
        });
    }
}

// // Закрыть на затемненную область
// export function closePopupByClickOnOverlay(event) {
//     if (event.target.classList.contains('popup')) {
//         closePopup(document.querySelector('.popup_opened'));
//     }
// }
