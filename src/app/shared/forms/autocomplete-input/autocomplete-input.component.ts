import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ErrorStateMatcher} from '@angular/material';
import {Question, QuestionOption} from '@core';
import {FormControl} from '@angular/forms';
import {debounceTime, switchMap, tap} from 'rxjs/operators';
import {Observable, of, Subscription} from 'rxjs';

export type AutocompleteQuestionFilter = (text: string) => Observable<QuestionOption[]>;

@Component({
    selector: 'app-autocomplete-input',
    templateUrl: './autocomplete-input.component.html',
    styleUrls: ['./autocomplete-input.component.scss', '../input-field-styles.scss']
})
export class AutocompleteInputComponent implements OnInit, OnDestroy {
    selectedAutocompleteOption: QuestionOption;
    filterSubscription: Subscription;
    valueChangeSubscription: Subscription;
    $filteredOptions: Observable<QuestionOption[]>; // async pipe demo purpose
    displayedOptions: QuestionOption[] = [];

    @Input() errorStateMatcher: ErrorStateMatcher;
    @Input() shouldDisplayError = false;
    @Input() control: FormControl;
    @Input() question: Question;
    @Input() filter: AutocompleteQuestionFilter = (t) => of([]);

    ngOnInit() {
        console.log('filter from autocomplete comp', this.filter);
        this.setupAutocompleteFiltering();
        this.valueChangeSubscription = this.control.valueChanges.subscribe(() => {
            this.selectedAutocompleteOption =
                this.displayedOptions.find((o) => o.id === this.control.value);
        });
    }

    ngOnDestroy() {
        if (this.filterSubscription) {
            this.filterSubscription.unsubscribe();
        }
        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
    }

    private setupAutocompleteFiltering(): void {
        this.$filteredOptions = this.control.valueChanges
            .pipe(
                debounceTime(300),
                switchMap(this.filter),
                tap((filteredResults) => this.displayedOptions = filteredResults)
            );
    }
}
