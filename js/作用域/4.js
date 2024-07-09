// function foo(a){
//     eval(str)
//     console.log(a,b);
// }

// foo(1,'var b = 2')

// var obj ={
//     a:1,
//     b:2,
//     c:3
// }
// obj.a = 2
// obj.b = 3
// obj.c = 4
// console.log(obj);



var obj ={
    a:1,
    b:2,
    c:3
}
whit(obj);{
    a = 3
    b = 4
    c = 5
}
console.log(obj);


// function foo(obj){
//     with(obj){
//         a=2
//     }
// }
// var o1 ={
//     a:1
// }
// var o2 ={
//     b:1
// }
// foo(o1)
// foo(o2)
// console.log(a);