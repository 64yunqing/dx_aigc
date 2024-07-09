# 节流

- 在一定时间内一定执行一次
    闭包
    - last deferTimer
    - 第一次直接 执行，last 有了值
    - if(last && now - last < delay) 不可以执行的时间内的频繁触发
    - last 更新 else 执行 执行
    - 如果用户不触发keyup了，如何让最后一次keyup 再执行一次呢？
        killTimeout + setTimeout    last 更新

- 性能优化
- 闭包  
    定时器

## 浏览器底层原理
- 请介绍浏览器内核
    css 内核不同，兼容性  微软
    -webkit-tap-highlight-color:transparent;
    -webkit-scroll-behavior:smooth;
    display:-webkit-flex;
    - 每家浏览器厂商内核不一样  
        webkit (内核) safari (浏览器) chrome (浏览器) 移动端统一，没啥兼容性的难度
        chrome 已经升级到 blink 内核，webkit 升级版
        360浏览器... 套了 webkit 的壳子
        Trident  IE
        Gecko firefox 
    - 分成两部分
        1. 渲染引擎 render engine html + css 
        2. JS  引擎  v8
        在前端两个都用
        在后端 只需要JS 引擎

    - 渲染引擎是怎么工作的？
        输入url 到 看到页面 
        1. 渲染引擎 印刷机 图片 由渲染引擎画出来的，电脑的刷帧率
        经历过程    性能优化 
        - html 解析器 html -> dom 树
        - css 解析 css OM 树
        - 渲染树 DOM + CSS OM -> 渲染树
        - 图层布局计算模块 Layout 树 盒子模型
        - 视图绘制模块  页面图
        最开始显示的静态页面
    为什么css 要在head 引入
    script 要放在底部
    - JS 引擎介入

    css 是阻塞的吗？ 会阻塞的 渲染引擎工作的时候阻塞
    html 解析 

    css 选择器的性能
    * 性能不好 匹配所有元素
    * {
        margin: 0;
        padding: 0;
    }

