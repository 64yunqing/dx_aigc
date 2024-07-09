function Duck(nickname) {
    console.log(this);
    this.nickname = nickname
}
Duck.prototype.singing = function(){
    console.log('嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎');
}
Duck.prototype.fly = function(){
    console.log('鸭子起飞');
}
//es6 reset 运算符
function myNew(Fun,...args){
    //this
    // console.log(arguments)
    // let a =1;//简单数据类型,内存在栈内存
    // let b =a;//值的拷贝
    let obj={};//对象,内存在堆内存中  地址引用
    Fun.apply(obj,args);
    obj.__proto__ = Fun.prototype;//原型对象
    return obj;
}
// let duck = new Duck('黄上皇')
let duck = myNew(Duck,'黄上皇','煌上煌','好辣')
console.log(duck.nickname);
duck.singing()
duck.fly()