/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        I : 1,
        IV : 4,
        V : 5,
        IX : 9,
        X : 10,
        XL : 40,
        L : 50,
        XC : 90,
        C : 100,
        CD : 400,
        D : 500,
        CM : 900,
        M : 1000
    }
    let nums = 0
    for(let i =0;i<s.length;){
        if(i+1<s.length && map[s.substring(i,i+2)]){
            nums += map[s.substring(i,i+2)]
            i += 2
        }else{
            nums += map[s.substring(i,i+1)];
            i++
        }
    }
    return nums
};

console.log(romanToInt('VII'));
