import {Observable, of} from 'rxjs';
import {TEST_QUESTIONS} from '@app/testing/data/questions.data';

export class QuestionsServiceStub {
    public static QUESTION_RESPONSE_VALUES = TEST_QUESTIONS;

    public getQuestions(): Observable<any> {
        return of(QuestionsServiceStub.QUESTION_RESPONSE_VALUES);
    }
}
