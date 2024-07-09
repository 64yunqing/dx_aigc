var mrPeng = {
    name:'彭于晏',
    age:18,
    sex:'boy',
    health:100,
    drink:function(){
        console.log('I am drinking');
        this.health++
    },
    smoke:function(){
        console.log('I am smoking');
        this.health--
    },
}

// console.log(mrPeng.name);
// mrPeng.like = 'pxc'

// var abc = 'like'
// mrPeng['abc'] = 'lyf'
// console.log(mrPeng);

// mrPeng['age']=19
// console.log(mrPeng);

// delete mrPeng.sex
// console.log(mrPeng);

mrPeng.smoke()
mrPeng.smoke()
mrPeng.drink()
console.log(mrPeng.health);