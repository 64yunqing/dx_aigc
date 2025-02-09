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
    
- AI LLM 流式返回 streaming
    - LLM 返回的内容是有一定的格式的
        markdown 即完成了格式、省了流量、转化为HTML有 vue-markdown-it
    - AI 用户体验
        LLM需要时间，不能让用户一直等，
        token流式返回，快

- ClientOnly
    nuxt 在服务器端忽略，到前端去执行
    vue3-markdown-it 放在客户端，省去服务端开销，更快