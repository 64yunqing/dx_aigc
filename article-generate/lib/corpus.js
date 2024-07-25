const fs = require('fs');
const path = require('path');

function loadCorpus(src) {
  const _path = path.resolve(__dirname, '..', src)
  const data = fs.readFileSync(_path, 'utf8')
  return JSON.parse(data)
}

// 保存文章
function saveCorpus(title, article) {
  const _path = path.resolve(__dirname, '..', 'output')
  const time = Date.now()
  const file = path.resolve(_path, `${title}${time}.txt`)
  
  const text = `${title}\n\n       ${article.join('\n       ')}`
  fs.writeFileSync(file, text)
}

module.exports = {
  loadCorpus,
  saveCorpus
}

