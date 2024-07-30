const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors')
const {bodyParser} = require('@koa/bodyparser');
const userRouter = require('./routes/index.js');

app.use(cors()) // 允许跨域
app.use(bodyParser())
// app.use(userRouter.routes(),userRouter.allowedMethods());

// 生效路由
userRouter(app)

app.listen(3000,() => {
    console.log('项目已启动');
});