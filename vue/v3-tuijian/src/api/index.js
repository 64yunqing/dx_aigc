// 所有的接口请求都应在这里
// fetch很乱，axios
// 文章列表
import service from './request'
export const getPosts = () => {
    
  return service.get('/posts')
}
// 文章详情
export const getPostsById = (id) => {
  return service.get(`/posts/${id}`)
}
// 相关文件
export const getRecommendPosts = (id) => {
    // return axios.get(`http://localhost:3001/posts/${id}`)
  }