import {Component, Inject, Input, OnInit} from '@angular/core';
import {NaicsService, Question, QuestionOption} from '@core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CustomQuoteDialogData} from './custom-quote-dialog-data.interface';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {AutocompleteQuestionFilter} from '@shared';

// Would put logic somewhere else in real project
type QuestionToFormControl = (q: Question) => FormControl;
const controlFromQuestion: QuestionToFormControl = (q: Question) => {
    const validators: ValidatorFn[] = [];
    if (q.max) {
        validators.push(Validators.maxLength(q.max));
    }
    if (q.min) {
        validators.push(Validators.minLength(q.min));
    }
    if (q.required) {
        validators.push(Validators.required);
    }
    return new FormControl('', validators);
};

@Component({
    selector: 'app-custom-quote-dialog',
    templateUrl: './custom-quote-dialog.component.html',
    styleUrls: ['./custom-quote-dialog.component.scss', '../shared/forms/input-field-styles.scss']
})
export class CustomQuoteDialogComponent implements OnInit {

    customQuoteForm: FormGroup;
    questions: Question[] = [];
    autocompleteFilter?: AutocompleteQuestionFilter;

    constructor(
        public dialogRef: MatDialogRef<CustomQuoteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: CustomQuoteDialogData) {
    }

    ngOnInit(): void {
        const {questions, autocompleteFilter} = this.data;
        this.questions = questions as Question[];
        this.autocompleteFilter = autocompleteFilter;
        this.setupForm(questions);
    }

    onCancel() {
        this.dialogRef.close();
    }

    onSubmit() {
        this.dialogRef.close(this.customQuoteForm.value as { [key: number]: string });
    }

    shouldUseAutocomplete(question: Question) {
        // I could put this in a config file, but I think the best option
        // would be to retrieve it from the backend so I'm just leaving the logic here
        // for demo purposes.
        // Also, maybe the endpoints for the api could be included in the question response
        // so frontend config/project has no changes required for new or updated fields.
        return [4].includes(question.id);
    }

    getFormControl(q: Question) {
        return this.customQuoteForm
            && this.customQuoteForm.controls
            && this.customQuoteForm.controls[q.id.toString()] || null;
    }

    private setupForm(questions) {
        this.customQuoteForm = new FormGroup({});
        questions.forEach((q: Question) => {
            const name = q.id.toString();
            const control = controlFromQuestion(q);
            this.customQuoteForm.addControl(name, control);
        });
    }
}
