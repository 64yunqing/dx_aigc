let obj={
    name:'鸭王'
}

let obj2 ={
    name:'鸭王2',
    getName:function(){
        console.log('///////////////////////')
        console.log(this.name)
    }
}
let obj3={}
//obj3是原型对象，查找obj2的属性
obj3.__proto__=obj2
console.log(obj3.name)

obj3.__proto__=obj
console.log(obj3.name)