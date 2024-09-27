# AI应用开发

- AI 全栈
    - Vue
    - Nuxt SSR 
    - LangChain
    - OpenAI 

- nuxt 接口调用
    - /server/api/chat.post.ts
        path 自动构建后端路由
    - LangChain 
    - OpenAI
-流式响应
    - 向响应头写入 'Connection: keep-alive'
    - 以流式不断的响应请求
    - AI请求
        - 内容比较多，流式返回
- LangChain 让AI应用开发更简单
    - @langchain/openai LLM模块
    - @langchain/core/messages message 模块
    - HumanMessage {role:'user',content:'xxx'}

- tailwindcss
    - 原子化css
    - 基本不用写css，很快
    - 对移动端适配支持良好 md: lg: sm: @meida-query
    - 特别适合自然语义的AI界面开发，比如01.dev
    