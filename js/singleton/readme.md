# new 的过程发生了什么
- 先创建一个空对象{}
- 构造函数constructor，以new的方式运行
- this指向实例，运行的过程就是实例逐渐添加属性的过程
- 默认返回对象 
- 对象.__proto__Duck.prototype

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

let john = new Person("John");
john.__proto__ = Person.prototype; // true
john.sayHello(); // 输出: "Hello, my name is John"

- js 强大的表现力，对象字面量就能搞定
- 一些对象有共同的行为的时候(每个对象字面量都有自己的函数，开销太大)，创建类
- 每个对象肯定要有自己的属性，而且是不一样的，constructor  new Duck()
    this 被指定{}
- 方法放到prototype 原型对象上，被所有实例共享的方法
- obj.__proto__ = Duck.prototype;
- js面向对象不是传统的面向对象，Duck 构造函数，没有血缘关系，
- 方法是共享的，性能更好，__proto__ 原型对象来查找
- 每个 JavaScript 对象都有一个内置的 __proto__ 属性，它指向创建该对象的构造函数的原型对象。通过这个属性，对象可以继承其原型上的方法和属性。


- 掘金
    99% 用不到注册，登录注册弹窗是不实例化的，网站会更快
    当真的去点击的时候，实例化一次
    再点其他地方，不再实例化，只是display:none block