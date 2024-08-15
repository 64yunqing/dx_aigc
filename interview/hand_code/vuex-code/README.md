## 读vuex源码

- es6 class
    - 组织 install  dispatch  commit  等方法 面向对象思想
    - this._state 私有变量封装 响应式的细节
    - get state 简化了调用API
        不提供 set state 要修改，走mutations
    - 私有属性的魅力，mutations actions 都不可以直接调用
        先用私有属性存下来
    - getters public 属性
        Object.keys() 拿到option.getters 所有的key
        遍历一下 拿到 fn 并通过computed 返回一个方法， 将this.state 传过去
        computed 理解更透了 