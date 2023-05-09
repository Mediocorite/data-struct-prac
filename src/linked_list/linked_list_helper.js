// Node class represents a node in the linked list
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// LinkedList class represents the linked list
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// add a node to the end of the list
	addNode(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
	}

	// remove a node from the list
	removeNode(value) {
		let currentNode = this.head;
		let previousNode = null;

		while (currentNode) {
			if (currentNode.value === value) {
				if (!previousNode) {
					this.head = currentNode.next;
				} else {
					previousNode.next = currentNode.next;
				}

				this.length--;
				return;
			}

			previousNode = currentNode;
			currentNode = currentNode.next;
		}
	}

	// find a node in the list
	findNode(value) {
		let currentNode = this.head;

		while (currentNode) {
			if (currentNode.value === value) {
				return currentNode;
			}

			currentNode = currentNode.next;
		}

		return null;
	}

	// print the list values
	printList() {
		let currentNode = this.head;
		let values = [];

		while (currentNode) {
			values.push(currentNode.value);
			currentNode = currentNode.next;
		}

		console.log(values.join(" -> "));
	}
}

// export the LinkedList class
module.exports = LinkedList;
