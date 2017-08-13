import { User } from './account/shared/user';

export interface IAppState {
  users: IUserState;
  authentication: IAuthenticationState;
}

export interface IUserState {
  all: User[];
  me: User;
}

export interface IAuthenticationState {
  isLogin: boolean;
  isLoginDateTime: string;
  token: string;
}
