# 说说你对css盒子模型的理解
1. 是什么？
当浏览器在渲染一个html容器时，会根据某一个标准绘制出一个矩形，该矩形包含content、padding、border、margin

2. 有哪些盒模型
- 标准盒模型：width = content   
            总体宽度 = width + padding + border + margin
- IE盒模型：width = content + padding + border
            总体宽度 = width + margin
3. 切换：
    box-sizing: border-box(IE) || constant-box(标准)




# 说说css中的选择器有哪些？优先级是怎么样的
1. id
2. class
3. 标签
4. 后代选择器
5. 子选择器
6. 兄弟选择器
7. 群组选择器
8. 伪类选择器
9. 伪元素选择器
10. 属性选择器
11. 优先级： 
- !important > 内联样式 > id > class > 后代选择器 == 子选择器 == 兄弟选择器 > 标签  


# 说说em、px、rem、vw、vh 的区别
- 是什么：都是css中的单位，这些单位灵活使用可用于做不同的适配

- 区别：em是依据父容器的font-size计算，rem是根据根字体大小的font-size计算，vw和vh是根据视口宽度和视口高度计算 , px是绝对单位

# css中有哪些隐藏容器的方式？区别是什么？
1. display:none;    无文档流，无法绑定事件
2. opacity:0        有文档流，可以绑定事件
3. width:0;height:0;    无文档流，无法绑定事件
4. visibility:hidden    无文档流，无法绑定事件
5. clip-path        有文档流，无法绑定事件