import './css/style.css';
import './scss/style.scss';
import './index.html';

import phoneList from './modules/phoneList';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import accordeon from './modules/accordeon';

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
        ['.director button', '.popup-consultation']
    ]);

    // accordeon
    accordeon();

})();