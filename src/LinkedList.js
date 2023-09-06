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

            str += `(${lastNode.value}) -> `
			lastNode = lastNode.nextNode;
		}
        str += `(${lastNode.value}) `

        console.log(str)
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
