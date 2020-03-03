import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TextInputComponent} from './text-input.component';
import {TextInputModule} from '@shared/forms/text-input/text-input.module';
import {FormControl} from '@angular/forms';
import {TEST_QUESTIONS} from '@testing';

describe('TextInputComponent', () => {
    let component: TextInputComponent;
    let fixture: ComponentFixture<TextInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TextInputModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TextInputComponent);
        component = fixture.componentInstance;
        component.control = new FormControl();
        component.question = TEST_QUESTIONS[0];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
