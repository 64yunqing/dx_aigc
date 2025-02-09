// commonjs
// node 最简单的后端框架koa
const koa = require('koa');
// 实例化
const app = new koa();  //也是应用
const Router = require('koa-router'); //路由
const router = new Router();
// 新建首页路由
router.get("/", async (ctx) => {
// 响应体
// ctx 这一次请求响应的上下文
    ctx.body = `
    <html>
        <head>
            <title>chatbot</title>
        </head>
        <body>
            <h1>chatbot</h1>
    </html>
    `;
})
// 新建一个叫做chatai的路由
// method,url
// post
// 后端 api 接口数据 json
router.post("/chatai", async (ctx) => {
    ctx.body={
        code:200,
        message:'我是一个机器人'
    }
})
app.listen(3000, () => {
    console.log('服务器启动成功在3000端口');
    
})
// 路由的挂载app
app.use(router.routes());