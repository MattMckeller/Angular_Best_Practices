import {Injectable} from '@angular/core';

declare var require: any;

const md5 = require('md5');

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    getToken(email: string = 'mattmckeller@gmail.com'): string {
        // Likely would actually grab from current session if one existed
        return md5(email);
    }
}
