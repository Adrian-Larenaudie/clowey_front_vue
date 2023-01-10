import { createStore } from 'vuex';

import admin from './modules/admin.js';
import categories from './modules/categories.js';
import faq from './modules/faq.js';
import newsletter from './modules/newsletter.js';
import presentation from './modules/presentation.js';
import socialNetworks from './modules/socialNetworks.js';
import works from './modules/works.js';

export default createStore({
  modules: {
    admin,
    categories,
    faq,
    newsletter,
    presentation,
    socialNetworks,
    works,
  },
});