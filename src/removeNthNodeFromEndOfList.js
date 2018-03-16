/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let count = 0;
  let p = head;
  while (p) {
    ++count;
    p = p.next;
  }
  let index = count - n;
  p = head;
  let prev = null;
  while (index) {
    prev = p;
    p = p.next;
    --index;
  }
  if (prev) {
    prev.next = p.next;
  } else {
    head = head.next;
  }
  return head;
};