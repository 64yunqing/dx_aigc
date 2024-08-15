import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store/index'

createApp(App)
    // install 方法  vue 和其它生态不一样
    .use(store)
    .mount('#app')
