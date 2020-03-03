import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {
    ApiService,
    ApplicationService,
    AuthService,
    NaicsService
} from './services';
import {
    HttpBearerInterceptor
} from './interceptor/http.bearer.interceptor';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: HttpBearerInterceptor, multi: true},
        ApiService,
        ApplicationService,
        AuthService,
        NaicsService,
    ]
})
export class CoreModule {
}
