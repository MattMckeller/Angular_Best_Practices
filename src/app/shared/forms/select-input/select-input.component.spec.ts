import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectInputComponent} from './select-input.component';
import {SelectInputModule} from '@shared/forms/select-input/select-input.module';
import {FormControl} from '@angular/forms';
import {TEST_QUESTIONS} from '@testing';

describe('SelectInputComponent', () => {
    let component: SelectInputComponent;
    let fixture: ComponentFixture<SelectInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SelectInputModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectInputComponent);
        component = fixture.componentInstance;
        component.control = new FormControl();
        component.question = TEST_QUESTIONS[2];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
