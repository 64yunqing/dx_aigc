// function foo(){
//     var a =1 
//     console.log(this.a);//函数在哪个词法作用域里生效
// }
// foo();

// var a = 2
// function foo(){
//     var a = 1
//     function bar(){
//         console.log(this.a);
//     }
//     bar()//在foo的作用域里生效  在全局这个词法作用域里生效
// }
// foo()


var a = 1

function foo(){
    var a = 2
    function bar(){
        var a = 3
        function baz(){
            console.log(this.a);
        }
        baz()//baz 在bar的作用域里生效  baz this -> bar this
    }
    bar()//bar 在foo的作用域里生效  bar this -> foo this
}
foo()//foo this -> 全局