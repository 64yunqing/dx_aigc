function fn(a){
    console.log(a);
    var a =123;
    console.log(a);
    function a(){}
    console.log(a);
    var b = function(){}
    console.log(b);
    function d(){}
    var d = a
    console.log(d);
}
fn(1);
// AO:{
//     a:undefined 1  function a(){} 123,
//     b:undefined function b(){},
//     d:undefined function d(){} 123,
//     a:function(){}
// }