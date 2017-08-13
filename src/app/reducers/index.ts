import { User } from './../account/shared/user';
import { IAppState } from './../app.state';
import { combineReducers } from 'redux';
import { usersReducer as users } from './../account/reducers/users';
import { authenticationReducer as authentication } from './../account/reducers/authentication';

export const reducer = combineReducers<IAppState>({
  users,
  authentication
});
