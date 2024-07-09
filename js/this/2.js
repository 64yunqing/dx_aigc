// function identify(context){
//     return context.name.toUpperCase();//大写字母方法
// }
// function speek(context){
//     var greeting = "Hello I am " + identify(context)
//     console.log(greeting);
// }
// var p ={
//     name:'Tom'
// }
// speek(p)


function identify(context){
    return this.name.toUpperCase();//大写字母方法
}
function speek(context){
    var greeting = "Hello I am " + identify.call(this)
    console.log(greeting);
}
var p ={
    name:'Tom'
}
speek.call(p)



