// vite 容易上手，webpack 有难度，要配置
// commonjs node 模块化方案 
// 启动一个server 5173 
// index.html 首页  
// src/main.js 入口 
// 打包 bundle webpack 一切静态资源皆可打包
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development', // 开发环境而打包 
    entry: './src/main.js', // 入口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 8080,
        hot: true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}