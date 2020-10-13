var mergeTwoLists = function(l1, l2) {
    return l1 && l2 && {
        val: Math.min(l1.val, l2.val),
        next: l1.val < l2.val && mergeTwoLists(l1.next, l2) || mergeTwoLists(l1, l2.next)  
    } || l1 || l2
};