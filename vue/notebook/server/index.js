const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors')
const userRouter = require('./routes/user.js');
const {bodyParser} = require('@koa/bodyparser');


app.use(cors()) // 允许跨域
app.use(bodyParser())
app.use(userRouter.routes(),userRouter.allowedMethods());
app.listen(3000,() => {
    console.log('项目已启动');
});