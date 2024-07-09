# hash router

- https协议是无状态，服务器端是不可以主动向浏览器推送内容
- 请求新的资源 / -> /page2，重新发送请求
- 服务器有返回所有的html
- 单页应用SPA Signle Page Application带来的全新用户体验
    加载快，不会白屏  页面快是第一要义
    - url改变 浏览器地址栏改变 但是不能去重刷整个页面 #/page2
    - 锚链接
    - hashchange事件 ajax DOM router-view views/Component
- 既不能跳页，又要动态更新界面，SPA -> 手机App 差不多

- handler.call(this)
    可以在处理函数中拿到路由对象等