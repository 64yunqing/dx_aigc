import { createApp } from 'vue'
// 引入Vue组件库 70%的组件有组件库提供了
import {
     ElButton,
     ElForm,
     ElFormItem,
     ElInput,
     ElCheckbox,
     ElLink
    } from 'element-plus';
//  组件库依赖的样式
import 'element-plus/dist/index.css'
import router from './router/index'

import App from './App.vue'

const app = createApp(App)
app 
    .use(router)
    .use(ElButton)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
    .use(ElCheckbox)
    .use(ElLink)
    .mount('#app')
 