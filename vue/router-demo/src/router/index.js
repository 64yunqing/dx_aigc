import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path:'/login',
      component:()=>import('../views/Login.vue')
    },
    {
    path:'/home',
    component: () => import('../views/Home.vue'),
    children:[
      {
        path:'/home',
        redirect:'/class'
      },
      {
      path:'/class',
      component:()=>import('../views/pages/Class.vue')
      }
    ]
    }
    
  ]
})

export default router
