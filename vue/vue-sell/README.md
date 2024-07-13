# css 预处理器
1. scss
2. less
3. stylus 

## 父组件给子组件取值
- 引入子组件
    - import Support from '@/components/support-icon/index.vue'
    - 在template中 传入子组件的值  <Support :type="0" :size="1"/>

# 文本样式
 white-space: nowrap; 超出不换行
 overflow: hidden;  超出不显示
 text-overflow: ellipsis;   超出省略号
# 跨域
- 浏览器的同源策略

http://192.168.3.1:5173/home

http://192.168.3.1:5173/home

协议，域名，端口，都相同


# nextTick()

nextTick(() => { // 只会在组件编译挂载且渲染完成后才执行
    initScroll()
})
- html 编译挂载时，nextTick() 函数会执行，但是页面还没有渲染，所以获取不到dom元素
