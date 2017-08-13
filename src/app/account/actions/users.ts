import { IAppState } from './../../app.state';
import { User } from './../shared/user';
import { Injectable } from '@angular/core';

import { NgRedux } from '@angular-redux/store';

export const ADD_USER = 'ADD_USER';
export const AUTH_LOGIN_USER = 'AUTH_LOGIN_USER';

@Injectable()
export class UsersAction {
  constructor(
    private redux: NgRedux<IAppState>
  ) {}

  addSingle(user: User) {
    this.redux.dispatch({
      type: ADD_USER,
      payload: user
    });
  }

  authLogin(user: User) {
    this.redux.dispatch({
      type: AUTH_LOGIN_USER,
      payload: user
    });
  }
}
