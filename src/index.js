import './css/style.css';
import './scss/style.scss';
import './index.html';

import phoneList from './modules/phoneList';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import accordeon from './modules/accordeon';
import portfolio from './modules/portfolio';
import documents from './modules/documents';
// import SliderCarousel from './modules/SliderCarousel';


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

})();