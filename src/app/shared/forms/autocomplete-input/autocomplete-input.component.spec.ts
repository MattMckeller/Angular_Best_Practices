import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AutocompleteInputComponent} from './autocomplete-input.component';
import {AutocompleteInputModule} from '@shared/forms/autocomplete-input/autocomplete-input.module';
import {FormControl} from '@angular/forms';
import {TEST_QUESTIONS} from '@testData/questions.data';

describe('AutocompleteInputComponent', () => {
    let component: AutocompleteInputComponent;
    let fixture: ComponentFixture<AutocompleteInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AutocompleteInputModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AutocompleteInputComponent);
        component = fixture.componentInstance;
        component.control = new FormControl();
        component.question = TEST_QUESTIONS[3];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
