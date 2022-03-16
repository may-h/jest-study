const fetchProduct = require('../async.js');

// 비동기 함수의 테스트 예제
describe('Async', () => {
    // 👎🏻 slow
    it('async - done', (done) => { // it 콜백 인자 값에 DoneCallback을 넘겨주면 비동기 결과를 확인할 수 있다.
        fetchProduct().then(item => {
            expect(item).toEqual({item: 'Milk', price: 200})
            done();
        })
    })

    // 👍🏻
    it('async - return', () => {
        return fetchProduct().then(item => {
            expect(item).toEqual({item: 'Milk', price: 200})
        })
    })

    // 👍🏻
    it('async - await', async () => {
        const product = await fetchProduct();
        expect(product).toEqual({item: 'Milk', price: 200});
    })

    if ('async - resolves', () => {
        return expect(fetchProduct()).resolves.toEqual({
            item: 'Milk', price: 200
        });
    });

    if ('async - reject', () => {
        return expect(fetchProduct('error')).rejects.toBe('network error');
    });


    // ❌  Promise 결과를 기다리지 않고 블럭이 먼저 끝나기 때문에 pass로 넘어감.
    // it('async', () => {
    //     fetchProduct().then(item => {
    //         expect(item).toEqual({item: 'Poop', price: 200})
    //     })
    // })
})