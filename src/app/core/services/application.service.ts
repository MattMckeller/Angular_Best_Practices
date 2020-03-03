import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';
import {ApplicationRequest, ErrorResponse, SuccessResponse} from '@core';

@Injectable({
    providedIn: 'root'
})
export class ApplicationService {

    constructor(private apiService: ApiService) {
    }

    submitApplication(payload: ApplicationRequest): Observable<ErrorResponse | SuccessResponse> {
        return this.apiService
            .post(
                '/application_forms',
                payload
            );
    }
}


