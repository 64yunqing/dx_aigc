import { createRouter , createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/bot',
        component:() => import('../views/Bot.vue')  
    },
    {
        path:'/hot/:id',
        name:'hot',
        component:() => import('../views/Hot.vue'),
        props:true 
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
// export {router}