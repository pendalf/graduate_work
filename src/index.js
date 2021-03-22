import './css/style.css';
import './scss/style.scss';
import './index.html';

import phoneList from './modules/phoneList';
import toggleMenu from './modules/toggleMenu';

'use strict';
(() => {
    // Phone list in header
    phoneList();

    // Menu
    toggleMenu();

})();