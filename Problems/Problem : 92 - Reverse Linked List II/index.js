/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if(left === right) return head
    let count = 0
    const data = []
    let newHead = head
    while(newHead){
        if(left-2<count && count<right){
            data.push(newHead.val)
        }
        count++
        newHead = newHead.next
    }
    data.reverse()
    count = 0
    let temp = head
    while(temp){
        if(left-2<count && count<right){
            temp.val = data[count-(left-1)]
        }
        count++
        temp = temp.next
    }
    return head
};