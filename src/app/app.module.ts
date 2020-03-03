import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HeaderComponent, SharedModule} from '@shared';
import {AppComponent} from './app.component';
import {CoreModule} from '@core';
import {CustomQuoteDialogComponent, CustomQuoteDialogModule} from './custom-quote-dialog';
import {MaterialModule} from '@app/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        CoreModule,
        CustomQuoteDialogModule,
        MaterialModule
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        CustomQuoteDialogComponent
    ]
})
export class AppModule {
}
