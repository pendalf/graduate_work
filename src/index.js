import 'nodelist-foreach-polyfill';

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
import repairTypes from './modules/repairTypes';
import designSolutions from './modules/designSolutions';
import scheme from './modules/scheme';
import sendForm from './modules/sendForm';
import maskPhone from './modules/maskPhone';
import PriceList from './modules/PriceList';
import validationForms from './modules/validationForms';


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
        ['.director button, .services > button', '.popup-consultation']
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

    // problems
    const problems = new Formula({
        main: '.problems',
        item: '.problems-item',
        icon: '.problems-item__icon',
        popup: '.problems-item-popup'
    });
    problems.init();

    // problems mobile
    const problemsMobile = new Formula({
        main: '.problems-slider-wrap',
        item: '.problems-item',
        icon: '.problems-item',
        popup: '.problems-item-popup'
    });
    problemsMobile.init();

    // problems slider
    const problemsSlider = new SliderCarousel({
        slider: '.problems-slider-wrap',
        main: '.problems-slider',
        prev: '.slider-arrow_left',
        next: '.slider-arrow_right',
        infinity: true,
        disable: true,
        slidesToShow: 1,
        responsive: [

            {
                breakpoint: 1025,
                slidesToShow: 1,
            }
        ]
    });
    problemsSlider.init();

    // repair types
    repairTypes();

    // design solutions
    designSolutions();

    // scheme
    scheme();

    //form input validation
    validationForms();

    // send-ajax-form
    maskPhone('.feedback-block__form-input_phone');
    maskPhone('.feedback__form .feedback__input-input');
    const feedbackForm = document.querySelectorAll('.feedback__form');
    [...feedbackForm].forEach(i => {
        sendForm(i, {
            pattern: {
                phone: /^\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d$/,
            },
            method: {
                '.feedback__input-input': [
                    ['notEmpty'],
                    ['pattern', 'phone']
                ],
                '.checkbox__input': [
                    ['isChecked']
                ]
            }
        });
    });

    const feedbackBlockForm = document.querySelectorAll('.feedback-block__form');
    [...feedbackBlockForm].forEach(i => {
        sendForm(i, {
            pattern: {
                phone: /^\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d$/,
                name: /^[а-яё ]{2,}$/gi
            },
            method: {
                '.feedback-block__form-input_name': [
                    ['notEmpty'],
                    ['pattern', 'name']
                ],
                '.feedback-block__form-input_phone': [
                    ['notEmpty'],
                    ['pattern', 'phone']
                ],
                '.checkbox__input': [
                    ['isChecked']
                ]
            }
        });
    });

    // priceList
    const priceList = new PriceList({
        main: '.popup-dialog-repair-types',
        tabsHeader: '.nav-list-popup-repair',
        tabsContent: '.popup-repair-types-content'
    });
    priceList.init();


})();