class LinkedListNode {
	public val: string;
	public next: LinkedListNode | null;

	constructor(val: string, next?: LinkedListNode | null) {
		this.val = val;
		this.next = next || null;
	}
}
class BrowserHistory {
	private head: LinkedListNode;
	private curr: LinkedListNode;
	private size: number;

	constructor(homepage: string) {
		this.head = new LinkedListNode(homepage);
		this.size = 1;
	}

	private getIndex(node: LinkedListNode): number {
		let ptr: LinkedListNode | null = this.head,
			idx = 0;
		while (ptr !== null) {
			if (ptr.val === node.val) {
				break;
			}
			idx++;
			ptr = ptr.next;
		}
		return idx;
	}

	private getNodeByIndex(reqIdx: number): LinkedListNode {
		let ptr: LinkedListNode | null = this.head,
			idx = 0;
		while (ptr !== null) {
			if (idx === reqIdx) {
				break;
			}
			idx++;
			ptr = ptr.next;
		}
		return ptr || this.head;
	}

	visit(url: string): void {
		let tail = this.curr || this.head;
		const newNode = new LinkedListNode(url);
		tail.next = newNode;
		this.curr = newNode;
		this.size = this.getIndex(this.curr) + 1;
	}

	back(steps: number): string {
		let currentIdx = this.getIndex(this.curr);
		const reqIdx = currentIdx - steps < 0 ? 0 : currentIdx - steps;
		const result = this.getNodeByIndex(reqIdx);
		this.curr = result;
		return result.val;
	}

	forward(steps: number): string {
		let currentIdx = this.getIndex(this.curr);
		let reqIdx =
			steps + currentIdx > this.size ? this.size - 1 : steps + currentIdx;
		const result = this.getNodeByIndex(reqIdx);
		this.curr = result;
		return result.val;
	}
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
