// var PI =3.1415926

var myObj ={
    // PI:3.1415926
}

Object.defineProperty(myObj,'PI',{
    value:3,
    writable:false,//true支持可写
    configurable:true//可以被配置
})


myObj.PI = 2
console.log(myObj.PI)

