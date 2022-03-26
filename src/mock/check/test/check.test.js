const check = require('../check')

describe('Check', () => {
    let onSuccess; // mock function
    let onFail;

    beforeEach(() => {
        onSuccess = jest.fn();
        onFail = jest.fn();
    })

    it('should call onSuccess when predicate is true', () => {
        check(() => true, onSuccess, onFail);

        // expect(onSuccess.mock.calls.length).toBe(1) // onSuccess.mock.calls.length 함수의 호출된 횟수!
        // 즉, precidate가 true이기 때문에, onSuccess 함수가 한번 호출 된 것이다!
        expect(onSuccess).toHaveBeenCalledTimes(1);

        // expect(onSuccess.mock.calls[0][0]).toBe('yes'); // calls의 첫번째로 호출된 함수의 첫번째 인자
        expect(onSuccess).toHaveBeenCalledWith('yes');

        expect(onFail).toHaveBeenCalledTimes(0);
    })

    it('should call onFail when predicate is false', () => {
        check(() => false, onSuccess, onFail);

        expect(onFail).toHaveBeenCalledTimes(1);
        expect(onFail).toHaveBeenCalledWith('no');
        expect(onSuccess).toHaveBeenCalledTimes(0);
    })
})