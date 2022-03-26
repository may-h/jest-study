const Calculator = require('../calculator.js');


test('add', () => {
    const calculator = new Calculator();
    calculator.add(3)
    expect(calculator.value).toBe(3);
});


test('subtract', () => {
    const calculator = new Calculator();
    calculator.set(5);
    calculator.subtract(3)
    expect(calculator.value).toBe(2);
});
// describe; 관련있는 test를 group으로 묶은 것
describe('Calculator', () => {

    let cal;
    // 각 테스트 코드가 실핻하기 전에 수행하는 함수
    beforeEach(() => {
        cal = new Calculator();
    })

    // 각각의 테스트(it)는 서로 독립적으로 만드는 것이 중요하다.
    it('inits with 0', () => { // it = Calculator
        expect(cal.value).toBe(0)
    })

    it('sets', () => {
        cal.set(9)
        expect(cal.value).toBe(9);
    })

    it('clear', () => {
        cal.set(9)
        cal.clear();
        expect(cal.value).toBe(0)
    })

    describe('add', () => {
        it('add', () => {
            cal.set(1);
            cal.add(4);
            expect(cal.value).toBe(5)
        })

        it('add should throw an error if value is greater than 100', () => {
            // Error expect test
            expect(() => { // callback 함수 안에 error 발생 코드를 입력한다.
                cal.add(101)
            }).toThrow('Value can not be greater than 100')
        })
    })


    it('subtract', () => {
        cal.set(15);
        cal.subtract(5);
        expect(cal.value).toBe(10)
    })

    it('multiply', () => {
        cal.set(2);
        cal.multiply(4);
        expect(cal.value).toBe(8)
    })

    describe('divides', () => {
        it( '0 / 0 === NaN', () => {
            cal.divide(0);
            expect(cal.value).toBe(NaN);
        });

        it('1 / 0 === Infinity', () => {
            cal.set(1);
            cal.divide(0);
            expect(cal.value).toBe(Infinity);
        })

        it(' 2 / 2 === 0', () => {
            cal.set(2);
            cal.divide(2);
            expect(cal.value).toBe(1)
        })
    })
})