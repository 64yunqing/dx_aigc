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
        - bundler
    - entry -> output
        - 处理想做的事情 module 模块功能
            js es6+ -> es5 ？兼容性更好
        - 文件的类型
            - stylus   .stylus -> .css
            - js        es6 -> es5
            - ts         ts -> js   -> es5
            - .vue      .vue -> .js + html 
        - loader 加速器 babel-loader -> babel 转译 es6 -> es5
    - entry  main.js  ->  module  ->  rules -> test  文件类型  -> use -> loader

    - babel  js 转译  es6+ -> es5
        - babel-loader 加载js 到babel 工作间  加载器
        - @babel/core  转译器核心功能
        - @babel/preset-env  预处理方式

- vite webpack 有什么区别
    - vite 简单 快  bundleless 不需要打包
    - webpack 从入口到出口，打包成 bundle.js 文件  100+文件
        慢
    - webpack 学习成本比较高，配置复杂，适合大型定制类项目的需求
    - vite 方便快捷
        stylus 为例子，vite 只需要安装stylus  插件即可
        而webpack 需要改配置 loader 等一堆

- 三数之和
    - 时间复杂度 
        - 暴力破解 O(n^2) O(n^3)
        - O(nlogn)
        - O(n)
        - O(1)
    - 两数之和
        hashTable数据结构 O(n) 以空间换时间
        Map has  get  set  es6 新的数据结构
        求和变差值，存到Map
    - 三数之和
        - 如何逐步确定每个数的过程
        - 第一个数   O(n) 排序 ( 相同的元素在一起 )
            跳过相同的元素  
        - 双指针 左边比右边的小
            target 
        - 排序 nums  重复的数字 
    - 大数之和

- 发布订阅模式 (event bus) 事件总线
    自定义事件
    - 发布者
    - 订阅者
    - 关系   cache =[]
    - key   
    - once  
    - off   移除订阅者
    - on   收集订阅者
    - emit 触发事件 通知所有订阅者

    - 手写题(高频) 和call等有区分度
    - EventEmitter

- type 和 interface 区别
    ts 的最高频考题
    都可以用于类型声明
    - type 类型别名，可以给简单数据提供类型别名，而interface 只能给对象类型声明
    - interface 支持 继承
    - interface ？ 可选 ; 隔开
