import {QuestionResponse} from './question-response.model';

export interface TextInputQuestionResponse extends QuestionResponse {
    question_id: number;
    text: string;
}
