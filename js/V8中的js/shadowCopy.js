function shallowCopy(obj){
    let copy = {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
         copy[key] = obj[key];
        }
    }return copy;
}


let obj = {
    a:1,
    b:{n:2}
}
console.log(shallowCopy(obj));