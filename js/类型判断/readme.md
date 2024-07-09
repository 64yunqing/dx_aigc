# v8的存储
1. 原始类型的值直接存储在调用栈上
2. 复杂类型的值存在堆结构中，并将堆中的引用地址存在调用栈中

- 调用栈空间较小，引用类型的数据当量可能非常大，所以引用类型如果放在调用栈中很容易爆栈

# typeof()
1. 可以判断除null以外的所有类型
2. 无法判断undefined之外的引用类型

- typeof的判断原理是：将值转换为二进制后看其前三位是不是0，除了函数，所有的引用类型的二进制前三位0，所有的引用类型的二进制前三位都是0，null的二进制全都是0


# instanceof 
1. 只能用于判断引用类型

- 是通过原型链的查找来判断

# Object.prototype.toString()
- Object.prototype.toString.call(x)

- toString()
1. 对象的toString():
2. 数组的toString():将数组中的元素用逗号的方式拼接成字符串
3. 其他的toString():直接将值修改成字符串字面量

- Object.prototype.toString(x):
1. 如果 toString接受的值是 undefined 或者 null，则返回[object Undefined]或者[object Null]
2. 调用 toObject(x) 将x转为对象，此时得到的对象内部一定拥有一个属性[[class]]，而该属性[[class]]的值就是x的类型
3. 设，class是[[class]]的值
4. 返回由“[object]”和“[class]”拼接成的字符串

# Array.isArray()
- 判断是否是数组
