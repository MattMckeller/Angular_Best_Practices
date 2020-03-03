import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Question} from '../models';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class QuestionsService {

    constructor(private apiService: ApiService) {
    }

    getQuestions(): Observable<Question[]> {
        return this.apiService.get('/questions');
    }
}
