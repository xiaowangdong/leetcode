// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

var twoSum = function(nums, target) {
    let prevNums = {} // 在这里存入遍历过的数字
    for(let i = 0;i<nums.length;i++){
        let currentnums = nums[i]
        let secondnums = target - currentnums
        let secondindex = prevNums[secondnums]
        if(secondindex !== undefined) {
            return [secondindex,i]
        }else{ // 没有在prevNums中找到就存入，以空间换取时间
            prevNums[currentnums] = i
        }
    }

};

console.log(twoSum([2,7,11,15],9));