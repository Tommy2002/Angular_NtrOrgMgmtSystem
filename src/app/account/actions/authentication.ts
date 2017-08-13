import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { IAppState } from './../../app.state';

export const AUTH_LOGIN_USER = 'AUTH_LOGIN_USER';

@Injectable()
export class AuthenticationAction {
  constructor(
    private redux: NgRedux<IAppState>
  ) { }

  authLogin(isLogin: boolean, loginDateTime: string, token: string) {
    this.redux.dispatch({
      type: AUTH_LOGIN_USER,
      payload: { isLogin, loginDateTime, token }
    });
  }
}
