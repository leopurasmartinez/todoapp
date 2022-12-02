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
    path: '/activetodos',
    name: 'ActiveTodos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Todo/Active.vue')
  },
  {
    path: '/donetodos',
    name: 'DoneTodos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Todo/Done.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
