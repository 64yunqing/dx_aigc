function myInstanceof(L,R){
    while(L !== null)  {
        if(L.__proto__ === R.prototype){
            return  true;
        }
        L = L.__proto__
    }
    return false
}

var arr = []
// console.log(myInstanceof(arr,Array))//true
console.log(myInstanceof(1,Object))//true