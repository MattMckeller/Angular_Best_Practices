import {Component, Input, OnInit} from '@angular/core';
import {ErrorStateMatcher} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {Question} from '@core';

@Component({
    selector: 'app-select-input',
    templateUrl: './select-input.component.html',
    styleUrls: ['./select-input.component.scss', '../input-field-styles.scss']
})
export class SelectInputComponent implements OnInit {

    @Input() errorStateMatcher: ErrorStateMatcher;
    @Input() shouldDisplayError = false;
    @Input() control: FormControl;
    @Input() group: FormGroup;
    @Input() question: Question;

    constructor() {
    }

    ngOnInit() {
    }

}
