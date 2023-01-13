import { createRouter, createWebHistory } from 'vue-router'
// import de toutes les vues admin et public
import * as Admin from '@/views/admin';
import * as Public from '@/views/public';
// import de la vue login
import Login from '@/views/auth/Login.vue';
// import du gardien qui redirige vers login sur les routes admin si il n'y a pas de token en local storage
import { authGuard } from '@/_helpers/auth-guard.js';

// déclaration des routes
const routes = [
    {
        // les routes publiques
        path: '/',
        name: 'public',
        component: Public.Layout,
        children: [
            { path: '', name: 'home', component: Public.Home },
            { path: 'portfolio/:category', name: 'portfolio', component: Public.OngletPortfolio },
            { path: 'faq', name: 'faq', component: Public.Faq },
        ]
    },

    {
        // les routes admin
        path: '/admin',
        name: 'admin',
        component: Admin.Layout,
        children: [
            { path: 'work', name: 'work', component: Admin.Work },
        ]
    },
  
    {
        path: '/login', name: 'login', component: Login,
    },
  
    {
        // si la route demandé n'existe pas on redirige vers la home (on pourrait aussi jouer une vue erreur)
        path: '/:pathMatch(.*)*', redirect: '/',
    },

  ];

// Gestion de l'historisation du routing
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

// Déclanchement du gardien de route sur les routes admin
router.beforeEach((to, from, next) => {
    /// on dit que si la route contient admin
    if(to.matched[0].name === 'admin') {
        // on doit passer par notre gardien
        authGuard();
    }
    next();
});

export default router
