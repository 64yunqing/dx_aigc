import { createRouter,createWebHashHistory } from 'vue-router'
// https://juejin.cn/post/7346524071183630355
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'Home',
            component:()=>import('../views/Home.vue')
        },
        {
            path:'/post/:id',
            name:'Detail',
            component:()=>import('../views/Detail.vue')
        }
    ]
})

export  default router