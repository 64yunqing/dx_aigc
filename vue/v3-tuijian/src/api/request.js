// 引入现在最火的ajax 框架fetch ajax 太弱小
import axios from "axios";
// 创建一个axios 单例
export const service = axios.create({
    // url = baseURL + path   localhost://3001/posts
  baseURL: "http://localhost:3001", // 每个项目的后端地址BaseURL一样的
  timeout: 5000, // 响应超时 
});

export default service;