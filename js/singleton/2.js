"user strict"

let name = '煌上煌'

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
//函数this指向是有运行方式决定的
//对象的方法调用 this是动态的
// obj2.getName();
const fn =obj2.getName;
// console.log(fn);
// 最普通的函数来运行，指向全局
// 如果启用了严格模式，普通函数 this指向undefined，js的错误
// fn()
// apply可以手动指定this为第一个参数，余下要传给函数运行的参数照样传
// 使obj2.getName()的this.name指向obj.name
fn.apply(obj)