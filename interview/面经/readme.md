# 司云第一面

- 小公司
    湖南/成都/武汉/苏州  先不要面 
- 20分钟 面试时长
    15分钟 
    boss 在线视频面试
    - 自我介绍
        表达能力
        个人优秀履历 奖 / 奖学金 
        我是如何学习前端的 
        看了书《你不知道的JavaScript》 在社区学习(掘金)  写文章，刷leetcode  vue/react + node 全栈开发
        最近对AI挺感兴趣的 coze + openai 接口 + transformers.js
        AIGC 能力比较牛逼 copilot 工具高效开发
        相信自己可以胜任贵公司的开发工作，
        未来三年的规划是成为一名大前端，AI全栈工程师

- 介绍自己的项目
    逮着项目问

- 八股
    逮着文章问
    - 回流和重绘

- 拿offer
    - 不去的，


- 考题
    - 回流和重绘
- 概念 
    重排
        布局信息发生改变的时候 
    重绘

    html + DOM树 +css OM树 = render tree
    Layout tree 分层 图层的合成
    渲染引擎 -> 绘制

    动态修改 

    重排一定会重绘
    重绘不一定会重排

- 如何优化呢？
    - 从JS 引擎 切换到 浏览器渲染引擎 有点慢
        .style.color
        .style. ....
        减少style，用类名切换

    - 让DOM先下线， 
        display:none
        文档碎片

    - css 动画 或动态效果
        不用style来做， 交给 css 动画(浏览器优化了)

    - 一万条数据怎么渲染 举个例子
        - 文档碎片
        - 定时器
        - requestAnimationFrame 比setTimeout 更靠谱
        刷帧率

    - 减少 offsetwidth offsetheight getBoundingClientRect 等属性的调用,立马触发重绘重排


- git 操作
    - 日常git 提交
    - branch 分支 在自己的分支上写代码
        合并到主分支
    - 规范
        commit 记录
    - log
    - 回退... 比对
    https://liaoxuefeng.com/books/git/time-travel/index.html

- get post 区别
    根据restful 一切皆资源
    GET 请求
    POST 新增
    PATCH/PUT 修改
    DELETE 删除    

- vue 组件通信
    掘金热点文章 https://juejin.cn/post/6999687348120190983?searchId=202408061602121AD7F37BA4A54AF633EA
    - 父子组件通信 defineProps/defineEmits  数据原则  缺点
    - pinia 共享    中央store
    - provide/inject vue-router 源码看到了
    - vuex mutation

- vue2/3 区别
    - 有些老项目
        复杂是 Vue3 比vue2 有优势
    - Component API ref reactive ... 代码的逻辑更好组织
    - vue2 类式编程 this 受限于 data methods computed ... 
- 生命周期
    beforeCreate/created/beforeMount/mounted/beforeUpdate/updated/beforeDestroy/destroyed

    onBeforeMount
    onMounted
    onBeforeUpdate
    onUpdated
    onBeforeUnmount
    onUnmounted
    onActivated
    onDeactivated
    onErrorCaptured
    onRenderTracked
    onRenderTriggered
    - typescript  vue3 全面支持ts 大型项目
    - 响应式原理  defineProperty  proxy
    - diff 算法


- 空对象
    https://juejin.cn/post/7275220813619298367?searchId=20240806162346A0F46F9DE2323B40AC00

- 算法题
    https://juejin.cn/post/6947842412102287373?searchId=202408061703412191FFC0BEB12A527611
- 小公司老板心理
    - 前端基础还可以，  vue 实战能力ok
    