import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config({
    path: '.env'
})
const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
    baseURL: process.env.BASE_URL
})
// embedding 文字转成数学向量 文本嵌入
const response = client.embeddings.create({
    model:'text-embedding-ada-002',
    input:'百度前端面试题'   
})
console.log(response.data[0].embedding);
