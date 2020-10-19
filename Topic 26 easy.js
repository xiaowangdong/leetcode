/**
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，
 * 使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

示例 1:
给定数组 nums = [1,1,2], 
函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
你不需要考虑数组中超出新长度后面的元素。

示例 2:
给定 nums = [0,0,1,1,1,2,2,3,3,4],
函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
你不需要考虑数组中超出新长度后面的元素。
 */

var nums = [0,0,1,1,1,2,2,3,3,4]
/**
 * 自己写的
 * 
 */
var removeDuplicates = function(nums) {
    let l = nums.length
    for(let i = 0 ;i<l;i++){
        if(nums[i+1] !== undefined){
            if(nums[i] === nums[i+1]){
                nums.splice(i,1),i-- // 注意点：在碰到相同数的时候需要将指针暂停重新比对
                // Note : when encountering the same number,you need to pause the pointer for re alignment
            }
        }
        
    }
    return nums.length
};

/**
 * 
 * 双指针法
 */

var removeDuplicates = function(nums) {
    let l = nums.length,j=0
    for(let i = 1 ;i<l;i++){
        if(nums[i] != nums[i-1]){
            j++
        }else{
            nums[j] = nums[i]
        }
        
    }
    return j+1
};