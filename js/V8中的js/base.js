Object.prototype.c = 3
let obj ={  // new Object()
    a:1,
    b:{n:2}
}
// console.log(obj.c);
// let arr =[1,2,3]

// for(let key in obj ){
//     console.log(key,obj[key])
// }

console.log(obj.hasOwnProperty('a'));