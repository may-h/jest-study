const Stack = require('../stack');

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('is created empty', () => {
        expect(stack.size()).toBe(0);
    })

    it('allows to push item', () => {
        stack.push('banana');
        expect(stack.size()).toBe(1);
    })

    describe('pop', () => {
        it('throws an error if stack is empty', () => {
            expect(() => {
                stack.pop();
            }).toThrow('Stack is empty');
        });

        it('returns the last item and remove it', () => {
            stack.push('banana');
            stack.push('apple');

            expect(stack.pop()).toBe('apple');
            expect(stack.size()).toBe(1);
        });

    });


    describe('peek', () => {
        it('throws an error if stack is empty', () => {
            expect(() => {
                stack.peek();
            }).toThrow('Stack is empty');
        });

        it('returns last item but not remove it', () => {
            stack.push('banana');
            stack.push('apple');

            expect(stack.peek()).toBe('apple');
            expect(stack.size()).toBe(2);
        })
    });
})