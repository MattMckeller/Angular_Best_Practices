import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {Component, DebugElement} from '@angular/core';
import {NaicsServiceStub} from '@stubs/services/naics-service.stub';
import {
    ApplicationRequest,
    ApplicationService,
    ErrorResponse,
    NaicsService,
    QuestionsService, SelectQuestionResponse,
    SuccessResponse, TextInputQuestionResponse
} from '@core';
import {AppModule} from '@app/app.module';
import {ApplicationServiceStub} from '@stubs/services/application-service.stub';
import {QuestionType} from '@enums/question-type.enum';
import {MatDialogStub} from '@stubs/components/mat-dialog.stub';
import {MatSnackbarStub} from '@stubs/components/mat-snackbar.stub';
import {MatDialog, MatSnackBar} from '@angular/material';
import {QuestionsServiceStub} from '@stubs/services/questions-service.stub';
import {of} from 'rxjs';
import {TEST_QUESTIONS} from '@testData/questions.data';
import {By} from '@angular/platform-browser';
import {isEqual} from 'lodash';

@Component({selector: 'app-header', template: ''})
class AppHeaderStubComponent {
}

describe('AppComponent Integration Tests', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    let el: DebugElement;

    let applicationService: ApplicationService;
    let questionsService: QuestionsService;
    let naicsService: NaicsService;
    let dialog: MatDialog;
    let snackBar: MatSnackBar;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(AppComponent);
                component = fixture.componentInstance;
                el = fixture.debugElement;
                applicationService = TestBed.get(ApplicationService);
                questionsService = TestBed.get(QuestionsService);
                naicsService = TestBed.get(NaicsService);
                dialog = TestBed.get(MatDialog);
                snackBar = TestBed.get(MatSnackBar);
            });
    }));

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it(`should render the header'`, () => {
        const [header] = el.queryAll(By.css('app-header'));
        expect(header).toBeTruthy();
    });

    it('should be seen after init', async () => {
        expect(dialog.openDialogs.length).toBe(0);
        expect(document.querySelector('mat-dialog-container')).toBeFalsy();

        fixture.detectChanges();
        await fixture.whenStable();

        expect(dialog.openDialogs.length).toBe(1);
        expect(document.querySelector('mat-dialog-container')).toBeTruthy();
    });
});


describe('AppComponent Unit Tests', () => {
    let component: AppComponent;

    let applicationService: ApplicationService;
    let questionsService: QuestionsService;
    let naicsService: NaicsService;
    let dialog: MatDialog;
    let snackBar: MatSnackBar;

    const questionId = 1;
    const text = 'test';
    const applicationRequest: ApplicationRequest = {responses: [{question_id: questionId, text}]};

    beforeEach(() => {
        applicationService = new ApplicationServiceStub() as ApplicationService;
        questionsService = new QuestionsServiceStub() as QuestionsService;
        naicsService = new NaicsServiceStub() as NaicsService;
        dialog = new MatDialogStub() as MatDialog;
        snackBar = new MatSnackbarStub() as unknown as MatSnackBar;
        component = new AppComponent(
            applicationService,
            questionsService,
            naicsService,
            dialog,
            snackBar
        );
    });

    it(`showQuestions should call the question service
                   and successfully store the questions in the component`, fakeAsync(() => {
        const questionSpy = spyOn(questionsService, 'getQuestions').and.callThrough();
        spyOn(component, 'openDialog').and.callFake(() => void 0);

        component.showQuestions();

        tick();

        expect(questionSpy).toHaveBeenCalled();
        expect(component.questions).toBe(QuestionsServiceStub.QUESTION_RESPONSE_VALUES);
    }));

    it('showQuestions should try to open the custom quote dialog', fakeAsync(() => {
        const openDialogSpy = spyOn(component, 'openDialog').and.callFake(() => void 0);

        component.showQuestions();

        tick();

        expect(openDialogSpy).toHaveBeenCalled();
    }));

    it(`submitCustomQuoteApplication should send the
                   data to the application service`, fakeAsync(() => {
        const submitSpy = spyOn(applicationService, 'submitApplication').and.callThrough();

        component.submitCustomQuoteApplication(applicationRequest);

        tick();

        expect(submitSpy).toHaveBeenCalledWith(applicationRequest);
    }));

    it(`submitCustomQuoteApplication should open the snackbar
                with a success message when submission is successful`, () => {
        const successResponse = {message: 'success'} as SuccessResponse;
        const snackbarOpenSpy = spyOn(snackBar, 'open').and.returnValue(null);
        spyOn(applicationService, 'submitApplication').and.returnValue(of(successResponse));

        component.submitCustomQuoteApplication(applicationRequest);

        expect(snackbarOpenSpy).toHaveBeenCalledWith('Success!', jasmine.any(String), jasmine.any(Object));
    });

    it(`submitCustomQuoteApplication should call
                   open snackbar with error message when submission fails`, fakeAsync(() => {
        const errorJsonString = '{"errors":["msg1", "msg2"]}';
        const errorResponse = {errorMessage: errorJsonString} as ErrorResponse;
        const snackbarOpenSpy = spyOn(snackBar, 'open').and.returnValue(null);
        const expectedMessage = 'Error! ' + JSON.parse(errorJsonString).errors.join(' ');
        spyOn(applicationService, 'submitApplication').and.returnValue(of(errorResponse));

        component.submitCustomQuoteApplication(applicationRequest);

        expect(snackbarOpenSpy).toHaveBeenCalledWith(expectedMessage, jasmine.any(String), jasmine.any(Object));
    }));

    it(`#questionInputMapper should take in ['$questionId':'$questionValue']
                   and return the appropriately formatted QuestionResponse`, () => {
        const textQuestion = TEST_QUESTIONS.find(e => e.type === QuestionType.TEXT);
        const selectQuestion = TEST_QUESTIONS.find(e => e.type === QuestionType.SELECT);
        const selectedOption = selectQuestion.options[0];
        const inputText = 'test';
        component.questions = [selectQuestion, textQuestion];

        // Comes back from dialog form submission
        const textQuestionResult = {[textQuestion.id]: inputText};
        const selectQuestionResult = {[selectQuestion.id]: selectedOption.id};

        // Formatting in preparation for sending the request to the backend
        const textResponse = component.questionInputMapper(textQuestion.id, textQuestionResult) as TextInputQuestionResponse;
        const selectResponse = component.questionInputMapper(selectQuestion.id, selectQuestionResult) as SelectQuestionResponse;
        const textResponseExpectation: TextInputQuestionResponse = {
            question_id: textQuestion.id, text: inputText
        };
        const selectResponseExpectation: SelectQuestionResponse = {
            question_id: selectQuestion.id, option_id: selectedOption.id
        };

        expect(isEqual(textResponse, textResponseExpectation)).toBeTruthy();
        expect(isEqual(selectResponse, selectResponseExpectation)).toBeTruthy();
    });

    it(`#onDialogClosed should do nothing when there is no result (i.e. dialog canceled)`, () => {
        // ...
    });

    it(`#onDialogClosed should submit the mapped application data when there is a result`, () => {
        // ...
    });
});
