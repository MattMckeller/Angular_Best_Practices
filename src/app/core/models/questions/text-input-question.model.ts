import {QuestionType} from '@enums/question-type.enum';
import {Question} from './question.model';

export interface TextInputQuestion extends Question {
    type: QuestionType.TEXT;
}
