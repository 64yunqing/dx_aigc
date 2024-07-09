var obj = {
    a:1
}
function foo(x,y){
    console.log(this.a,x+y);
}
// foo.call(obj,1,2)//call会把foo中的this掰弯到obj中
// foo.apply(obj,[2,3])
const bar =foo.bind(obj,1,2)
bar(2)