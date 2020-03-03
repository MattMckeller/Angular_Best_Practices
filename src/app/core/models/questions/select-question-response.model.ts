import {QuestionResponse} from './question-response.model';

export interface SelectQuestionResponse extends QuestionResponse {
    question_id: number;
    option_id: number;
}

