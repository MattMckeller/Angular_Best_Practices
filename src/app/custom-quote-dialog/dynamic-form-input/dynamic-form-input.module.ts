import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@app/material/material.module';
import {SharedModule} from '@shared';
import {DynamicFormInputComponent} from '@app/custom-quote-dialog/dynamic-form-input/dynamic-form-input.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        DynamicFormInputComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        SharedModule
    ],
    exports: [
        DynamicFormInputComponent
    ]
})
export class DynamicFormInputModule {
}
