import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const username = 'in28minutes';
    const password = 'dummy';
    const basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    req = req.clone({
      setHeaders: {
        AUthorization: basicAuthHeaderString
      }
    });

    return next.handle(req);
  }
}
