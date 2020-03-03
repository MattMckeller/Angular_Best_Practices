import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpParams} from '@angular/common/http';
import {QuestionOption} from '@core';

export interface UnmappedNaicsResponse {
    code: string;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class NaicsService {

    constructor(private apiService: ApiService) {
    }

    search(query: string): Observable<QuestionOption[]> {
        const params = new HttpParams({fromObject: {q: query}});
        return this.apiService.get('/naics/search', params)
            .pipe(map(res => res.map(this.mapResponse)));
    }

    private mapResponse({code, description}: UnmappedNaicsResponse): QuestionOption {
        return {
            id: parseInt(code, 10),
            text: description
        };
    }
}
