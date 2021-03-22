import { circ, makeEaseInOut, animate } from './animate';


const scrollTo = (progress, element) => {
    window.scrollTo(0, (element.to - element.from) * progress + element.from);
};

const toggleMenu = () => {
    // const menu = document.querySelector('.menu');
    const popupMenu = document.querySelector('.popup-dialog-menu');

    const actionMenu = () => {
        popupMenu.style.transform = 'translate3d(0, 0, 0)';
    };

    const menuScrollTo = function(el) {
        el = el.tagName === 'A' ? el : el.querySelector('a');
        const to = el.getAttribute('href') || false,
            toEl = to ? document.querySelector(to) : false;
        if (toEl) {
            this.preventDefault();
            const scroll = {
                from: document.documentElement.scrollTop,
                to: toEl.getBoundingClientRect().top - document.body.getBoundingClientRect().top
            };
            animate({
                element: scroll,
                duration: 1000,
                timing: makeEaseInOut(circ),
                draw: scrollTo
            });
        }
    };

    document.addEventListener('click', e => {
        const target = e.target;
        console.log(target);
        if (target.closest('.close-menu') || !target.closest('.popup-menu')) {
            popupMenu.style.transform = '';
        }
        if (target.classList.contains('menu__icon')) {
            actionMenu();
        }
        if (
            target.closest('a') &&
            target.closest('a').getAttribute('href').length > 1 &&
            target.closest('a').getAttribute('href')[0] === '#'
        ) {
            menuScrollTo.bind(e)(target.closest('a'));
            popupMenu.style.transform = '';
        }
    });
};

export default toggleMenu;