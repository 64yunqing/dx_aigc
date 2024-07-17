import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from '../store/index' // 状态仓库

const app = createApp(App)
app
    .use(store)
    .mount('#app')
