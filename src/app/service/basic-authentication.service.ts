import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export class AuthenticationBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  authenticate(username, password) {
    // console.log('before ' + this.isUserLoggedIn());
    if (username === 'in28minutes' && password === 'password') {
      // console.log('after ' + this.isUserLoggedIn());
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

  executeAuthenticationService(username, password) {
    const basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      { headers }
    );
  }
}
