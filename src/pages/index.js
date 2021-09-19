import './index.css';

import {
    profileInfoElement, profileNameElement, profileAvatar,
    config, inputProfileName, inputProfileInfo
} from '../utils/constants.js';

import FormValidator from '../components/FormValidator.js';
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

// ___________________________________________________________________________________________________________________________

// Валидация всех форм

// Экземпляры класса FormValidator
const editProfileFormValidator = new FormValidator(config, document.querySelector('.popup').querySelector('.popup__form'));
const addNewPlaceFormValidator = new FormValidator(config, document.querySelector('.popup_add-card').querySelector('.popup__form'));
const editAvatarFormValidator = new FormValidator(config, document.querySelector('.popup_change-avatar').querySelector('.popup__form'));

// Вызов валидации
editProfileFormValidator.enableValidation();
addNewPlaceFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();

// ___________________________________________________________________________________________________________________________

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-27',
    headers: {
        authorization: '2ad13860-f9cc-4265-9332-9990cf978091',
        'Content-Type': 'application/json'
    }
});

let cardTemp = null;
let ownerId = null;

const user = new UserInfo({ profileNameElement, profileInfoElement, profileAvatar });

const defaultCardList = new Section({
        renderer: (cardData) => {
            const newCard = createCard(cardData);
            const cardElement = newCard.generateCard();
            defaultCardList.addItem(cardElement, 'append');
        }
    }, '.cards');

// ___________________________________________________________________________________________________________________________

api.getInitialData()
    .then((data) => {
        const [userData, cardsData] = data;
        ownerId = userData._id;
        user.setUserInfo(userData);
        defaultCardList.renderItems(cardsData);
    })
    .catch((err) => {
        console.log(err);
    })

// ___________________________________________________________________________________________________________________________

// Попап Редактировать профиль
const popupClassEditProfile = new PopupWithForm({
    popupSelector: '.popup',
    handleFormSubmit: (data) => {
        popupClassEditProfile.loading(true, 'Загрузка...');
        api.setUserInfo(data)
            .then((res) => {
                user.setUserInfo(res);
                popupClassEditProfile.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupClassEditProfile.loading(false);
            })
    }
});

document
    .querySelector('.profile__button-edit')
    .addEventListener('click', () => {
        editProfileFormValidator.clearErrors();
        editProfileFormValidator.toggleButtonState();
        const userData = user.getUserInfo();
        // Взять данные со страницы
        inputProfileName.value = userData.name;
        inputProfileInfo.value = userData.about;
        popupClassEditProfile.open();
    });

// ___________________________________________________________________________________________________________________________

// Попап Сменить аватар
const popupClassEditAvatar = new PopupWithForm({
    popupSelector: '.popup_change-avatar',
    handleFormSubmit: (data) => {
        popupClassEditAvatar.loading(true);
        api.setAvatar(data)
            .then((res) => {
                user.setUserAvatar(res);
                popupClassEditAvatar.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupClassEditAvatar.loading(false);
            })
    }
});

// Открыть попап Сменить аватар
document
    .querySelector('.profile__avatar-edit')
    .addEventListener('click', () => {
        editAvatarFormValidator.clearErrors();
        editAvatarFormValidator.toggleButtonState();
        popupClassEditAvatar.open();
    });

// ___________________________________________________________________________________________________________________________

// Попап с развернутой картинкой
const PopupClassWithImage = new PopupWithImage('.popup_expand');

// ___________________________________________________________________________________________________________________________

// Создать карточку
const createCard = (data) => {
    const card = new Card(data, '.card-template_type_default', ownerId, {
        // развернуть изображение
        handleCardClick: (data) => {
            PopupClassWithImage.open(data);
        },

        handleDeleteCardClick: () => {
            cardTemp = card;
            popupConfirm.open(data);
        },

        addLikeCard: (data) => {
            api.addLike(data)
                .then((data) => {
                    card.likeCounter(data);
                    card.addLikeClass();
                })
                .catch((err) => {
                    console.log(err);
                })
        },

        deleteLikeCard: (data) => {
            api.deleteLike(data)
                .then((data) => {
                    card.likeCounter(data);
                    card.removeLikeClass();
                })
                .catch((err) => {
                    console.log(err);
                })
        },
    });

    return card;
}

// ___________________________________________________________________________________________________________________________

// Попап Добавить новое место
const popupClassAddCard = new PopupWithForm({
    popupSelector: '.popup_add-card',
    handleFormSubmit: (data) => {
        popupClassAddCard.loading(true);
        api.postCard(data)
            .then((res) => {
                const card = createCard(res);
                const cardElement = card.generateCard();
                defaultCardList.addItem(cardElement, 'prepend');
                popupClassAddCard.close()
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupClassAddCard.loading(false);
            })
    }
});

// Открыть попап Добавить новое место
document
    .querySelector('.profile__button-add')
    .addEventListener('click', () => {
        document.forms.SubmitAddPlace.reset();
        addNewPlaceFormValidator.clearErrors();
        addNewPlaceFormValidator.toggleButtonState();
        popupClassAddCard.open();
});

// ___________________________________________________________________________________________________________________________

// Попап с подтверждением
const popupConfirm = new PopupWithConfirmation('.popup_confirm', {
    handleFormSubmit: (data) => {
        api.deleteCard(data)
            .then(() => {
                cardTemp.deleteCard();
                popupConfirm.close();
            })
            .catch((err) => {
                console.log(err);
            })
    }
})

