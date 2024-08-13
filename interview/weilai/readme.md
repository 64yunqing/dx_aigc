# 蔚来

- 好公司
    300 一天
- 人才截胡
    - 不简单，也不太难
- 三数之和
- 手写发布订阅 设计模式
- interface和type 区别
- 泛型
- vite 和 webpack 区别
    - 工程化套件 
    - 开发阶段
        打包阶段
        上线阶段
    - stylus -> css
    - ts -> js
    - js -> es6+ -> es5
    - .vue -> loader pulgin

    - node 命令行工具启动工程化
    - 5173 端口启动 web-server  index.html 首页
        src/main.js 入口 App.vue 根组件渲染出来 

    - webpack 三巨头
        - webpack 打包功能核心
        - webpack-cli 命令行工具
        - webpack-dev-server 服务器

    - 运行流程
        - npm run dev 脚本开始  webpack dev --open 
        - webpack-cli 命令行工具接到命令行的指令 
            webpack 先打包
            server 8080
            -- open 启动打开浏览器
        - webpack 打包
            - 读取根目录下的 webpack.config.js 配置文件
                - 模块化的 module.exports 
                - entry(入口 main.js) + output (bundle.js)
                - devServer port + contentBase(首页)
                - plugins htmlwebpackplugin
