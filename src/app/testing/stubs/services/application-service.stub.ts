import {ApplicationRequest, SuccessResponse} from '@core';
import {of} from 'rxjs';

export class ApplicationServiceStub {
    submitApplication(data: ApplicationRequest) {
        return of({message: 'success'} as SuccessResponse);
    }
}
