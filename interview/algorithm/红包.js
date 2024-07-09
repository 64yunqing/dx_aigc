// 发红包算法
//随机
// 公平或有趣 
//多少人发，total，0.01，加起来等于总金额total
// console.log(Math.random())
/**
 * @func 红包算法
 * @param {number} total 总金额 
 * @param {number} num 人数
 */
function hongbao(total,num){
    //发红包的时候那一刻就已经决定了
    //宕机
    const arr = [];
    //余额
    let restAmout = total;
    //未领取人数
    let restNum = num;
    //num-1
    for(let i=0;i<num -1;i++){
        let amout = parseFloat(Math.random() * (restAmout/restNum * 2)).toFixed(2)//浮点数精确到两位
        restAmout -= amout;
        restNum--;
        arr.push(amout)
    }
    //最后一个人
    arr.push(restAmout.toFixed(2));
    return arr;
}

console.log(hongbao(20,20));