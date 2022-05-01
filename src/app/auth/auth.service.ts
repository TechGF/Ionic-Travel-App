import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthenticated = true;

  get userIsAuthenticated() {
    // eslint-disable-next-line no-underscore-dangle
    return this._userIsAuthenticated;
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() {}

  //signup
  signup() {
    // eslint-disable-next-line no-underscore-dangle
    this._userIsAuthenticated = true;
  }

  //login
  login() {
    // eslint-disable-next-line no-underscore-dangle
    this._userIsAuthenticated = true;
  }

  logout() {
    // eslint-disable-next-line no-underscore-dangle
    this._userIsAuthenticated = false;
  }
}
