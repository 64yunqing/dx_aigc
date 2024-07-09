# 设计模式中的单例模式

实现Storage 类，使得该类为单例，基于LocalStorage 进行封装。实现setItem(key,value)和getItem(key)

- 类适合封装
- 只实例化一次
    不管new多少次，拿到的是同一个对象

- es6 提供了 class/extends/super/static 语法糖
    适合企业级大型项目开发
- 要拿到实例，不能直接new，
- 单例模式 static 方法来实现
- 是否实例化过？ 静态属性|构造函数对象的属性

- cookie/localStorage 浏览器，domain 

## 模块化
- module是大型项目的核心
- js 早期没有模块化，script 顺序引入 (阻塞)，并运行
- es6 前端越来越复杂，上标准模块化
    有import 有export
- 先引入，再调用

## 单例模式
- 传统面向对象 static 方法
- JS way 将instance 闭包 Storage.getInstance
- componentDidUpdate 利用更新的生命周期函数，只需写一次  react编程方式
- addTodo setState JS -> 渲染引擎 
- componentDidUpdate 局部DOM已经更新了 再去执行 localStorage