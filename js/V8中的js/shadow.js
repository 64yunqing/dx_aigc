// let obj = {
//     a:1,
//     b:[1,2]
// }
// // let obj2 = Object.create(obj)
// let obj2 = Object.assign({},obj)
// obj.b.push(3)
// console.log(obj2);

let arr = [1,2,3,{a:1}]
let arr2 = arr.toReversed().reverse()     //arr.slice(0)     //[...arr]         //[].concat(arr)
arr[3].a = 2

console.log(arr2);