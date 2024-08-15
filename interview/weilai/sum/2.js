// 0
function threeSum(nums,target){
    // 排序利于双指针，和重复跳过
    nums.sort((a,b)=>a-b)// 从小到大排序 冒泡

    const result = [];
    for(let i = 0 ; i< nums.length - 2 ;i++){ // left, right 不用迭代
        if(i>0 && nums[i] === nums[i-1]) continue;
        let left = i+1;
        let right = nums.length-1;
        while(left < right){ // O(n^2)
            const sum = nums[i] + nums[left] + nums[right];
            if(sum === 0){
                result.push([nums[i],nums[left],nums[right]]);
                // 跳过重复 left right
                while (left<right && nums[left] === nums[left+1]) left++;
                while (left<right && nums[right] === nums[right-1]) right--;

                left++;
                right--;
            } else if(sum < 0){
                left++;
            } else {
                right--;
            }
        }
    }
    return result;

}