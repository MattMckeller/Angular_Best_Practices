import {QuestionOption} from './question-option.model';
import {QuestionType} from '@enums/question-type.enum';
import {Question} from './question.model';

export interface SelectQuestion extends Question {
    type: QuestionType.SELECT;
    multiple: boolean;
    options: Array<QuestionOption>;
}
