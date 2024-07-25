const { generate } = require('./lib/generator.js');
const { createRandomPicker } = require('./lib/random.js')
const {loadCorpus, saveCorpus} = require('./lib/corpus.js')


let article = []
function handle() {
  const corpus = loadCorpus('corpus/data.json')
  const title = createRandomPicker(corpus.title)()
  article.push(...generate(title, {corpus}))
  saveCorpus(title, article)
}

module.exports = {
  article,
  handle
}













// const _path = path.resolve(__dirname, 'corpus/data.json')
// fs.readFile(_path, {encoding: 'utf-8'}, (err, data) => {
//   if (!err) {
//     console.log(data);
//   }
// })



