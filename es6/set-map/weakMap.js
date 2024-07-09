// const ws = new WeakMap()
// ws.set(1,1)
// console.log(ws);


let obj = {name:'zf'}
let ws = new WeakMap()
ws.set(obj,1)
obj = null
console.log(ws);//{}
setTimeout(function(){
    console.log(ws);;
},1000
)