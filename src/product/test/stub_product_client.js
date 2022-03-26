// 테스트용으로만 사용하기 때문에 test 폴더 안에 둔다. (배포할때는 제외됨)

// Mock이 아니라 Class이다.
// 하지만 기존의 ProductClinet와 동일한 인터페이스를 가지고 있으면서 네트워크를 사용하는 것이 아니라(의존하지 않고)
// 데이터를 바로 리턴하는 형태로 만들어주었다.
class StubProductClinet {
    async fetchItems() {
        return [
            {item: 'Milk', available: true},
            {item: 'Banana', available: false},
        ];
    }
}

module.exports = StubProductClinet;