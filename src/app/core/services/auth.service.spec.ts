import {AuthService} from '@core';

declare var require: any;

const md5 = require('md5');

describe('Unit Test - AuthService', () => {
    let service: AuthService;
    beforeEach(() => {
        service = new AuthService();
    });

    // or session's email
    it('#getToken should return a md5 hash value of the provided emailAddress', () => {
        const email = 'test@gmail.com';

        const token = service.getToken(email);

        expect(token).toBe(md5(email));
    });

    it('#getToken should return a value even without providing an email address', () => {
        const token = service.getToken();

        expect(token).toBeTruthy();
    });
});
