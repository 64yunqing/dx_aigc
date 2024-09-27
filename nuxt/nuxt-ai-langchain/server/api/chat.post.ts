import { ChatOpenAI } from '@langchain/openai'
// 消息对象
import { HumanMessage } from '@langchain/core/messages';

const model = new ChatOpenAI({
    model: 'gpt-3.5-turbo',
    apiKey: "sk-X0elCqFwBaSuKkLwmcvMKGMlacmRAwmb2hjaKm4MxBu2cdIY",
    configuration: {
        baseURL: 'https://api.302.ai/v1/'
    }
})

export default defineEventHandler((event) =>{
    event.node.res.writeHead(200,{
        'Content-Type':'text/event-stream',
        'Cache-Control':'no-cache,no-transform',
        'Connection':'keep-alive'
    })
    event.node.res.write(`data:hello`);
    try{
        const messages = [
            new HumanMessage('你好')
        ]
        const response = await model.invoke(messages)
        console.log(response);
        event.node.res.write(JSON.stringify({content: response.content}))
    } catch(err){
        
    }
})