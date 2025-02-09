import { ChatOpenAI } from '@langchain/openai'
// 消息对象 
import { HumanMessage } from '@langchain/core/messages'




export default defineEventHandler(async (event) => {
    // 请求体解构
    const { question } = (await readBody(event)) as {
        question: string
    }

    event.node.res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive'
    })

    const sendData = (data:string) => {
        event.node.res.write(`data: ${data}\n\n`)
    }

    // http 1.1 
    sendData(JSON.stringify({data: ''}))

    const model = new ChatOpenAI({
        model: "gpt-3.5-turbo",
        apiKey: "sk-X0elCqFwBaSuKkLwmcvMKGMlacmRAwmb2hjaKm4MxBu2cdIY",
        configuration: {
            baseURL: 'https://api.302.ai/v1/'
        },
        streaming: true,
        callbacks: [
            {
                handleLLMNewToken(output) {
                    sendData(JSON.stringify({data: output}))
                },
                handleLLMEnd() {
                    sendData(JSON.stringify({data: '[DONE]'}))
                    event.node.res.end()
                }
            }
        ]
    })
    
    try {
        const messages = [
            new HumanMessage(question)
        ]
        const response = await model.invoke(messages)
    } catch(err) {

    }
})