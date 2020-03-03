import {Question} from '@core';
import {AutocompleteQuestionFilter} from '@shared';

export interface CustomQuoteDialogData {
    questions: Array<Question>;
    autocompleteFilter?: AutocompleteQuestionFilter;
}
