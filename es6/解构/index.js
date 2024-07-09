// const arr = [1,2,3]
// // const a = arr [0]
// // const b = arr [1]
// // const c = arr [2]
// const [a,b,c] = arr
// console.log(a,b,c)

// const arr = [1,2,{a:3}]
// const [a,b,c] = arr
// console.log(a,b,c)


// const obj = {a:1,b:2,c:3,d:{n:4}}
// const {a,b,c,d:{n}} = obj
// console.log(a,b,c,n)

// const arr = [1,2,3]
// console.log(...arr);//rest


// const [a,b,c,d,e] = 'hello'
// console.log(a,b,c,d,e);


// function foo(...args){
//     // console.log(arguments);
//     console.log(...args);
// }
// foo(1,2,3)

// foo.call(obj,1,2)


function foo([a,b]){
    console.log(a,b);
}
foo([1,2])