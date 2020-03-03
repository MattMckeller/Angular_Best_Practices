import {Question} from '@core';
import {QuestionType} from '@enums/question-type.enum';

export const TEST_QUESTIONS: Array<Question> = [{
    id: 1,
    text: 'What is the policy holder\'s first name?',
    type: QuestionType.TEXT,
    required: true,
    min: 2
}, {
    id: 2,
    text: 'What is the policy holder\'s last name?',
    type: QuestionType.TEXT,
    required: true,
    min: 2
}, {
    id: 3,
    text: 'What is the type of business?',
    type: QuestionType.SELECT,
    required: true,
    multiple: false,
    options: [
        {id: 1, text: 'Clothing Store'},
        {id: 2, text: 'Restaurant'},
        {id: 3, text: 'Food Truck'},
        {id: 4, text: 'Record Label'},
        {id: 5, text: 'Day Care'},
        {id: 6, text: 'Coffee Shop'},
        {id: 7, text: 'Farm'},
        {id: 8, text: 'Catering Business'},
        {id: 9, text: 'Landscaping Business'},
        {id: 10, text: 'Trucking Company'},
        {id: 11, text: 'Bakery'},
        {id: 12, text: 'Brewery'},
        {id: 13, text: 'Construction Company'},
        {id: 14, text: 'Bar'},
        {id: 15, text: 'Property Management'},
        {id: 16, text: 'T-Shirt Company'},
        {id: 17, text: 'Group Home'},
        {id: 18, text: 'Real Estate Agency'},
        {id: 19, text: 'Dog Walking'},
        {id: 20, text: 'Gym'}
    ]
}, {
    id: 4,
    text: 'What is the industry classification code (NAICS)?',
    type: QuestionType.TEXT,
    required: true,
    min: 6,
    max: 6
}];
