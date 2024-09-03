import axios from "axios";
import { showToast } from 'vant';


axios.defaults.baseURL = "http://121.40.181.94:3000";
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截
axios.interceptors.request.use(req => {
    let jwtToken = localStorage.getItem('token');
    if (jwtToken) {
        req.headers.Authorization = jwtToken
    }
    return req;
})

// 响应拦截
axios.interceptors.response.use(
    (res) => {
        if (res.status !== 200) { //程序错误
            showToast('服务器异常');
            return Promise.reject(res);
        } else {
            if (res.data.code !== 800) { // 逻辑错误
                showToast(res.data.msg);
                return Promise.reject(res);
            }
            
            return res.data;
        }
    },
    (error) => {
        if( error.response.status === 401){
            showToast(error.response.data.msg);
        // router.push('/login');
        window.location.href = '/login';
        return Promise.reject(error);
    }
    }
)

export default axios;
