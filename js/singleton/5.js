//单例模式 有的类只实例化一次，性能更好
var Singleton = function(name){
    this.name = name
    // this.instance = null
}

// Singleton.prototype.getName =function(){
//     console.log(this.name)
// }
//静态方法 属于类的
Singleton.getInstance = function(name){
    if(!this.instance){
        //静态属性
        this.instance = new Singleton(name);
    }
    return this.instance
}

let obj1 = Singleton.getInstance('hfh')//创建实例,第一次实例化后，instance有值了
let obj2 = Singleton.getInstance('yw')//第二次使用函数，直接返回this.instance
console.log(obj1 == obj2,obj1.name,obj2.name)