var obj = {
    a:1,
    foo:foo()
}

function foo(){
    console.log(this.a);
}
var obj ={
    a:1,
    foo:foo
}
var obj2 = {
    obj:obj
}
obj2.obj.foo()