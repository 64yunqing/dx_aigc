# 字节面试题

- 准确清晰的表达(逻辑，自信，睿智)
- 专业术语的表达
- 深度扩展，结合应用场景

- 学习面试题本身
    - 泛前端基础， 扎实，深度，穷追猛打
    - 中小型公司的面试惯性挂掉
    

- 箭头函数的this指向
    - 责任 准确回答

    箭头函数是es6中引入的一种更加简洁的函数表达方式。它与普通函数不同，它**没有自己的this**，而是要继承外部上下文的this。

    - 区别
    普通函数在调用时，this 取决于**调用方式**。 而箭头函数不会根据调用方式而改变。
    箭头函数的this是**静态**的，在定义时决定，绑定到定义时上下文，**词法作用域**决定。

    - 箭头函数适合 避免this 动态变化的场景。
        类的定义中 添加事件处理函数 this，只想对象
        ```
        class EditInPlace{
            constructor(container){
                this.container = container
                // this.container.addEventListener('click',this.edit,false)
                // this.container.addEventListener('click',this.edit.bind(this),false)
                this.container.addEventListener('click',()=> this.edit())
            }
            edit(){
                console.log(this) // this.container 而不是 this
            }
        }
        ```


- cors跨域的底层
    - 请介绍下跨域
    CORS 跨域资源共享 Cross-Origin Resource Sharing

    - 什么是跨域
    跨域是指当浏览器在一个域名(Origin)下的页面，向另一个域名、子域、协议、端口的服务器请求资源时，会触发浏览器的同源策略(Same-origin policy)
    - 同源策略
        是一种浏览器的安全机制，目的是防止不同源的网页之间的互相访问数据，造成潜在的安全问题。
    - CORS
        它是为了解决跨域请求的限制而引入的后端解决方案。
        通过设置特定的HTTP响应头，服务器名确哪些域名可以访问资源。
    - 响应头
        Access-Control-Allow-Origin: * 白名单
        Access-Control-Allow-Credentials: true 允许携带cookie
        Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
        Access-Control-Max-Age: 86400
    - 简单请求
        GET、POST、HEAD
        请求头中只包含 Accept Accept-Language Content-Language Content-Type application/x-www-form-urlencodeed text/plain
        cors  Access-control-Allow-Origin 响应头来允许跨域

        - 复杂请求
            PUT/DELETE
            浏览器在发送正式请求前，先发一个OPTINOS请求，预检请求
            询问请求方法，请求头是否被允许。
        -   `Access-Control-Allow-Origin`: 指定允许访问的域名。
        -   `Access-Control-Allow-Methods`: 允许的 HTTP 请求方法，如 `GET`、`POST`、`PUT`、`DELETE`。
        -   `Access-Control-Allow-Headers`: 允许的自定义请求头（如 `X-Custom-Header`）。
        -   `Access-Control-Max-Age`: 指定预检请求的结果可以被缓存的时间，减少预检请求的频率。
- Access-Control-Allow-Crifentials: true  cookie

- 矩阵中找值
    - 0(m*n) 暴力破解法
    - 二分查找法  矩阵  排序的  开始和结束

- 算法概念的本质
    - 排好序
    - 不断调整区间(对半)，直到找到结束
    - 矩阵二分，常考题
    - 时间复杂度O(m+n)

### setTimeout 在哪里执行

- 执行位置
    setTimeout *回调函数* 会在定时时间到了后推送到宏任务队列中。
    事件循环会在处理完当前执行栈中的同步代码和微任务队列中的任务后，
    执行宏任务队列中的任务。

- 任务队列
    setTimeout 属于宏任务，而微任务(Promise/nextTick) 在宏任务之前执行。
    event loop 确保了任务的有序执行和异步操作的协调。