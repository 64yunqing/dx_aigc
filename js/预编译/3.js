function fn(a,b){
    console.log(a);//1
    c=0
    var c;
    a=3
    b=2
    console.log(b);//2
    function b(){}
    console.log(b);//2
}
fn(1)

// AO:{
//     a:undefined 1 3,
//     b:undefined function b(){} 2,
//     c:undefined 0,
// }