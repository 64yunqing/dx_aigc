const express = require('express');
// ssr 
const Vue = require('vue');
const renderer3 = require('@vue/server-renderer');
const vue3Copmile = require('@vue/compiler-ssr');

const app = express();
// 服务器渲染选项组件
const vueapp = {
    template:`<div>
        <h1 @click="add">{{num}}</h1>
        <ul>
            <li v-for="(todo, n) in todos">{{n+1}}--{{todo}}</li>
        </ul>
    </div>`,
    data() {
        return {
            num: 1,
            todos: ['吃饭','睡觉','学习Vue']
        }
    },
    method:{
        add() {
            this.num++;
        }
    }
}
// ssr 
vueapp.ssrRender = new Function('require',
    vue3Copmile.compile(vueapp.template).code
)(require)

// 路由
app.get('/', async function(req, res){
    // SSR APP 
    let vapp = Vue.createSSRApp(vueapp)
    let html = await renderer3.renderToString(vapp)
    const title = 'Vue SSR'
    let ret =  `
    <html>
        <head>
            <title>${title}</title>
        </head>
        <body>
            <div id="#app">
                ${html}
            </div>
        </body>
    </html>
    `

    res.send(ret);
})

app.listen(1314,()=>{
    console.log('server running');
})