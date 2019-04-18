import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: () => import('./views/Home.vue')},
    { path: '/starinfo', component: () => import('./views/Starinfo.vue') },
    { path: '/ticket', component: () => import('./views/ticket.vue') }
  ]
})

export default router
