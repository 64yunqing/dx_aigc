let str = 'hello'
let num = 123
let flag = false
let u = undefined
let n = null

let big = 1234n     //bigInt 语义化大数字

let s = Symbol('1') //定义一个独一无二的值
let s2 = Symbol('1')

let a = '1'
let b = '1'


console.log(s === s2);


var call = function(obj){
    let fn = Symbol('fn')
    obj.fn = this
    obj.fn()
    delete obj.fn
}

var obj ={
    a:1,
    fn:2,
    // Symbol('fn'):123,
    // Symbol('fn'): () => {}
}
// foo.call(obj)