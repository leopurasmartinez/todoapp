import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AllTodos',
    component: () => import('../views/Todo/All.vue')
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
