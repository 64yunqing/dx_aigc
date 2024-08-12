# 购物车

- 库存的维护 inventory


## 数据流管理
- api
    商品数据接口
- 商品数据
    getProducts
- 购物车数据

## 面试表达亮点
- 介绍怎么学习的
    vue 数据管理学习了  vuex/pinia
    vuex 是数据流管理的设计模式 (哲学)
    - createStore 返回一个单一状态树 共享状态就不会出问题
        store.state.products.all 树状结构，每个状态都是一个节点
    - 大型应用可以按状态的模块化来管理， 小型的放全局就好
    - 每个模块的数据流程由 state mutations actions getters
    - dispatch action commit mutation vuex 设计模式
    - mutations 让数据管理更严格 App = 用户界面组件 + 状态管理
    - pinia 在 Vue3 推出 hooks, 更方便， defineStores 函数式编程自带模块化能力 hooks? useStore 封装响应式状态和业务的函数

- 简历技能点vuex/pinia
- vuex 比 pinia 复杂
    - createStore 返回一个单一状态树， 状态就是树上的节点
        vuex 提供了modules 模块化 状态树分支模块化管理，namespaced
    - pinia defineStore 模块化由hook 完成， 简单好理解
    - vuex 有mutations 概念 要修改数据必须commit mutations 数据管理更严格
        数据共享，数据不出问题 读操作不会出问题，写操作都由mutations 管理
        修改的规范  财务
    - pinia 没有mutations概念 

- actions 和 mutations 区别
    - actions 可以异步操作 请求接口， 业务逻辑
    - mutations 明确且清晰的状态修改规定
    - dispatch action
    - commit mutation
- 修改购物车
items: [
    {
        id,
        quantity:1
    }]