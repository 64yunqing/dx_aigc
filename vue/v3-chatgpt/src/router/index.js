// ->component
import { createRouter,createWebHashHistory } from "vue-router";
// 路由对象
// 锚链接
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            // 页面级别组件 views 
            component: () => import('../views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            // 页面级别组件 views 
            component: () => import('../views/About.vue')
        }
    ]
})

export default router;