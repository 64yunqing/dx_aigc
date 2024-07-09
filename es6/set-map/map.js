// const arr = [1,2,3]
// const arr2 =arr.map((item) => {
//     return item * 10
// })
// console.log(arr,arr2);

// const b = [2]
// const obj = {
//     a:1,
//     b:2
// }
// console.log(obj);


const m = new Map() //弥补传统对象只能用字符串做key的缺陷
const o = {a:1}

// m.set(o,'hello')

// console.log(m.has(o));
// console.log(m.get(o));
m.delete(o)
console.log(m);