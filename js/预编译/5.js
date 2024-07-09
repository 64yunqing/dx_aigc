// GO:{
//     global:undefined 100 ,
//     fu():function fn(){},
// }
global = 100
function fu(){
    console.log(global);//undefined
    global = 200
    console.log(global);//200
    var global = 300//global=300
}
// AO:{
//     global:undefined 200 300,
// }
fn()
console.log(global);//100
var global;