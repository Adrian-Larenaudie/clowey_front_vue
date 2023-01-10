import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: () => import('../views/AccueilView.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/OngletPortfolioView.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FaqView.vue'),
    },
  ]
})

export default router
