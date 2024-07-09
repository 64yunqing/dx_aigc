var data = null
function a(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('a is ok');
            data = 'hello'
            // resolve('请求到的数据')
            reject('请求失败')
        },1000)
    })
}
function b(){
console.log('data');
}

a()
.then((res)=>{
    console.log(res,'----');
    b()
})
.catch((err)=>{
    console.log(err,'22222');
})