// 局部最优解 犀利
// 动态规划 最优子结构 局部是和全局一致的 状态转译方程 dp[i] 
// 贪心 O(n) 时间复杂度
// 贪心是在每个决策点都选择当前看起来最优的选择，不会去积累之前的最值
// 
var price = [7,1,5,3,6,4]
function maxProfit(price){
    let low = Infinity; // 无限大
    let result = 0;
    // 暴力 O(n^2)
    for(let i = 0; i<price.length; i++){
        low = Math.min(low, price[i]);
        result = Math.max(result, price[i] - low)
    }
    return result;
    
}

