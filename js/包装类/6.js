var str ='abc'  // new String('abc')
str +=1 // str = {'abc'} + 1
var test = typeof(str)  // typeof()返回属性'string'
if(test.length===6){
    test.sign = 'typeOf的返回值结果可能是String'
    // new String('abc').sign = 'new String的结果可能是String'
    // valueOf(str).sign = 'valueOf的结果可能是String'
    // delete test.sign
}
console.log(test.sign); // new String(text).sign 