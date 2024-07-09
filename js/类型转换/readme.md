# 原始值转原始值
1. 转布尔   ---Boolean(x)
2. 转Number     ---Number(x)
3. 转字符串     ---String(x)


# 对象转原始值   ---隐式类型转换
1. 转number   

    Number({})
 先调用ToNumber(x) ， 该函数中会再调用ToPrimitive()将对象转为原始值

ToPrimitive(obj,Number)
1. 判断接受到的值是不是原始类型，是则返回
2. 否则，调用valueOf方法，如果得到了原始值，则返回
3. 否则，调用toString方法，如果得到了原始值，则返回
4. 否则，报错


- 转String
    String({})
    先调用ToPrimitive(x,String)，该函数中会再调用ToPrimitive()将对象转为原始值

    ToPrimitive(obj,String)
    1. 判断接受到的值是不是原始类型，是则返回
    2. 否则，调用toString方法，如果得到了原始值，则返回
    3. 否则，调用valueOf方法，如果得到了原始值，则返回
    4. 否则，报错


- 转布尔：任何对象转布尔值都是true


# toString
1. Object.prototype.toString() 返回一个形如"[object xxx]"的字符串
2. Array.prototype.toString() 返回一个数组的字符串，数组元素用逗号分隔
3. XXX.pprototype.toString() 返回一个对象的字符串，对象的属性用逗号分隔




# 一元操作符 +
    + 会触发隐式类型转换，往Number里转
    

# 二元操作符 +


# == vs ===
1. == 会触发隐式类型转换，往Number里转
2. === 不会触发隐式类型转换
