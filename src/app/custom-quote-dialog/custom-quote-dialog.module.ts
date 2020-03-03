import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomQuoteDialogComponent} from './custom-quote-dialog.component';
import {SharedModule} from '@shared';
import {MaterialModule} from '@app/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DynamicFormInputModule} from '@app/custom-quote-dialog/dynamic-form-input/dynamic-form-input.module';

@NgModule({
    declarations: [
        CustomQuoteDialogComponent
    ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        MaterialModule,
        SharedModule,
        DynamicFormInputModule
    ],
    exports: [
        CustomQuoteDialogComponent
    ],
})
export class CustomQuoteDialogModule {
}
