function xq(){  // pending  resloved  rejected
    return new Promise((resolve,reject)=>{ // {status:pending}
    setTimeout(()=>{
        console.log('选专业');
        resolve()
    },2000)
    })
}

function yq(){ 
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('大一');
        resolve()
    },1000)
    })
}

function baby(){
    console.log('大二');
}
xq()
.then(()=>{
    return yq()
})
.then(()=>{
    baby()
})