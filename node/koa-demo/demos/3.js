const Koa = require('koa');
const app = new Koa()
const router = require('koa-route');

const one = (ctx,next) => {
    console.log(1);
}
const two = (ctx,next) => {
    console.log(2);
}
const three = (ctx,next) => {
    console.log(3);
}

const logger = (ctx,next) => {
    console.log(`${ctx.ure}--${ctx.method}}--${new Date()}`);
}
const home = (ctx) => {
  ctx.body ='<h2>首页</h2>'
}
const about = (ctx) => {
  ctx.body ='<a href="/home">去首页</a>'
}


app.use(one)
app.use(two)
app.use(three)
app.use(logger)  // 中间件
app.use(router.get('/home',home))
app.use(router.get('/about',about))

app.listen(3000, () => {
  console.log('listening on 3000');
})