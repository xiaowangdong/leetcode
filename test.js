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

console.log(getNext('qwer'));