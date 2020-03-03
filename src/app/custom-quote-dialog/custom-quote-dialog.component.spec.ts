import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomQuoteDialogComponent} from './custom-quote-dialog.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MatDialogRefStub} from '@testing/material/mat-dialog-ref.stub';
import {CustomQuoteDialogModule} from '@app/custom-quote-dialog/custom-quote-dialog.module';
import {TEST_QUESTIONS} from '@testData/questions.data';

const autocompleteFilterStub = () => {
};
describe('CustomQuoteDialogComponent', () => {
    let component: CustomQuoteDialogComponent;
    let fixture: ComponentFixture<CustomQuoteDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CustomQuoteDialogModule,
            ],
            providers: [
                {provide: MatDialogRef, useClass: MatDialogRefStub},
                {
                    provide: MAT_DIALOG_DATA, useValue: {
                        questions: TEST_QUESTIONS,
                        autocompleteFilter: autocompleteFilterStub
                    }
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomQuoteDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('the component should initialise by creating a form control for every question and register it with the form group', () => null);
    it('#onCancel the dialog should close when the cancel button is pushed', () => null);
    it('#onSubmit the dialog should close and pass the current form value a the parameter', () => null);
    it('#shouldUseAutocomplete should return true for a question with id 4 (for now)', () => null);
    it('#getFormControl should retrieve the form control for the question provided as a parameter', () => null);
    it('clicking the submit button should call onSubmit', () => null);
    it('clicking the cancel button should call onCancel', () => null);
    it('the submit button should be disabled if the form is invalid', () => null);
    it('the submit button should be enabled if the form is valid', () => null);
});
