# vue-router 手写

- router 初始化以及配置
- 路由守卫 
    router.beforeEach
- 路由懒加载
    {
        path:'/about',
        component: () => import('./views/About.vue')
    }
    首页 Home.vue
- router-link router-view
- vue 组件
    - 自定义组件
    - transition 内置组件
    - 全局组件 在任何地方都可以直接访问
        app.component('router-link',RouterLink)
        - 如果组件没有引入， dom 会把它当做一般标签来解析
        - app.component 
        - app.use(router)

- router-link 是怎么工作的？
    - 来自于vue-router
    - vue.component() 全局组件的理解
    - vue.use() vue向插件生态注入
    - router 插件 准备号install方法
- <slot />
    - 插槽
    - 将组件的内部交给外部去自定义
    - 提升了组件的可复用性
- http://localhost:5173/posts/:id#/about
    - 协议 http://
    - 域名  localhost
    - 端口 PORT 5173
    - hash #/about 
    - path /posts
    - params :id
    - query ?a=1&b=2
- 高级的响应式
    - ref/reactive
    - 在模板，在组件，在任何地方 都会更新