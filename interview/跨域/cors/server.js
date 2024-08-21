const http = require('http');

http.createServer(function (req, res) {
    // 开启cors
    res.writeHead(200,{
        // 允许的源
        'Access-Control-Allow-Origin': '*', // 'http://localhost:8080'
        'access-control-allow-methods':'GET,POST,PUT,DELETE,OPTIONS',
    })

  res.end('hello world')



}).listen(3000);