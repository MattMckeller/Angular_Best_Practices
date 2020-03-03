import {Component, OnInit} from '@angular/core';
import {
    ApplicationRequest,
    ApplicationService,
    ErrorResponse,
    NaicsService,
    Question,
    QuestionOption,
    SelectQuestionResponse,
    SuccessResponse,
    TextInputQuestionResponse
} from '@core';
import {CustomQuoteDialogComponent} from '@app/custom-quote-dialog';
import {MatDialog, MatDialogConfig, MatSnackBar} from '@angular/material';
import {CustomQuoteDialogData} from '@app/custom-quote-dialog/custom-quote-dialog-data.interface';
import {Observable} from 'rxjs';
import {QuestionsService} from '@app/core/services/questions.service';
import {QuestionType} from '@enums/question-type.enum';

interface QuestionResult {
    [questionId: number]: string | number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    questions: Question[];

    constructor(private applicationService: ApplicationService,
                private questionsService: QuestionsService,
                private naicsService: NaicsService,
                private dialog: MatDialog,
                private snackBar: MatSnackBar) {
        this.autocompleteFilter = this.autocompleteFilter.bind(this);
        this.onDialogClosed = this.onDialogClosed.bind(this);
    }

    ngOnInit(): void {
        this.showQuestions();
    }

    openDialog(): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '680px'; // hard coding semi random # for now
        dialogConfig.hasBackdrop = false;
        dialogConfig.data = {
            questions: this.questions,
            autocompleteFilter: this.autocompleteFilter
        } as CustomQuoteDialogData;

        const dialogRef = this.dialog.open(CustomQuoteDialogComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(this.onDialogClosed);
    }

    submitCustomQuoteApplication(payload: ApplicationRequest) {
        this.applicationService.submitApplication(payload).subscribe((response) => {
            console.log({response});
            if (Object.keys(response).includes('message') && (response as SuccessResponse).message) {
                this.onSubmitSuccess();
            } else {
                this.onSubmitError(response as ErrorResponse);
            }
        });
    }

    // todo - maybe this should in a service or pipe
    autocompleteFilter(currentText: string): Observable<QuestionOption[]> {
        return this.naicsService.search(currentText);
    }

    showQuestions() {
        this.questionsService.getQuestions()
            .subscribe((questions) => {
                this.questions = questions;
                this.openDialog();
            });
    }

    onDialogClosed(result: QuestionResult) {
        if (!result) { // Canceled
            return null;
        }

        const responses = Object.keys(result).map(e => this.questionInputMapper(parseInt(e, 10), result));
        const requestPayload: ApplicationRequest = {
            responses
        };

        this.submitCustomQuoteApplication(requestPayload);
    }

    questionInputMapper(questionId: number, result: QuestionResult): { question_id: number, option_id: Extract<keyof QuestionResult, number> }; // tslint:disable-line
    questionInputMapper(questionId: number, result: QuestionResult): { question_id: number, text: Extract<keyof QuestionResult, string> }; // tslint:disable-line
    questionInputMapper(questionId: number, result: QuestionResult) {
        const questionAnswerValue: string | number = result[questionId] || null;
        const question: Question = this.questions.find((q) => q.id === questionId);
        if (question && question.type === QuestionType.TEXT) {
            return {
                question_id: question.id,
                text: questionAnswerValue
            } as TextInputQuestionResponse;
        } else if (question && question.type === QuestionType.SELECT) {
            return {
                question_id: question.id,
                option_id: parseInt(questionAnswerValue.toString(), 10)
            } as SelectQuestionResponse;
        } else {
            return;
            // todo - better error handling & logging
        }
    }

    private onSubmitSuccess() {
        this.snackBar.open('Success!', 'Ok', {verticalPosition: 'top'});
    }

    private onSubmitError(response: ErrorResponse) {
        const errorMsg = 'Error! ' + JSON.parse(response.errorMessage).errors.join(' ');
        this.snackBar.open(errorMsg, 'Ok', {verticalPosition: 'top'});
    }
}
