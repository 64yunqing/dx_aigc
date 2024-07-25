const http = require('http');

http.createServer((req,res) => {
    console.log(req.url);
    // res.end('Welcome to Node')
    if(req.url === '/index'){
        const content = fs.readFileSync('./index.html',{encoding:'utf-8'})

        res.end(content)
    }
}).listen(3000)
