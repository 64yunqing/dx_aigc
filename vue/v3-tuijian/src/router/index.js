import { createRouter,createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/post/:id',
            name: 'Detail',
            component: () => import('../views/Detail.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/cart',
            name: 'Cart',
            meta:{
                requiresAuth: true 
            },
            component: () => import('../views/Cart.vue')
        }
    ]
})
// 路由守卫
router.beforeEach((to, from, next) => {
    // console.log(to, from, '??????')
    // next({path:'/login'})
    if(to.meta.requiresAuth){
        if(localStorage.getItem('isLoggedIn')){
            next()
        }else{
            next({path:'/login'})
        }
    }else{
        next()
    }
})
export default router