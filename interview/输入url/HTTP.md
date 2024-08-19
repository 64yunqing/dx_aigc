# HTTP 0.9  --- 超文本传输协议
- 实验室传输html文本
- 只有请求行    GET/index.html
- ASCII码 编码html资源

# HTTP 1.0 
- 0.9的问题：多种类型的资源文件需要被传输
- 增加了请求头，响应头 --- 实现客户端和服务端的交流
    请求头：
        accept:text/html
        accept-encoding:gzip,deflate,br
        accept-Charset:utf-8
        accept-language:zh-CN,zh;q=0.9,en;q=0.8,pt;q=0.7

    响应头：
        content-encoding:br
        content-type:text/html; charset=utf-8

- http状态码

# HTTP 1.1
 - 1.0的缺点：HTTP短连接
 - 1.1建立了长连接：持久连接

 - http对头阻塞：在一个tcp连接中存在多个http请求，前一个http请求的响应没有返回，后一个http请求无法发送

 - 对虚拟机的支持
 
 - 请求头增加HOST

 - Cookie 

 # HTTP 2.0
 