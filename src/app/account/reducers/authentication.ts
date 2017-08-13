import { AUTH_LOGIN_USER } from './../actions/authentication';
import { IAuthenticationState } from './../../app.state';


const INITIAL_STATE: IAuthenticationState = {
  isLogin: false,
  loginDateTime: null,
  token: null
};

export function authenticationReducer(state = INITIAL_STATE, action): IAuthenticationState {
  switch (action.type) {
    case AUTH_LOGIN_USER:
      return {
        isLogin: action.payload.isLogin,
        loginDateTime: action.payload.loginDateTime,
        token: action.payload.token
      };

    default:
      return state;
  }
}
