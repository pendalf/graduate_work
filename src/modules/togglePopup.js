import { circ, makeEaseOut, animate } from './animate';

const popupActions = function(progress, element) {
    element.style.opacity = progress;
    element.style.visibility = progress ? 'visible' : '';
};

const counter = () => {
    let counter = 0;
    return () => ++counter;
};

const getFunctionCount = counter();


const addDataset = els => {
    els.forEach(([selector, popup]) => {
        selector.split(',').forEach(i => {
            const selector = i.trim();
            if (selector) {
                const elToClick = document.querySelectorAll(selector);
                if (elToClick && typeof popup === 'string') {
                    elToClick.forEach(i => i.dataset.popup = popup);
                }
            }
        });
    });
};

const togglePopup = els => {
    const count = getFunctionCount();

    if (els && els instanceof Array) {
        addDataset(els);
    }

    const isMobile = () => window.innerWidth < 0;

    const fadeIn = popup => {
        if (!isMobile()) {
            animate({
                element: popup,
                duration: 500,
                timing: circ,
                draw: popupActions
            });
        } else {
            popup.style.display = 'block';
            popup.style.opacity = '';

        }
    };

    const fadeOut = popup => {
        if (!isMobile()) {
            animate({
                element: popup,
                duration: 500,
                timing: makeEaseOut(circ),
                draw: popupActions
            });
        } else {
            popup.style.display = 'none';
            popup.style.opacity = '';
        }
    };

    if (count === 1) {
        document.addEventListener('click', e => {
            const target = e.target;
            if (
                (target.closest('.close') || !target.closest('.popup-dialog')) &&
                !target.closest('.popup-dialog-menu')
            ) {
                fadeOut(target.closest('.popup'));
            }

            if (target.closest('[data-popup]')) {
                const targetPopup = target.closest('[data-popup]').dataset.popup,
                    popup = targetPopup ? document.querySelector(targetPopup) : null;
                document.body.dispatchEvent(new Event('click', { bubbles: true }));
                if (popup) {
                    fadeIn(popup);
                }
            }
        });
    }
};

export default togglePopup;