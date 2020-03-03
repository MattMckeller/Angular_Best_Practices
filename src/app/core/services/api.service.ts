import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '@env/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    private formatErrors(error: any) {
        return throwError(error.error);
    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${environment.apiEndpoint}${path}`, {params})
            .pipe(catchError(this.formatErrors));
    }

    post(path: string, body: object = {}): Observable<any> {
        return this.http.post(
            `${environment.apiEndpoint}${path}`,
            JSON.stringify(body)
        ).pipe(catchError(this.formatErrors));
    }
}
