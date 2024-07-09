// var a = 1
// console.log(this.a);


// function foo(){
//     var a = 1
//     console.log(this.a);
// }
// foo()


var obj = {
    a:1,
    foo:function(){
        console.log(this);
    }
}
obj.foo()