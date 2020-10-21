/**
 * 实现 strStr() 函数。
给定一个 haystack 字符串和一个 needle 字符串，
在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，
则返回  -1。

示例 1:
输入: haystack = "hello", needle = "ll"
输出: 2
示例 2:
输入: haystack = "aaaaa", needle = "bba"
输出: -1
说明:
当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

 // KMP算法
var strStr = function(haystack, needle) {
    if(needle == "")return 0;
    let next = getNext(needle);
    let hi = 0;
    let ne = 0;
    while(hi<haystack.length){
        if(ne == -1 || haystack[hi] == needle[ne]){//相等情况
            if(ne == needle.length - 1)return (hi - needle.length + 1);
            hi++;
            ne++;
        }else{//失配情况
            ne = next[ne];
        }
    }
    return -1;
};
 
function getNext(needle){//获取next数组
    let next = [];
    next[0] = -1;
    let i = 0;
    let j = -1;
    while(i < needle.length){
        if(j == -1 || needle[i] == needle[j]){
            next[++i] = ++j;
        }else{
            j = next[j]//回溯
        }
    }
    return next;
}
