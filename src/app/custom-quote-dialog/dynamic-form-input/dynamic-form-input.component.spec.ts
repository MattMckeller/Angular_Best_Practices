import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DynamicFormInputComponent} from './dynamic-form-input.component';
import {CustomQuoteDialogModule} from '@app/custom-quote-dialog';
import {AppModule} from '@app/app.module';
import {FormControl, FormGroup} from '@angular/forms';
import {TEST_QUESTIONS} from '@testData/questions.data';
import {of} from 'rxjs';
import {QuestionType} from '@enums/question-type.enum';
import {DynamicFormInputModule} from '@app/custom-quote-dialog/dynamic-form-input/dynamic-form-input.module';


describe('Integration Test - DynamicFormInputComponent', () => {
    let component: DynamicFormInputComponent;
    let fixture: ComponentFixture<DynamicFormInputComponent>;
    const formControl = new FormControl();
    const formGroup = new FormGroup({});
    const question = {...TEST_QUESTIONS[0], type: QuestionType.TEXT};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [DynamicFormInputModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DynamicFormInputComponent);
        component = fixture.componentInstance;
        component.control = formControl;
        component.group = formGroup;
        component.question = question;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // should render text input field for input type of text
    // should render select field for input type of select
    // should render a form label with the provided text for each input
    // submit button should be disabled if the form is invalid
    // input field label should display a required icon if the question is required
    // the dom input field value for an autocomplete input should be the question's id
    // the input field for an autocomplete input should be the question's id
    // should add all autocomplete options to the dom
    // should display the error icon if the input field has an error
});

describe('Integration Test - DynamicFormInputComponent - Text', () => {
    let component: DynamicFormInputComponent;
    let fixture: ComponentFixture<DynamicFormInputComponent>;
    const formControl = new FormControl();
    const formGroup = new FormGroup({});
    const question = {...TEST_QUESTIONS[0], type: QuestionType.TEXT};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule, CustomQuoteDialogModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DynamicFormInputComponent);
        component = fixture.componentInstance;
        component.control = formControl;
        component.group = formGroup;
        component.question = question;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

describe('Integration Test - DynamicFormInputComponent - Autocomplete', () => {
    let component: DynamicFormInputComponent;
    let fixture: ComponentFixture<DynamicFormInputComponent>;
    const formControl = new FormControl();
    const formGroup = new FormGroup({});
    const question = {...TEST_QUESTIONS[0], type: QuestionType.TEXT};
    const autocomplete = false;
    const autocompleteFilter = (text) => of([]);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule, CustomQuoteDialogModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DynamicFormInputComponent);
        component = fixture.componentInstance;
        component.control = formControl;
        component.group = formGroup;
        component.question = question;
        component.autocomplete = autocomplete;
        component.autocompleteFilter = autocompleteFilter;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create setup autocomplete filtering if the input is marked as such', () => {
    });

    it('when the input field value changes the component should update the available autocomplete options', () => {
    });


    it('should create', () => {
    });

});

describe('Integration Test - DynamicFormInputComponent - Select', () => {
    let component: DynamicFormInputComponent;
    let fixture: ComponentFixture<DynamicFormInputComponent>;
    const formControl = new FormControl();
    const formGroup = new FormGroup({});
    const question = {...TEST_QUESTIONS[0], type: QuestionType.SELECT};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule, CustomQuoteDialogModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DynamicFormInputComponent);
        component = fixture.componentInstance;
        component.control = formControl;
        component.group = formGroup;
        component.question = question;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});


describe('Unit Test - DynamicFormInputComponent', () => {
    let component: DynamicFormInputComponent;
    let fixture: ComponentFixture<DynamicFormInputComponent>;
    const formControl = new FormControl();
    const formGroup = new FormGroup({});
    const question = TEST_QUESTIONS[0];
    const autocomplete = true;
    const autocompleteFilter = (text) => of([]);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule, CustomQuoteDialogModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DynamicFormInputComponent);
        component = fixture.componentInstance;
        component.control = formControl;
        component.group = formGroup;
        component.question = question;
        component.autocomplete = autocomplete;
        component.autocompleteFilter = autocompleteFilter;
        fixture.detectChanges();
    });

    it(`should create`, () => {
        expect(component).toBeTruthy();
    });

    it(`should run autocomplete setup filtering if the input is marked as such`, () => {
    });

    it(`when the input field value changes the component should update the
                   available autocomplete options`, () => {
    });

    it(`should update the autocomplete options variable to the result
                   of the autocompleteFilter function after the control value changes`, () => {
    });

    it(`should map the related option to the selectedAutocompleteOption
                   variable when the control's value changes with the next option id`, () => {
    });
});

