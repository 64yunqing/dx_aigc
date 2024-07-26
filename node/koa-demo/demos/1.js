const Koa = require('koa');
const app = new Koa()

const main = (ctx) => {
    // console.log(ctx.req);
    // console.log(ctx.req.url);
    // console.log(ctx.request.url);
    // console.log(ctx.url);
    // ctx.response.end('Hello World')
    // ctx.res.end('Hello World')
    ctx.body = 'Hello koa'
}

app.use(main)

app.listen(3000,() => {
    console.log('listening on 3000');
})