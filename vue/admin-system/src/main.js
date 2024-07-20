import { createApp } from 'vue'
import { createPinia } from 'pinia' // 凤梨
// 引入Vue组件库 70%的组件有组件库提供了
// * as 引入全部组件库
import * as ElementPulsIconsVue from '@element-plus/icons-vue';
console.log(ElementPulsIconsVue,'////');
// import * as DemoData from './test'
import Data,{a,c} from './test'
// console.log(Data,a,c);

import {
     ElButton,
     ElForm,
     ElFormItem,
     ElInput,
     ElCheckbox,
     ElLink,
     ElIcon,
     ElAvatar,
     ElDropdown,
     ElDropdownItem,
     ElDropdownMenu,
     ElMenu,
     ElSubMenu,
     ElMenuItem,
    } from 'element-plus';
//  组件库依赖的样式
import 'element-plus/dist/index.css'
import './assets/styles/variable.css'
import router from './router/index'

import App from './App.vue'

const app = createApp(App)
console.log(ElementPulsIconsVue);
for(const [key,component] of Object.entries(ElementPulsIconsVue)){
    app.component(key,component);
}

app 
    .use(createPinia())
    .use(router)
    .use(ElButton)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
    .use(ElCheckbox)
    .use(ElLink)
    .use(ElIcon)
    .use(ElAvatar)
    .use(ElDropdown)
    .use(ElDropdownItem)
    .use(ElDropdownMenu)
    .use(ElMenu)
    .use(ElSubMenu)
    .use(ElMenuItem)
// 自定义指令
import { usePermissStore } from './stroe/permiss';

const permissStore = usePermissStore();

    app.directive('permiss',{
        // v-if v-show  el dom, binding 绑定的属性
        mounted(el,binding){
            if(binding.value && !permissStore.key.includes(binding.value)){
                el['hidden'] = true
            }
        }
    })

app
    .mount('#app')
 