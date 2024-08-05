import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios'
import { Lazyload,Swipe, SwipeItem } from 'vant'


const app = createApp(App)
app 
    .use(Swipe)
    .use(SwipeItem)
    .use(Lazyload)
    .use(axios)
    .use(createPinia())
    .use(router)
    .mount('#app')
