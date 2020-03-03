import {Component, Input, OnInit} from '@angular/core';
import {Question} from '@core';
import {of} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {AppErrorStateMatcher} from '@shared/forms/error-state-matcher';
import {AutocompleteQuestionFilter} from '@shared';

@Component({
    selector: 'app-dynamic-form-input',
    templateUrl: './dynamic-form-input.component.html',
    styleUrls: ['./dynamic-form-input.component.scss']
})
export class DynamicFormInputComponent implements OnInit {

    errorStateMatcher: ErrorStateMatcher;

    get shouldDisplayError(): boolean {
        return this.errorStateMatcher && this.errorStateMatcher.isErrorState(this.control, null);
    }

    @Input() control: FormControl;
    @Input() group: FormGroup;
    @Input() question: Question;
    @Input() autocomplete = false;
    @Input() autocompleteFilter: AutocompleteQuestionFilter = (t) => of([]);

    constructor() {
    }

    ngOnInit() {
        this.errorStateMatcher = new AppErrorStateMatcher();
    }
}
