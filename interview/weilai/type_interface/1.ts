// 接口 
interface IPerson {
    name:string;
    age:number;
}

const user1:IPerson = {
    name:'张三',
    age:18
}

type Person = { 
    name:string;
    age:number;
}

const user2:Person = {
    name:'李四',
    age:20
}
// 类型别名，简单数据类型的支持
type MyStringType = string;