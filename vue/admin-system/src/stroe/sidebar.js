// sidebar 模块的共享状态
import { defineStore } from 'pinia'
// 一个文件就是一个状态模块

export const useSidebarStore = defineStore('sidebar',{
    // 计算属性的写法
    state:()=>{
        return {
            collapse:false,
        }
    },
    actions:{
        // 状态的改变 
        handleCollapse(){
            this.collapse = !this.collapse
        }
    },

})
