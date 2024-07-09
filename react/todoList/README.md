# TodoList

- 组件拆分能力
    - 编程思维
    - 组件就是抗事的，组件化思想 页面由组件构成，而不是html
    - react/vue 组件powerful
        props state 生命周期...

- css 单独编写 组件引入
- 数据管理
    - 交给父组件打理
    - props 传递下去 
    - todos 
        - TodoList  父子组件
            - TodoItem props 
    - TodoForm
    - 父组件把操作数据的方法都准备好了
    - 子组件可以安心的负责渲染就好

    父组件负责数据的管理，子组件负责渲染

- 数据状态的一致性
    - 表单组件比较复杂
    - 表单组件也叫受控组件 input值是受state 约束的
    - inputText state
    - 数据和状态是要一一对应的
    - 数据是什么样，状态一定是什么样
    - input 界面状态与inputText绑定
    - value = {inputText} 数据绑定
    - onChange setState inputText
    vue/react 区别

- 循环列表
    - vue v-for
    - react { js 运行区域，返回值占位 }
    {
        todos.map((todo,index)=> (
            <TodoItem />
        ))
    }

## 性能优化
    引擎包含 渲染引擎 和 JS引擎
    - 过路费交的太多
        渲染引擎  <-高速 >   JS引擎
        把10000次的字符串先拼接，
        .innerHTML = 整体
    - 缓存DOM节点   

- 重绘  repain
    几何尺寸没改变，但是样式变了
- 重排  reflow  回流
    DOM修改，引发了DOM几何尺寸的改变，(宽高，隐藏元素)
    自己之外，其他元素的几何属性和位置也会受影响
重排比重绘更耗费性能，所以重绘会比重排快

    render tree -> 变化 -> 回流 -> 重绘

- 页面绘制
    HTML/CSS/JS资源 ->浏览器内核 -> 图像
    parseHTML -> style 计算样式 -> layout (计算图层布局) -> paint绘制图层 ->
    Composite整合图层成页面


    三者都会阻塞 

- 渲染引擎
    - 不用等JS 最后
    - HTML解析器 DOM parser
    - CSS 解析器 css 文档， 生成样式规则 CSSOM 树
    - DOM 树+ CSSOM 树-> 渲染树
    - 图层布局计算模块 输入是render tree 输出是layout tree(精确到位置和大小)
    - 视图绘制模块 像素级别绘制 (CPU -> GPU)

- JS引擎 霸道的
    - 编译执行JS代码
    - 重绘，重排
css selector 从右到左的
#myList li {

}
#myList  .list-item {

}


- 避免使用通配符，*
- 关注可以通过各种继承实现的属性
- 少用标签选择器
- 不要画蛇添足

.myList#title
#title

- 减少嵌套
    开销高

- todoList 存储
    - 采用了单例 Storage模块封装
    - utils/工具类
    - addTodo setItem
        editTodo setItem
        deleteTodo setItem
        componentDidUpdate 只用此处写一次