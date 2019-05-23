import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {}

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
}
