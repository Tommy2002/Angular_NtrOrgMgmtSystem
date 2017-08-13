import { User } from './../account/shared/user';
import { IAppState } from './../app.state';
import { combineReducers } from 'redux';
import { usersReducer as users } from './../account/reducers/users';

export const reducer = combineReducers<IAppState>({
  users
});
