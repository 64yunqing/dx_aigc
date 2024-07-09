var obj = {
    a:1
}
function foo(x,y){
    console.log(this.a,x+y);
    return 123 
}
// foo.call(obj,2,3)



Function.prototype.mycall = function(){
    // 拿到foo
    // 将foo引用到obj上
    // 让obj触发foo
    //移除掉obj身上的foo


    const context = arguments[0]
    const args = Array.from(arguments).slice(1) //[]

    context.fn = this
    const res = context.fn(...args)
    delete context.fn
    return res
}

let res = foo.mycall(obj,4,5)
// console.log(res);