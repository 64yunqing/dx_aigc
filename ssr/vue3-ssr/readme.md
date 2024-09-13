# vue3 服务器端渲染

- vue3 可以在后端运行
    - 前后端 无所谓 内存和cpu
    vue3 组件 (除了template外) VDOM 响应式 后端

    真实渲染时(界面) DOM/小程序/App/鸿蒙/

- SPA 体验好， 不会白屏 
- SEO 友好
    - 爬虫爬取内容时， 给他们html 
- SSR 
    MVC 模版在服务器端编译 生成html 文件
    - vue template + data    html string  
    <template>
        <div>{{title}}</div>
    </template>
    - vue 服务端运行  ts
    - 组件 Component 类  服务器端
    - VDOM 服务器端 
     Component.template + reactiive data = (平台无关性) html string

- SPA 主流
    - 移动端 入口不在百度 SEO 不重要 
    - PC 端  网站 SEO 重要 关键字搜索进入
        搜索引擎 爬取到完整的html    / html 
        - vue 可以在服务器端运行
            - vue.createSSRAPP
            - component.ssrRender @vue/compiler-ssr
        - @vue/server-renderer 服务端渲染 renderToString
        - @vue/complier-ssr 负责模板的编译

- nuxt 框架 
    掘金就是用这个框架开发的
    