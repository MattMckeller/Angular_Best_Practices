export class AuthServiceStub {
    public static TOKEN_VALUE = 'abc123';

    getToken(...params): string {
        return AuthServiceStub.TOKEN_VALUE;
    }
}
