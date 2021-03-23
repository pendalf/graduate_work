import './css/style.css';
import './scss/style.scss';
import './index.html';

import phoneList from './modules/phoneList';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import accordeon from './modules/accordeon';
import portfolio from './modules/portfolio';
import SliderCarousel from './modules/SliderCarousel';


'use strict';
(() => {
    // Phone list in header
    phoneList();

    // Menu
    toggleMenu();

    // Popups
    togglePopup([
        ['.link-list-menu a, .link-list-repair a', '.popup-repair-types'],
        ['.link-privacy', '.popup-privacy'],
        ['.director button, .services button', '.popup-consultation']
    ]);

    // accordeon
    accordeon();

    // portfolio
    portfolio();

    // documents slider on mobile_left
    const documentsSlider = new SliderCarousel({
        slider: '.transparency-slider-wrap',
        main: '.transparency-slider',
        prev: '.slider-arrow_left',
        next: '.slider-arrow_right',
        infinity: false,
        slidesToShow: 1,
        disable: true,
        responsive: [{
            breakpoint: 1090,
            slidesToShow: 1,

        }]
    });
    documentsSlider.init();

})();