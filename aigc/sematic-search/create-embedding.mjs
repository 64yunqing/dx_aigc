import fs from 'fs/promises'// promisify
import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config({
    path: '.env'
})

const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
    baseURL: process.env.BASE_URL
})

const inputFilePath = './data/posts.json'
const outputFilePath = './data/posts-embeddings.json'

const data = await fs.readFile(inputFilePath,"utf-8")
const posts =JSON.parse(data)
// console.log(posts);

const postsWithEmbeddings = [];

for(const {title,category} of posts){
    const response = await client.embeddings.create({
        model:'text-embedding-ada-002',
        input: `标题：${title};分类：${category}`
    })
    postsWithEmbeddings.push({
        title,
        category,
        embedding:response.data[0].embedding
    })
}

await fs.writeFile(outputFilePath,JSON.stringify(postsWithEmbeddings))