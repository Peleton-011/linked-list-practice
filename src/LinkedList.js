export default class LinkedList {
	_head = new Node();

	append(val) {
		let lastNode = this._head;

		while (lastNode.nextNode) {
			lastNode = lastNode.nextNode;
		}

		if (lastNode.value) {
			lastNode.nextNode = new Node(val);
			return;
		}
		lastNode.value = val;
	}

	prepend(val) {
		this._head = new Node(val, this._head);
	}

	toString() {
		let str = "";

		let lastNode = this._head;

		while (lastNode.nextNode) {
			str += `(${lastNode.value}) -> `;
			lastNode = lastNode.nextNode;
		}
		str += `(${lastNode.value}) `;

		console.log(str);
	}

	get size() {
		let lastNode = this._head;
		let size = 0;

		while (lastNode.nextNode) {
			size++;
			lastNode = lastNode.nextNode;
		}
		if (lastNode.value) {
			return ++size;
		}
		return size;
	}

	get head() {
		return this._head;
	}

	get tail() {
		let lastNode = this._head;

		while (lastNode.nextNode) {
			lastNode = lastNode.nextNode;
		}
		return lastNode;
	}

	at(index) {
		let curr = this._head;
		for (let i = 0; i < index; i++) {
			curr = curr.nextNode;
		}
		return curr;
	}

	pop() {
		let curr = this._head;
		for (let i = 0; i < this.size - 2; i++) {
			curr = curr.nextNode;
		}
		curr.nextNode = null;
	}

	contains(val) {
		let lastNode = this._head;

		while (lastNode.nextNode) {
			if (lastNode.value == val) return true;
			lastNode = lastNode.nextNode;
		}
		return lastNode.value == val;
	}

	find(val) {
		let lastNode = this._head;
		let index = 0;

		while (lastNode.value != val && lastNode.nextNode) {
			index++;
			lastNode = lastNode.nextNode;
		}
		if (lastNode.value != val) {
			return null;
		}
		return index;
	}
}

class Node {
	/**
	 * @param {any} val
	 */
	set value(val) {
		this._value = val;
	}
	get value() {
		return this._value;
	}

	constructor(val, nextNode) {
		this._value = val || null;
		this._nextNode = nextNode || null;
	}

	/**
	 * @param {Node} newNextNode
	 */
	set nextNode(newNextNode) {
		this._nextNode = newNextNode;
	}
	get nextNode() {
		return this._nextNode;
	}
}
