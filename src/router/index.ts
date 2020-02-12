import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Norris',
    component: () => import('../views/Norris.vue')
  },
  {
    path: '/Norris',
    name: 'Norris',
    component: () => import('../views/Norris.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
