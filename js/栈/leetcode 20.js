let s = '({[]})' //(){}[]
'123456'//'123456'=>'654321'  //6==6

var isValid = function(s) {
    const obj = {
    '(': ')',
    '{': '}',
    '[': ']'
    }

    // 提前准备一个栈
    // 遍历字符串s
    // 取到的是左括号，就把它的另一半存入栈中
    // 如果取到的是右括号，将栈顶的元素取出个该字符进行对比
    const stack = []
    for(let i = 0;i < s.length;i++){
        if(obj[s[i]]){
            stack.push(obj[s[i]])
        }else{
            if(stack.pop() !== s[i]){
                return false
            }
        }
    }
    return !stack.length 
};

console.log(isValid(s));