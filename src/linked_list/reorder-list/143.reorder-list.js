/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 *
 * https://leetcode.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (52.81%)
 * Likes:    8756
 * Dislikes: 295
 * Total Accepted:    670.7K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,3,4]'
 *
 * You are given the head of a singly linked-list. The list can be represented
 * as:
 * 
 * 
 * L0 → L1 → … → Ln - 1 → Ln
 * 
 * 
 * Reorder the list to be on the following form:
 * 
 * 
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * 
 * 
 * You may not modify the values in the list's nodes. Only nodes themselves may
 * be changed.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: head = [1,2,3,4]
 * Output: [1,4,2,3]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: head = [1,2,3,4,5]
 * Output: [1,5,2,4,3]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the list is in the range [1, 5 * 10^4].
 * 1 <= Node.val <= 1000
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return head;

    // Step one: find the middle.
    let slow = head;
    let fast = head.next;

    while(fast) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Now the slow is at the middle

    // Step two reverse from the middle
    let [prev, curr] = [null, slow.next];
    slow.next = null;
    while (curr) {
      let next = curr.next // Save next
      curr.next = prev // Point curr to back
      prev = curr;
      curr = next;
    }

    // Step three: merge the two
    let [ptr1, ptr2] = [head, prev];
    while(p2) {
      let temp1 = ptr1.next;
      let temp2 = ptr2.next;
      ptr1.ne
    }

};
// @lc code=end

