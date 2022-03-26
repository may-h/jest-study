const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');

// Mock을 남용하는 사례 👎🏻

// 실제 구현된 코드/의존성을 사용하는게 아니라 Mock을 사용한다. (네트워크와 같은 환경 요인에 영향을 받지 않기 위해)
jest.mock('../product_client'); // 모듈 전체를 Mock

describe('ProductService', () => {
    // ProductClient의 fetchItems() Mock 함수를 만들어 준다.
    const fetchItems = jest.fn(async() => [
        {item: 'Milk', available: true},
        {item: 'Banana', available: false},
    ]);
    // 함수와 ProductClient Mock을 연결해 준다.
    ProductClient.mockImplementation(() => {
        return {
            fetchItems // 위에 만들어준 fetchItems() 함수를 전달한다.
        }
    })
    let productService;

    beforeEach(() => {
        // ProductService의 fetchAvaliableItems 함수만 테스트 해보자.
        // 그러나, ProductClient와 의존하지 않도록 테스트코드를 작성해야 한다.
        // 그러려면 ProductClient를 Mock으로 만들어 사용하면 된다.
        productService = new ProductService();
    });

    it('should filter out only avaliable items', async () => {
        const items = await productService.fetchAvaliableItems();
        expect(items.length).toBe(1);
        expect(items).toEqual([ {item: 'Milk', available: true}])
    });

    it('test', async () => {
        const items = await productService.fetchAvaliableItems();
        expect(fetchItems).toHaveBeenCalledTimes(1);
    });
});