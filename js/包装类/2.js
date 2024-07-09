// var str ='hello'    // new String()




// var obj = {};   //创建对象字面量
// var obj2 = new Object();


function Car(color){
    // var this = {
    //     name :'su7',
    //     height: 1400,
    //     lang :5000,
    //     weight: 1000,
    //     color : color
    // }
    // return this

    this.name = 'su7'
    this.height = 1400
    this.lang = 5000
    this.weight = 1000
    this.color = color
}
let car1 = new Car('red')
let car2 = new Car('blue')
// car1.name = '劳'
console.log(car1);
console.log(car2);