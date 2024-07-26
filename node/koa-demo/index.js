const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url == '/home'){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end('<h1>hello world</h1>');
    }else{
    res.end('404')
    }
})

server.listen(3000,() => {
    console.log('server on 3000')
})