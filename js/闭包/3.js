function bar(){
    var myname ='Tom'
    let test1 = 100
    if(1){
        let myname = 'Jerry'
        console.log(test, myname);
    }
}
function foo(){
    var  myname = 'pyy'
    let test = 2
    {
        let test = 3
        bar()
    }
}
var myname = 'john'
let test = 1
foo()