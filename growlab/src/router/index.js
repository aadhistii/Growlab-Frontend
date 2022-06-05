import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/home.vue'
import Cari from '../views/cari-reviewer/cari-reviewer.vue'
import Payment from '../views/payment/payment.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/log-sign-in',
    name: 'masuk',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/log-sign-in/log-sign-in.vue')
  },
  {
    path: '/cari-reviewer',
    name: 'cari',
    component: Cari
  },
  {
    path: '/option',
    name: 'option',
    component: Option
  },
  {
    path: '/payment',
    name: 'payment',
    component: Payment
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
