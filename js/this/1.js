let obj = {
    myname:'121',
    age:18,
    say:function(){
        console.log(this.myname);
    }
}

obj.say();