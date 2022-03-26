class Stack {
    constructor() {
        this._size = 0;
        this.head = null;
    }

    size() {
        return this._size;
    }

    pop() {
        if(this.head === null) {
            throw new Error('Stack is empty');
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.item;
    }

    push(element) {
        const node = { item : element, next: this.head };
        this.head = node;
        this._size++;
    }

    peek() {
        if(this.head === null) {
            throw new Error('Stack is empty');
        }
        return this.head.item;
    }
}

module.exports = Stack;