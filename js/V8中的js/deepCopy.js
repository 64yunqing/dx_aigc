let obj = {
    a:1,
    b:{n:2}
}

function deepCopy(obj){
    let newObj = {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            //obj[key] 是不是对象  typeof obj[key] === 'object'&& obj[key] !== null
            if(obj[key] instanceof Object){
                newObj[key] = deepCopy(obj[key])
            }else{
                newObj[key] = obj[key]
            }
            // newObj[key] = obj[key]
        }
    }
    return newObj
}

let obj2 =deepCopy(obj)
obj.b.n = 20
console.log(deepCopy(obj2));