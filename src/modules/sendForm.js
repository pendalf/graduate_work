import Validator from '../../plugins/validator/validator';
import togglePopup from './togglePopup';

const sendForm = (selector, validatorOptions = null) => {
    const errorMessage = `Что то пошло не так...`,
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
        popupFake = document.createElement('div');

    let validator;


    popupFake.style.display = 'none';
    popupFake.className = 'popup-fake';
    document.body.append(popupFake);

    togglePopup([
        ['.popup-fake', '.popup-thank']
    ]);

    const form = selector instanceof HTMLElement ? selector : document.querySelector(selector);

    if (validatorOptions) {
        validator = new Validator(Object.assign({ selector }, validatorOptions));
        validator.init();
    }

    const statusMessage = document.createElement('div');
    statusMessage.className = 'status-message';
    statusMessage.style.cssText = `font-size: 2rem;`;

    const postData = body => fetch('http://test-art-club.ru/server.php', {
        method: 'POST',
        headerd: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const getLoader = () => {
        let loader = '<div class="sk-circle-bounce">';
        [...Array(12)].forEach((e, i) => loader += `<div class="sk-child sk-circle-${i + 1}"></div>`);
        loader += '</div>';
        return loader;
    };

    const messageClean = (form = null, pending = 3000) => {
        setTimeout(() => {
            statusMessage.textContent = '';
            statusMessage.remove();
            document.querySelector('.popup-thank').dispatchEvent(new Event('click', { bubbles: true }));
            // if (form && form.id === 'form3') {
            //     document.querySelector('.popup .popup-close').dispatchEvent(new Event('click', { bubbles: true }));
            // }

        }, pending);
    };

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (validator && validator.error.size) {
            return;
        }
        const formData = new FormData(form),
            body = {};
        formData.forEach((v, k) => body[k] = v);
        form.append(statusMessage);
        statusMessage.innerHTML = getLoader();

        postData(body)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('Status network is not 200');
                }
                form.reset();
                popupFake.dispatchEvent(new Event('click', { bubbles: true }));
                statusMessage.remove();
                messageClean(form);
            })
            .catch(error => {

                statusMessage.textContent = errorMessage;
                messageClean();
                console.error(error);
            });
    });

};

export default sendForm;