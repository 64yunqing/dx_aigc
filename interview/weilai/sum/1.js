function twoSum(nums,target){
    // 查询时间是O(1)
    const map = new Map(); // hashMap key 可以是对象

    for(let i = 0; i< nums.length; i++){ // O(n)
        const complement = target - nums[i]; // 先求差
        if(map.has(complement)){ // 补数在map中
            return [map.get(complement),i];
        }
        map.set(nums[i],i);
    }
    return []
}