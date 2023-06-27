import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Centrale Méditerranée',
      component: () => import('../views/Charte.vue')
    },
    {
      path: '/fondation',
      name: 'La Fondation',
      component: () => import('../views/Fondation.vue')
    },
    {
      path: '/alumni',
      name: 'Alumni',
      component: () => import('../views/Alumni.vue')
    },
    {
      path: '/exectutive-education',
      name: 'Executive Education',
      component: () => import('../views/ExEd.vue')
    },
    {
      path: '/le-deck',
      name: 'Le Deck',
      component: () => import('../views/LeDeck.vue')
    }
  ]
})

export default router;
