# 1. js数组上有哪些方法？
增：push, unshift, splice, concat
删：pop, shift, splice, slice
改：
查：includes, indexOf,lastIndexOf, find, findLast, findIndex, findLastIndex, some, every

转换：reverse, sort, toReversed, toString, join, toSorted
迭代：forEach, map, filter, reduce

# 2. js字符串上有哪些方法？
增：concat
删：slice, substring
改：trim, trimLeft, trimRight, padStart, padEnd, replac,toUpperCase(小写字母转大写),toLowerCase(大写字母转小写)
查：indexOf,lastIndexOF=f,includes,charAt,startsWith,endsWith,parseInt(字符串转数字 i,进制数)

转换:split

# 3. 谈谈js中的类型转换机制
 - 是什么:js中存在原始类型和引用类型这两类，通常开发过程中可能存在人为转换类型的行为，这种称之为显式类型转换，还有一种是js引擎在执行某些操作时会自动发生类型转换，我们称之为隐式类型转换

 - 显式: Number(xx),String()...
 - 隐式: + - * / == !=
   [] == ![]
   [] == false
   [] == 0
   '' == 0
   0 == 0

# 4. == Vs ===

# 5. 聊聊拷贝
- XXXX