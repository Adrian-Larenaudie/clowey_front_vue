import { createRouter, createWebHistory } from 'vue-router'

import * as Admin from '@/views/admin';
import * as Public from '@/views/public';
import Login from '@/views/auth/Login.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: Public.Layout,
      children: [
        { path: '', name: 'home', component: Public.Home },
        { path: 'portfolio', name: 'portfolio', component: Public.OngletPortfolio },
        { path: 'faq', name: 'faq', component: Public.Faq },
      ]
    },

    {
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
      path: '/:pathMatch(.*)*', redirect: '/'
    },

  ]
})

export default router
