import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthService: BasicAuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    const username = this.basicAuthService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      req = req.clone({
        setHeaders: {
          AUthorization: basicAuthHeaderString
        }
      });
    }

    return next.handle(req);
  }
}
