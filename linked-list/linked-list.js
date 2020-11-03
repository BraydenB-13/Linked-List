class LinkedListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
  }
  
	insert(val) {
		let newNode = new LinkedListNode(val);

		if (!this.head) {
			this.head = newNode;
		} else {
			let node = this.head;
			while (node) {
				if (node.next == null) {
					node.next = newNode;
					break;
				}
				node = node.next;
			}
		}
  }

  remove(val) {
		let node = this.head;
		let previous;
		if (!node.next) {
			this.head = null;
		} else {
			while (node) {
				if (node.data == val) {
					previous.next = node.next;
				}
				previous = node;
				node = node.next;
			}
		}
  }
  
  size() {
		let count = 0;
		let node = this.head;
		while (node) {
			count++;
			node = node.next;
		}
		return count;
  }
  
	find(val) {
		let node = this.head;
		while (node) {
			if (node.data == val) {
				return true;
			}
			node = node.next;
		}
		return false;
  }
}