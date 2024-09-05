- 二维数组arr 生成一个数组，包含所有的组合，其中每个数组由arr的每个子数组中的一个元素组成。
let arr =[[1,2],[3,4],[5,6]]
[[1,3,5],[1,3,6]]
- 排列组合的可能
- dfs / bfs
- 递归 / 回溯
    递归不是算法
    自顶向下解决问题
    所有的组合都拿到了 大的问题细分为多个相似的小问题

- 常见算法
    递归、回溯、贪心、分治、动态规划
    - 递归 满足
        子数组组合的所有路径
        result = []
        [1,3,5]`n
    - 推出条件 最后一行

- 设计模式 Design Patterns
    不是具体业务，而是focus 代码设计
    - 登录弹窗
        单例 只需要实例化一次
        点击登录，点赞 评论等设计用户权限的地方
    - 接口 实现这个接口
        static getInstance 不用去new
    - 两种写法
        - 面向对象
        - 闭包
    
- 300. 最长递增子序列
    - 最值问题用动态规划或贪心算法解决
    - 递归是自顶向下解决问题，(函数入栈) dp 自底向上 (状态转移方程)
    - 递归的思考去考虑规则
    - dp 状态转移方程
    - 局部最优解和全局最优解是保持一致的，和贪心的本质区别

    dp[i][j]

- diff 算法
    - vue/react 不做DOM ， 虚拟DOM  tag, props, children
        DOM
        <ul class='list'>
            <li class="item on">1</li>
            <li class="item">2</li>
            <li class="item">3</li>
        </ul>
        MVVM items ref   template  v-for
        var vdom1 = ('ul',{class:'list'},[
            ('li',{class:'item on'},'1'),
            ('li',{class:'item'},'2'),
            ('li',{class:'item'},'3'),
        ])

        patches [`2 on`]
        items li2 item on new  vdomm

- 算法送分题
    奖励些刷过LeetCode 算法学习的同学
- 动态规划，买股票问题
    - 最值问题 动态规划 状态转移方程
    - 贪心算法

    
- promise 处理并发请求的方法 