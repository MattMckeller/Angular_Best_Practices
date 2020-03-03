import {QuestionType} from '@enums/question-type.enum';
import {QuestionOption} from './question-option.model';

export interface Question {
    id: number;
    text: string;
    type: QuestionType;
    required?: true;
    min?: number;
    max?: number;
    multiple?: boolean;
    options?: Array<QuestionOption>;
}
