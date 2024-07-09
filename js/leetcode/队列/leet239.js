let nums = [1,3,-1,-3,5,3,6,7] ,k=3
var maxSlidingWindow = function(nums, k) {
    const len = nums.length
    const res =[]
    const queue = []    //递减
    for(let i = 0;i < len ; i ++){
        // 存入的值是不是维持递减趋势
        while(queue.length && nums[queue[queue.length-1]] < nums[i]){
            queue.pop()
        }
        queue.push(i)
        //右进左出
        while(queue.length && queue[0] < i-k+1){
            queue.shift()
        }
        //到了窗户宽度
        if(i >= k-1){
            res.push(nums[queue[0]])
            //判断是否是队头
            if(queue[0] === i-k+1){
                queue.shift()
            }
        }
    }
    return res
};