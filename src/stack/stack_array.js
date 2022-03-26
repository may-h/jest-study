class StackArray {
    constructor() {
        this.list = [];
    }

    size() {
        return this.list.length;
    }

    pop() {
        if(this.list.length === 0) {
            throw new Error('Stack is empty');
        }
        return this.list.pop();
    }

    push(element) {
        this.list.push(element);
    }

    peek() {
        if(this.list.length === 0) {
            throw new Error('Stack is empty');
        } else {
            return this.list[this.size() -1];
        }
    }
}

module.exports = StackArray;