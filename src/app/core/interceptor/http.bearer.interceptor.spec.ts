import {HttpBearerInterceptor} from './http.bearer.interceptor';
import {AuthServiceStub} from '@stubs/services/auth-service.stub';
import {HttpHandler, HttpRequest} from '@angular/common/http';

class HttpRequestStub {
    clone(...params): any {
        return this;
    }
}

class HttpHandlerStub {
    handle(...params): any {
        return this;
    }
}

describe('Unit Tests - Http Bearer Intercepter', () => {
    const auth = new AuthServiceStub();
    const interceptor = new HttpBearerInterceptor(auth);
    const request = new HttpRequestStub() as HttpRequest<any>;
    const handler = new HttpHandlerStub() as HttpHandler;

    it(`Should set the intercepted Http Request's Authorization Header to 'Bearer <token value>'`, () => {
        const expectedHeaders = {
            setHeaders: {
                Authorization: `Bearer ${auth.getToken()}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        const requestSpy = spyOn(request, 'clone').and.callThrough();
        const handlerSpy = spyOn(handler, 'handle').and.callThrough();

        interceptor.intercept(request, handler);

        expect(requestSpy).toHaveBeenCalledWith(expectedHeaders);
        expect(handlerSpy).toHaveBeenCalledWith(request);
    });
});
