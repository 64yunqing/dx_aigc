import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'
import { ref, inject } from 'vue'


// 单例的责任
export const createRouter = (options) => {
    return  new Router(options)
}

export const createWebHashHistory = () => {
    function bindEvents(fn) {
        window.addEventListener('hashchange', fn)
    }
    // history 对象
    return {
        url: window.location.hash.slice(1) || '/',
        bindEvents
    }
}

export const createWebHistory = () => {
    
}

// 标记一下  router 要向全世界暴露
const ROUTER_KEY = '__router__'
// use 开头的是一派 hooks 函数式编程
export const useRouter = () => {
    return inject(ROUTER_KEY)
}


class Router {
    constructor(options) {
        
        this.history = options.history
        this.routes = options.routes
        this.current = ref(this.history.url)
        this.history.bindEvents(() => {
            // console.log('//////////')
            // console.log(this.current.value, window.location.hash.slice(1))
            this.current.value = window.location.hash.slice(1)
        })
    }
    // use 调用 插件install
    install(app) {
        // 全局声明有一个router 全局使用的对象
        app.provide(ROUTER_KEY, this)
        console.log('准备与vue 对接', app)
        app.component('router-link', RouterLink)
        app.component('router-view', RouterView)
    }
}