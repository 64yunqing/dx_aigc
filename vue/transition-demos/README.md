# vue 动画

- 页面动态效果
    - transition css 属性的切换
    - animation 复杂
    - js stylue + requestAnimation
    - v-if/v-show 切换组件 带来动画？

- vue 提供了一些内置组件，比如Transition 
- <component :is=""> 

- 良好的编程风格 
    - BEM
    - 组件的思维
    - 优质的htmml/css 代码
    - @import 将css 模块化，一定要下这个关键字
        - app.css
        - card.css

- 字节级别动态效果
    - css transition 切换类名实现
    - css animation 
    - 如果要更细致的定制效果，一些内置的类似生命周期的钩子类名
        vue 提供了transition 类名
        v-if/v-show 切换组件/html片段的效果，动画，内置组件transition 更好的服务于动画定制
        .v-enter-from(开始)     .v-enter-active(立即激活)       .v-enter-to(动画期类名)
        .v-leave-from(开始)     .v-leave-active(立即激活)       .v-leave-to(动画期类名)
    - 如果想定制呢？ name="slide"  有没有把vue 文档细致看一次 
    - animation 只需要定制enter-active-class 和leave-active-class
    - 上专业的animation.css
        - transition 支持 class 特性  animation-tada
        enter-active-class leave-active-class