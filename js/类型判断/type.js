function type (x){
    let res = Object.prototype.toString.call(x)//'[object String]'
    return res.slice(8,-1)//'[object String]'
}

console.log(type('hello'))//String
type(123)//Number
type([])//Array