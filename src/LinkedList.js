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
}

class Node {
	_value = null;
	/**
	 * @param {any} val
	 */
	set value(val) {
		this._value = val;
	}
	get value() {
		return this._value;
	}

	constructor(val) {
		this._value = val;
	}

	_nextNode = null;
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
