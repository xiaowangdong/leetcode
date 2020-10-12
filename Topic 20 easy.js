/**给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [],l = s.length
    if(l%2) return false
    for(let i =0;i<l;i++){
        let str = s[i]
        switch(str){
            case "(" :
                arr.push(str);
                break;
            case '{' :
                arr.push(str);
                break;
            case '[' :
                arr.push(str);
                break;
            case ")" :
                if(arr.pop() !== "(") return false;
                break;
            case '}' :
                if(arr.pop() !== '{') return false;
                break;
            case ']' :
                if(arr.pop() !== '[') return false;
                break;
        }
    }
    return !arr.length
};

console.log(isValid('()'));

/**
 * Solving Problems
 * Traversing through s can be similar to go into and out of stack,
 * Run into stack when left bracket is encountered,
 * Run out of stack when right bracket is encountered.as the same time,
 * when the last bit in the arr array is not equal to the left bracket,
 * it means that the condition is not met and false is return
 * Switch loop is required
 * The switch statement is used to perform the different action based on different condition
 * 
 * Examples
 * switch(expression){
 *      case condition : 
 *          code block;(if the expression == condition,The following code block will be executed)
 *          break;(Keyword,The switch loop teriminates here and jumps out of the loop)
 *      case condition2 :
 *          code block;
 *      default : 
 *          default code block;(what to do when all the matches don't exist)
 * }
 */