import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '@services';

@Injectable()
export class HttpBearerInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {
    }

    // Should set the intercepted Http Request's Authorization Header to 'Bearer <token value>'
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headersConfig: any = {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        };

        const token = this.authService.getToken();

        if (token) {
            headersConfig.Authorization = `Bearer ${token}`;
        }

        const request = req.clone({setHeaders: headersConfig});
        return next.handle(request);
    }
}
