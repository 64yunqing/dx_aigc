# vue能力

- 看过ElementPlus组件源码，学习组件设计

    ElementPlus Form

- 良好组件设计
    - typescript 更加严谨
    - 更通用
        - app.use
        - app.component

- Dialog 组件
    - vue 内置的 teleport 组件 离开组件树的位置 body 上
    - slot 插槽提供定制性
    - 使用BEM 命名规范
        scoped  组件css 不被外界，不影响外界，主要是动态添加data唯一属性，
        css属性选择器
        当前没有必要，因为我们的类名有el- 前缀