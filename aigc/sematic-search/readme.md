# 搜索

- 搜索组件开发(前端)
- 全栈难点
- 搜索
    - 模糊搜索 LIKE 匹配 正则  性能不太好
    - elastic search
    - 自然语义搜索 NLP
- "百度面试"
    大模型的世界里 腾讯面试
    向量 任何东西都可以用向量 (数字来表达)  几千维度
    把我的所有文章 向量化  (进入大模型)  然后和用户的输入向量比较

- LLM 表面上接收的是自然语义，底层是向量(数学，1436维度)
    - embedding 向量嵌入接口 拿到文本向量表达
    - 和库里的向量做相似度计算
    - 相似度最接近的几个值

- 不只是匹配，更多的是语义化，更强大