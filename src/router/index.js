import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'La marque',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/charte-graphique',
    name: 'Charte graphique',
    component: () => import(/* webpackChunkName: "about" */ '../views/Charte.vue')
  },
  {
    path: '/fondation',
    name: 'La Fondation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Fondation.vue')
  },
  {
    path: '/alumni',
    name: 'Alumni',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Alumni.vue')
  },
  {
    path: '/exectutive-education',
    name: 'Executive Education',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ExEd.vue')
  },
  {
    path: '/le-deck',
    name: 'Le Deck',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LeDeck.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
