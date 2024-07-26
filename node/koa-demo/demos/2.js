const Koa = require('koa');
const app = new Koa()
const fs = require('fs')
const main = (ctx) => {
    if(ctx.url === '/'){
        ctx.body = 'Hello World'
    } else if (ctx.url === '/home'){
        ctx.body = 'Hello Home'
    } else if(ctx.url === '/about'){
        // const content = fs.readFileSync('./about.html')
        // ctx.body = content.toSting()
    
        const content = fs.createReadStream('./about.html')
        ctx.body = content
    }
}
app.use(main)

app.listen(3000,() => {
    console.log('listening on 3000');
})