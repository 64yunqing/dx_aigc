//var str ='hello world' ///字符串 string
//console.log(str.length);

//var num = 123  //数字 number 

//var flag=false; //布尔 Boolean

var un = undefined 
var nu = null
var b = 123123123n //大整形 Bigint
var s = Symbol('abc')
var s2 = Symbol('abc')


//console.log(s==s2);


// 对象类型 引用类型 复杂类型
var obj={
    a:1 //key:a   val:1
}


//arr.push('hello')
//arr.unshift('0')
//console.log(arr[2]) //索引/下标
//arr.pop()
//arr.shift()
//arr.shift()
//arr.shift()

//var arr=[1,2,'a',true,{a:1}]

//arr.splice(2,1)//从第二个元素删除1个数据
//arr.splice(2,0,'hello')//0表示不删除，第三单位表添加
//console.log(arr);   




var arr=[1,2,3,4]

for(var i=0;i<arr.length;i++){
    arr[i]=arr[i]*10;
}

console.log(arr)