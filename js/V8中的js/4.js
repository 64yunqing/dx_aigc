let obj = {
    a:1,
    b:{n:2}
}
const newObj = structuredClone(obj)
newObj.b.n = 3

console.log(newObj);