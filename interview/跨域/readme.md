# 为什么会跨域？
 - 浏览器存在同源策略 (安全性)
 - http: // 121.101.4.0  :3000  /home 
 - 协议 域名 端口 都相同才叫同源

 # 解决方案
 1. JSONP
    前端script标签的src属性不受浏览器的同源策略限制，携带参数callback向后端发送请求，并在window全局添加callback参数，把这个参数传给后端，让后端把传回来的字符串把需要输出的数据拼接成一个callback调用形式的字符串，并且将返回的数据作为callback的实参，前端拿到这个字符串视为函数调用直接执行callback函数，拿到数据

    需要前后端配合，且只能发GET请求


 2. cors
    后端接收到状态码，后端响应头加入一些额外的字段比如Access-Control-Allow-Origin: *  允许访问资源的源  允许的请求方式等，来通知浏览器此时同源策略不需要生效


 3. WebSocket
    socket协议不受同源策略的限制


 4. postMessage
    父级页面使用postMessage向使用iframe内嵌在自己内部的子级页面进行相互通讯


 5. document.domain
    

 6. nginx
    在服务器上安装一个nginx，它提供了配置文件，只需要修改一些配置项就可以实现启动一个代理服务，node代理一样