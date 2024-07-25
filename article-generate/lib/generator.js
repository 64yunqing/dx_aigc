const { randomInt, createRandomPicker } = require('./random.js')

// 生成文章
function generate(title, { corpus, min = 1000, max = 2000 }) {
  const articleLength = randomInt(min, max)
  const { famous, bosh_before, bosh, conclude, said } = corpus

  const [pickFamous, pickBoshBefore, pickBosh, pickConclude, pickSaid] 
  = [famous, bosh_before, bosh, conclude, said].map(createRandomPicker)

  const article = []
  let totalLength = 0

  while(totalLength < articleLength ) { // 生成文章
    let section = ''
    const sectionLength = randomInt(100, 500)
    while (section.length < sectionLength) {
      const n = randomInt(0, 100)
      if (n < 20) { // 名人名言
        section += sentence(pickFamous, {said: pickSaid, conclude: pickConclude})
      } else if (n < 50) { // 前置废话
        section += sentence(pickBoshBefore, {title}) + sentence(pickBosh, {title})
      } else { // 废话
        section += sentence(pickBosh, {title})
      }
    }

    totalLength += section.length
    article.push(section)
  }

  return article
}

// 文本替换
function sentence(pick, replacer) {
  let res = pick()  // xxxxxx{{said}}xxxxx{{conclued}}x
  for (let key in replacer) {
    // new RegExp(`{{${key}}}`, 'g')
    // replacer[key]()
    res = res.replace(
      new RegExp(`{{${key}}}`, 'g'), 
      typeof replacer[key] === 'function' ? replacer[key]() : replacer[key]
    )
  }
  return res
}

module.exports = {
  generate,
  sentence
}