var arr=[];

for(var i = 0; i <10; i++) {
    (function(j){
        arr[j]=function(){
        console.log(j);
        }
    })(i)
}


arr.forEach(function(item){
    item()
})