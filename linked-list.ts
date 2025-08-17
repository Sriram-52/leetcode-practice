class LinkedList {
	public val: number;
	public next: LinkedList | null;

	constructor(val: number, next?: LinkedList | null) {
		this.val = val;
		this.next = next || null;
	}
}

class MyLinkedList {
	private head: LinkedList | null = null;
	private size: number = 0;

	constructor() {
		this.head = null;
	}

	get(index: number): number {
		let idx = 0;
		let curr = this.head;
		while (curr !== null) {
			if (idx === index) {
				return curr.val;
			}
			curr = curr.next;
			idx++;
		}
		return -1;
	}

	addAtHead(val: number): void {
		const newNode = new LinkedList(val);
		if (this.head) {
			newNode.next = this.head;
			this.head = newNode;
			this.size++;
		} else {
			this.head = newNode;
			this.size++;
		}
	}

	addAtTail(val: number): void {
		if (!this.head) {
			return this.addAtHead(val);
		}
		let tail: LinkedList | null = this.head;
		while (tail?.next !== null) {
			tail = tail?.next || null;
		}
		const newNode = new LinkedList(val);
		if (tail !== null) {
			tail.next = newNode;
		}
		this.size++;
	}

	addAtIndex(index: number, val: number): void {
		if (index === 0) {
			return this.addAtHead(val);
		}

		if (index === this.size) {
			return this.addAtTail(val);
		}

		if (index > this.size) {
			return;
		}

		let curr = this.head,
			idx = 0,
			prev: LinkedList | null = null;
		const newNode = new LinkedList(val);
		while (curr !== null) {
			if (idx === index) {
				if (prev !== null) {
					prev.next = newNode;
					newNode.next = curr;
					this.size++;
					break;
				}
			}
			idx++;
			prev = curr;
			curr = curr.next;
		}
	}

	deleteAtIndex(index: number): void {
		if (this.size >= index || index < 0) {
			return;
		}
		let curr = this.head,
			idx = 0,
			prev: LinkedList | null = null;
		while (curr !== null) {
			if (idx === index) {
				if (prev !== null) {
					prev.next = curr.next;
				} else if (this.head) {
					this.head = this.head.next;
				}
				this.size--;
				break;
			}
			idx++;
			prev = curr;
			curr = curr.next;
		}
	}
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
