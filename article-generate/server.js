const http = require('http');
const fs = require('fs');
const { article, handle } = require('./index.js')

handle()

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    let html = fs.readFileSync(__dirname + '/index.html', 'utf8')
    const reg = new RegExp('{{article}}', 'g')
    html = html.replace(reg, article.join('<br/>'))
    res.end(html)
  }
})

server.listen(3000)