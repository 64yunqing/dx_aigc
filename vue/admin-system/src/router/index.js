import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

const routes = [
    {
        path:'/',
        redirect: '/dashboard'
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页',
                    noAuth: true
                },
                component: () => import('../views/Dashboard.vue')
            },
            {
                path: '/system-user',
                name: 'system-user',
                meta: {
                    title: '用户管理',
                    permiss: '11'
                },
                component: () => import('../views/System-user.vue')
            },
            {
                path: '/system-role',
                name: 'system-role',
                meta: {
                    title: '角色管理',
                    permiss: '12'
                },
                component: () => import('../views/System-role.vue')
            }
        ]
    },
    {
        path:'/login',
        meta: {
            title: '登录',
            noAuth: true
        },
        component: () => import('../views/Login.vue')
    },
    {
        path: '/403',
        meta: {
            title: '403',
            noAuth: true
        },
        component: ()=>import('../views/403.vue')
    },
    {
        path: '/404',
        meta: {
            title: '404',
            noAuth: true
        },
        component: ()=>import('../views/404.vue')
    },
    {
        path:'/:path(.*)',
        redirect:'/404'
    }
]
// url  传统url 跟后端一样 
// 自己人用的， 浏览器不支持， 不会换一下啊
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    const role = localStorage.getItem("ms_name") || 'admin';
    const permiss = {
        'admin': ['1', '11', '12'],
        'user': ['1', '11']
    }
    // console.log(role, permiss[role], permiss[role].includes(to.meta.permiss))
    // if (!role && !to.meta.noAuth !== true) {
    //     next('/login')
    // } else if ( !permiss[role].includes(to.meta.permiss)) {
    //     next('/403')
    // } else {
    //     next()
    // }console.log(role, permiss[role], permiss[role].includes(to.meta.permiss))
    if (!role && !to.meta.noAuth !== true) {
        next('/login')
    } else if (typeof to.meta.permiss == 'string'
        && !permiss[role].includes(to.meta.permiss)
     ){
        next('/403')
    } else {
        next() // 不需要登录或者已经登录了，有相应权限的页面
    }
})

export default router