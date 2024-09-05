// dp动规五部曲
// 贪心的每一步选择最低价，计算最大利润，dp更关注之前的计算
// dp[] 意义
// 初始化
// 状态转移方程
// 迭代
// 最值
function maxProfit(prices) {
    let n = prices.length;
    if(n == 0) return 0;
    // 当天的最值 第i天的最大利润
    let dp = new Array(n).fill(0);
    // 初始化 最低是0 没卖的机会
    for(let i = 1; i<n; i++){
        // 观测出来 公式 递归
        dp[i] = Math.max(dp[i-1],prices[i]-minPrice)
        minPrice = Math.min(minPrice,prices[i])
    }
    return dp[n-1];
}