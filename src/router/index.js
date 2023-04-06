import { createRouter, createWebHistory } from 'vue-router'
import userView from '../views/userView.vue'
import multiUserView from '../views/multiUserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: userView
  },
  {
    path: '/:id',
    name: 'multiUserView',
    component: multiUserView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
