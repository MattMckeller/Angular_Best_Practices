import {Observable, of} from 'rxjs';

export class ApiServiceStub {
    public static FAKE_API_RESPONSE_VALUES = [1, 2, 3];

    get() {
        return of(ApiServiceStub.FAKE_API_RESPONSE_VALUES) as Observable<any>;
    }

    post() {
        return of(ApiServiceStub.FAKE_API_RESPONSE_VALUES) as Observable<any>;
    }
}
