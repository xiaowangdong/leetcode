var nums =[2,3,3,3,2], val = 2

// 解法一：交换移除
var removeElement = function(nums, val) {
    let l = nums.length;
    for(let i = 0;i<l;){
        if(nums[i] === val){
            nums[i] = nums[l - 1 ]
            l--
        }else{
            i++
        }
    }
    return l
};

/**
 * 解题思路：
 * 遍历数组nums，指针为i，总长度为l；
 * 当遍历过程中遍历项与目标数不相同时，i自增1，继续下次遍历；
 * 当遍历项与目标数相同时，遍历项与最后一项交换，l自减一；！！！自己写的出错在这里，交换了之后l自减，指针i不变
 * 这种思路在移除元素较少时更适合使用，最极端的情况是没有元素需要移除，遍历一遍结束即可。
 * 时间复杂度：O(n);空间复杂度：O(1)
 * 
 * Train of thought
 * Traverse the array nums , the pointer is i , total length is l;
 * When the number of traversal term is not the same as the target number during traversal, i increases by 1, continues next traversal
 * When the number of traversal term is the same as the target number ,traversal term exchanges with the last term 
 * This idea is more suitable for removing fewer elements. In the most extreme case,no element needs to be removed,and the traversal can be completed once
 */


// 解法二：覆盖遍历

var removeElement = function(nums, val) {
    let ans = 0
    nums.forEach(num => {
        if(e != val){
            nums[ans] = num
            ans ++
        }
    });
    return ans
};

/**
 * 解题思路：
 * 遍历数组nums，每次拿出一项,
 * 如果拿出的项不等于需要移除的数字，则进行拷贝覆盖：nums[ans] = num，同时ans自增1
 * 如果相同时，则跳过该数字，ans不变（如果后面出现了与需要移除的数字不想等的会覆盖此项），
 * 最后ans即为返回的长度
 * 这种思路在移除元素较多时更适合使用，最极端的情况是全部元素都需要移除，遍历一遍结束即可
 * 时间复杂度：O(n)；空间复杂度：O（1）
 * 
 * Train of thought
 * traverse the array nums and take out one item at a time
 * If the number of items token out is not equal to the number to be removed,copy and overlay,nums[ans] = num,at the same time, ans increased by 1
 * If items is the same , the number will be skipped and the ans is unchanged(this item is overriden if an unequal number follows that needs to be removed)
 * Finally,ans is the length returned
 * This idea is more suitable for remove more elements , In the most extreme case, all elements need to be removed
 * 
 */