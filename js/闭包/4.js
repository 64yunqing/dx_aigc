function foo(){
    var name = 'daxian'
    function bar(){
        console.log(count,age,name);
    }
    var count = 1
    var age = 18
    return bar   //没有调用bar函数，当return后foo函数结束，foo出栈，但bar()执行时需要使用foo中的变量，则为闭包情况
}
var age = 20
const baz = foo()
baz()

function foo(){
    var a =1
    var b = 2
    function bar(){
        console.log(a);
    }
    bar()   //最后调用bar()，bar()执行完毕，foo()才可以结束
}
foo()