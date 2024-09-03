function combine(arr) {
    // 所有的组合，子项[1,3,5],path
    const result = [];

    function backtrack(index, path){
        if(index === arr.length){
            result.push([...path]);
        }

        for(let num of arr[index]){ // 遍历一层
            path.push(num); //
            backtrack(index+1,path);
            path.pop();// 回溯
        }
    }
    // 从第0行开始递归，path 收集
    backtrack(0,[])
    return result;
}

let arr = [
    [1,2],
    [3,4],
    [5,6]
]