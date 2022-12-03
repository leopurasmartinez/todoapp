import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/active',
    name: 'ActiveTodos',
    component: () => import('../views/Todo/Active.vue')
  },
  {
    path: '/completed',
    name: 'DoneTodos',
    component: () => import('../views/Todo/Done.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
