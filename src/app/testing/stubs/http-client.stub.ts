import {of} from 'rxjs';

export class HttpClientStub {
    public static RESPONSE_VALUE = of([1, 2, 3]);

    get(...params) {
        return HttpClientStub.RESPONSE_VALUE;
    }

    post(...params) {
        return HttpClientStub.RESPONSE_VALUE;
    }
}
