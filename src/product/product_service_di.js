class ProductService {
    constructor(productClient) {
        this.productClient = productClient; // 외부에서 선언 (DI)
    }

    fetchAvaliableItems() {
        return this.productClient
            .fetchItems()
            .then(items => items.filter(item => item.available));
    }
}

module.exports = ProductService;