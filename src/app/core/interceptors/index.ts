import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';


export const HttpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];