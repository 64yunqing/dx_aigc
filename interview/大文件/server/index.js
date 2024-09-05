const http = require('http');
const path = require('path');
const multiparty = require('multiparty');
const fse = require('fs-extra');

// 存放切片的地方
const UPLOAD_DIR = path.resolve(__dirname, '.', 'qiepian')

// 解析post参数
function resolvePost(req) {
  return new Promise((resolve, reject) => {
    req.on('data', (data) => {
      resolve(JSON.parse(data.toString()))
    })
  })
}

// 
function pipeStream(path, writeStream) {
  return new Promise((resolve, reject) => {
    const readStream = fse.createReadStream(path)
    readStream.on('end', () => {
      fse.removeSync(path)  // 被读取完的切片移除掉
      resolve()
    })
    readStream.pipe(writeStream)
  })
}

// 合并切片
async function mergeFileChunk(filePath, fileName, size) {
  // 拿到所有切片所在文件夹的路径
  const chunkDir = path.resolve(UPLOAD_DIR, `${fileName}-chunks`)
  // 拿到所有切片
  let chunksList = fse.readdirSync(chunkDir)
  // console.log(chunksList);
  // 万一切片是乱序的
  chunksList.sort((a, b) => a.split('-')[1] - b.split('-')[1])

  const result = chunksList.map((chunkFileName, index) => {
    const chunkPath = path.resolve(chunkDir, chunkFileName)
    // ！！！！！合并
    return pipeStream(chunkPath, fse.createWriteStream(filePath, {
      start: index * size,
      end: (index + 1) * size
    }))
    
  })

  // console.log(result);
  await Promise.all(result)
  fse.rmdirSync(chunkDir) // 删除切片目录
  return true

}


const server = http.createServer( async (req, res) => {
  res.writeHead(200, {
    'access-control-allow-origin': '*',
    'access-control-allow-headers': '*',
    'access-control-allow-methods': '*'
  })
  if (req.method === 'OPTIONS') { // 请求预检
    res.status = 200
    res.end()
    return
  }

  if (req.url === '/upload') {
    // 接收前端传过来的 formData 
    // req.on('data', (data) => {
    //   console.log(data);
    // })
    const form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
      // console.log(fields);  // 切片的描述
      // console.log(files);  // 切片的二进制资源被处理成对象
      const [file] = files.file
      const [fileName] = fields.fileName
      const [chunkName] = fields.chunkName
      // 保存切片
      const chunkDir = path.resolve(UPLOAD_DIR, `${fileName}-chunks`)
      if (!fse.existsSync(chunkDir)) { // 该路径是否有效
        fse.mkdirSync(chunkDir)
      }
      // 存入
      fse.moveSync(file.path, `${chunkDir}/${chunkName}`)

      res.end(JSON.stringify({
        code: 0,
        message: '切片上传成功'
      }))
      
    })

  }

  if (req.url === '/merge') {
    const { fileName, size } = await resolvePost(req) // 解析post参数
    const filePath = path.resolve(UPLOAD_DIR, fileName)  // 完整文件的路径
    // 合并切片
    const result = await mergeFileChunk(filePath, fileName, size)
    if (result) { // 切片合并完成
      res.end(JSON.stringify({
        code: 0,
        message: '文件合并完成'
      }))
    }
  }
})

server.listen(3000, () => {
  console.log('listening on port 3000');
})