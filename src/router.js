import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: () => import('./views/Home.vue'),children:[
      { path: '/home', component: () => import('./views/Home.vue') }
    ]},
    { path: '/starinfo/:id', name:'starinfo', component: () => import('./views/Starinfo.vue') },
    { path: '/ticket', component: () => import('./views/ticket.vue') }, 
    {
      path: '/Receiving-address', component: () => import('./views/Receiving-address.vue'),
      beforeEnter: ((to, from, next) => {
        let flag = false
        if (flag) {
          next('/login')
        } else (
          next()
        )

        next()
      })
    },
    {
      path: '/Pe', component: () => import('./views/Pe.vue'), children: [
        { path: 'Pechlid', component: () => import('./views/Pechild.vue') },
        { path: 'Pechlid1', component: () => import('./views/Pechild1.vue') },
        // { path: 'Pechlid2', component: () => import('./views/Pechild2.vue') },
        // { path: 'Pechlid3', component: () => import('./views/Pechild3.vue') },
        // { path: 'Pechlid4', component: () => import('./views/Pechild4.vue') },
        // { path: 'Pechlid5', component: () => import('./views/Pechild5.vue') },
      ],
      beforeEnter: ((to, from, next) => {
        let flag = false
        if (flag) {
          next('/login')
        } else (
          next()
        )

        next()
      })
    },
    {
      path: '/city', component: () => import('./views/City.vue'),
      beforeEnter: ((to, from, next) => {
        window.console.log('独享')
        next()
      })
    },

    {
      path: '/login', component: () => import('./views/Login.vue'),
      beforeEnter: ((to, from, next) => {
        window.console.log('独享')
        next()
      })
    },
    {
      path: '/center', component: () => import('./views/Setting.vue'),
      beforeEnter: ((to, from, next) => {
        window.console.log('独享')
        next()
      })
    },

    {
      path: '/Newuser', component: () => import('./views/Newser.vue'),
      beforeEnter: ((to, from, next) => {
        let flag = false
        if (flag) {
          next('/login')
        } else (
          next()
        )

        next()
      })
    },



    ////
    {
      path: '/',
      component: () => import('./views/Home.vue')
    },
    { 
      path:'/overseas',component:()=>import('./views/Overseas.vue')
    },
    { 
      path:'/perform/:id',component:()=>import('./views/Perform.vue')
    },
    { 
      path:'/perform',component:()=>import('./views/Perform.vue'),
      children:[
        {path:'',redirect:'/Perform/quanbu'}
      ]
    },
    {
      path:'/detail',component:()=>import('./views/Detailitem.vue')
    },

  ]
})

export default router
