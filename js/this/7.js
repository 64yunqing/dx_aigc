function Person(){
//     let obj ={
//         name:'平平'
//     }
//     Person.call(obj)
//     obj__proto__ = Person.prototype
//     return obj

    this.name = '平平'
}
let p = new Person()    //{name：'平平'}