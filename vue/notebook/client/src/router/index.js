import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/login',
      component: () => import('../views/Login.vue'),
      meta:{
        title:'登录'
      }
    },
    {
      path:'/register',
      component: () => import('../views/Register.vue'),
      meta:{
        title:'注册'
      }
    },
    
  ]
})
// 全局的路由守卫
const whitePath = ['/login','register']
router.beforeEach((to,from,next) => {
  document.title = to.meta.title
  // console.log(to);
  if(!whitePath.includes(to.path)){ // 需要登录
    if(!localStorage.getItem('userInfo')){ // 没有登录
      router.push('/login')
      return
    }
    next()
    return
  }
  next()
})

export default router
