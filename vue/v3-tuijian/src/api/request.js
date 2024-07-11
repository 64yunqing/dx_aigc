// 引入现在最火的ajax 框架 fetch  ajax 太弱小
import axios from 'axios'
// 创建一个axios 单例
export const service = axios.create({
    // url = baseURL + path   localhost://3001/posts
  baseURL: 'http://localhost:3001', // 每个项目的后端地址BaseURL一样的
  timeout: 5000 // 响应超时
})

// 拦截器
service.interceptors.request.use(config => {
  return config
})

service.interceptors.response.use(response => {
  console.log('---------------响应成功', response);
  if (response.status == 200) {
    return response.data
  } else {
    
  }
  
})

export default service