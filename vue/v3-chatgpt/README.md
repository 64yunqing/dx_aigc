# 企业级vue3开发,商业项目
- 项目架构
    - vue-router 单页应用,路由功能
    - http://localhost:5173/#/

- 理解项目需求
    - url 改变 #hash 不会刷新当前页面， 单页应用的要求
    - hashChange router-view 相应 的组件显示到router-view 位置就好了
    - 路由分成两种 hashHistory #home 兼容性更好 和 history
        localhost:5173/#/home
        localhost:5173/#/about
    - 来自锚链接 的原生能力
        <a href="#/home">Home</a> <a name="home"></a>
        url + '#/home' 同时把我们送到home部分，页面不会刷新

- tailwindcss  原子css,外包的好帮手  95%css不用写了
    - npm install -D tailwindcss postcss autoprefixer
    - npx tailwindcss init -p

- tailwindcss 
    - 原子css
    - 4   1rem
    - py  ml
    - css 带来了语义化

- 复杂的页面状态
    - input 兼具api-key 保存openai 聊天
    - 状态驱动界面

- 手写chatgpt
    - openai 聊天模型
        - model: gpt-3.5-turbo
        - messages 上下文
            最近几次的聊天内容都发给llm 上下文越多，反馈越准确
        - role
            system   chat bot 角色
            assistant  openai 派出了一个助理
            user  提问
            assistant  回答