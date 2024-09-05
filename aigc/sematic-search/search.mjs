import readline from 'readline'
import OpenAI from 'openai'
import dotenv from 'dotenv'
import fs from 'fs/promises'

const inputFilePath = './data/posts_with_embedding.json'

const data = await fs.readFile(inputFilePath,"utf-8")
const posts = JSON.parse(data)

dotenv.config({
    path:'.env'
})

const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
    baseURL: process.env.BASE_URL
})

// 计算向量的余弦相似度
const cosineSimilarity = (v1, v2) => {
    // 计算向量的点积
    const dotProduct = v1.reduce((acc, curr, i) => acc + curr * v2[i], 0);
  
    // 计算向量的长度
    const lengthV1 = Math.sqrt(v1.reduce((acc, curr) => acc + curr * curr, 0));
    const lengthV2 = Math.sqrt(v2.reduce((acc, curr) => acc + curr * curr, 0));
  
    // 计算余弦相似度
    const similarity = dotProduct / (lengthV1 * lengthV2);
  
    return similarity;
  };

  
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const handleInput = async (input) => {
    // console.log(input)
    const response = await client.embeddings.create({
        model: 'text-embedding-ada-002',
        input
    })
    const { embedding } = response.data[0]

    const results = posts.map(item => ({
        ...item,
        similarity: cosineSimilarity(embedding, item.embedding)
    }))
    .sort((a,b)=>a.similarity - b.similarity)
    .reverse()
    .slice(0,3)
    .map((item,index)=>`${index+1}. ${item.title},${item.category}`)
    .join('\n')

    console.log(results)
    rl.question('\n请输入查询内容：',handleInput)
}
rl.question('\n请输入查询内容：',handleInput)