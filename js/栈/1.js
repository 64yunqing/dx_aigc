// const arr = []
// arr.push(1)
// arr.splice(0,0,2)
// arr.unshift(3)

// arr.pop()
// arr.splice(0,1)
// arr.shift()

// console.log(arr)


// const stack = []    //pop push
// stack.splice();
// stack.length = 2
// stack[0]     stacke[stack.length-1]


const stack = []
stack.push('钟薛高')
stack.push('小布丁')
stack.push('老布丁')
stack.push('老冰棍')

// for(let i = 0; i < stack.length; i++){
//     stack[0]
// }

while(stack.length > 0){
    const top = stack[stack.length-1]
    console.log('我想吃'+ top);
    stack.pop()
}
