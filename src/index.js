'use strict';

import Page from './modules/Page';

const wrap = document.querySelector('.wrap');
const page = new Page(wrap);

page.initEventListeners();
page.render();