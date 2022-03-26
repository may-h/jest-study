const UserClient = require('../user_clinet.js');
const UserService = require('../user_service.js');

// login이 되어 있으면 login을 호출하면 안된다는 요구사항이 있다.
// 했는지 안했는지(login 인지 아닌지) 행동에 대한 테스트를 할 때는 Stub만 가지고 하기엔 무리가 있다.
// = 특정 상황에 호출하는지 안하는지에 대한 테스틀 할 때는 Mock을 이용해야 한다.
jest.mock('../user_client');

describe('UserService', () => {
    const login = jest.fn(async () => 'success');
    UserClient.mockImplementation(() => {
        return {
            login
        }
    });
    let userService;

    beforeEach(() => {
        userService = new UserService(new UserClient());
    });

    it('calls login() on UserClient when tries to login', async () => {
        await userService.login('abc', 'abc');
        expect(login.mock.calls.length).toBe(1);
    });

    it('should ot call login() on UserClient again if already logged in', async () => {
        await userService.login('abc', 'abc');
        await userService.login('abc', 'abc');

        expect(login.mock.calls.length).toBe(1);
    })
})