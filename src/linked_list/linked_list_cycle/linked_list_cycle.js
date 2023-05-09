/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	if (!head) return false;

	let tortose,
		hare = head;

	while (hare && hare.next) {
		if (tortose === hare) return true;

		// Increament the tortose and hare
		tortose = tortose.next;
		hare = hare.next.next;
	}

	return false;
};

module.exports = hasCycle;
