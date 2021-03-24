import './css/style.css';
import './scss/style.scss';
import './index.html';

import phoneList from './modules/phoneList';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import accordeon from './modules/accordeon';
import portfolio from './modules/portfolio';
import documents from './modules/documents';
import SliderCarousel from './modules/SliderCarousel';
import Formula from './modules/Formula';


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

    // documents slider on mobile
    documents();

    // reviews
    const reviewsSlider = new SliderCarousel({
        slider: '.reviews-slider-wrap',
        main: '.reviews-slider',
        prev: '.slider-arrow_left',
        next: '.slider-arrow_right',
        infinity: false,
        slidesToShow: 1,
    });
    reviewsSlider.init();

    // partners
    const partnersSlider = new SliderCarousel({
        slider: '.partners',
        main: '.partners-slider',
        prev: '.slider-arrow_left',
        next: '.slider-arrow_right',
        infinity: true,
        slidesToShow: 3,
        responsive: [

            {
                breakpoint: 1091,
                slidesToShow: 2,
            },
            {
                breakpoint: 1025,
                slidesToShow: 3,
            },
            {
                breakpoint: 641,
                slidesToShow: 2,
            },
            {
                breakpoint: 576,
                slidesToShow: 1,
            }
        ]
    });
    partnersSlider.init();

    // formula
    const formula = new Formula({
        main: '.formula',
        item: '.formula-item',
        icon: '.formula-item__icon',
        popup: '.formula-item-popup'
    });
    formula.init();

    // formula mobile
    const formulaMobile = new Formula({
        main: '.formula-slider-wrap',
        item: '.formula-item',
        icon: '.formula-item',
        popup: '.formula-item-popup'
    });
    formulaMobile.init();

    // formula slider
    const formulaSlider = new SliderCarousel({
        slider: '.formula-slider-wrap',
        main: '.formula-slider',
        prev: '.slider-arrow_left',
        next: '.slider-arrow_right',
        infinity: true,
        disable: true,
        slidesToShow: 3,
        responsive: [

            {
                breakpoint: 1025,
                slidesToShow: 3,
            },
            {
                breakpoint: 769,
                slidesToShow: 2,
            },
            {
                breakpoint: 641,
                slidesToShow: 1,
            }
        ]
    });
    formulaSlider.init();

})();