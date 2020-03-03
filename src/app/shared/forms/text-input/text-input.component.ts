import {Component, Input, OnInit} from '@angular/core';
import {ErrorStateMatcher} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {Question} from '@core';

@Component({
    selector: 'app-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.scss', '../input-field-styles.scss']
})
export class TextInputComponent implements OnInit {

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
