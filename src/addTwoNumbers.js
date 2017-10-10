/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var head, cur = new ListNode(), temp, first = true, flag = 0, p1 = l1, p2 = l2;
    while (p1 && p2) {
        temp = new ListNode();
        var sum = p1.val + p2.val + flag;
        temp.val = sum % 10;
        flag = Math.floor(sum / 10);
        if (first) {
            head = cur = temp;
            first = false;
        } else {
            cur.next = temp;
        }
        cur = temp;
        p1 = p1.next;
        p2 = p2.next;
    }
    var makeSingleLink = function (p) {
        while (p) {
            temp = new ListNode();
            var sum = p.val + flag;
            temp.val = sum % 10;
            flag = Math.floor(sum / 10);
            cur.next = temp;
            cur = temp;
            p = p.next;
        }
    };
    makeSingleLink(p1);
    makeSingleLink(p2);
    if (flag) {
        temp = new ListNode();
        temp.val = flag;
        cur.next = temp;
    }
    return head;
};
