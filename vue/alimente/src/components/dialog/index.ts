// vue3 99%是用ts写出来的， vue3 类型系统
import type { App } from 'vue'
import Dialog from './Dialog.vue'  

export default {

    install(app:App) {
        // 全局组件
        // ts的功底  ts比js开发效率高，类型判断
        // 类很多， 来自好多同事的合作，
        app.component(Dialog.name as string, Dialog)
        
    }
}