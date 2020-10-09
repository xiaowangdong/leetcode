/**
 * 
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。
示例 1:
输入: ["flower","flow","flight"]
输出: "fl"
示例 2:
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:
所有输入只包含小写字母 a-z 。
 */

 /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0 ) return ""
    let frist = strs[0]
    for(let i =1;i<strs.length;i++){
        let j =0;
        for(;j<frist.length&&j<strs[i].length;j++){
            if(strs[i][j] != frist[j]){
                break;
            }
        }
        frist = frist.substr(0,j)
        if(frist === "") return frist
    }
    return frist
};
console.log(longestCommonPrefix(["flower","flow","flight"]));

/**
 * 解题思路     Solving Problems
 * 1.传入strs为空，返回""
 * 2.暂存strs中第一个字符串将其与strs中其他字符串进行比对找出公有前缀
 * 3.第一层循环用每次拿出strs中的一个字符串，并将第二层循环中的比对下标置空
 * 4.第二层循环用于比对从strs中拿出的字符串与初始字符串
 * 5.frist = frist.substr(0,j) 用于找出公有前缀
 */
