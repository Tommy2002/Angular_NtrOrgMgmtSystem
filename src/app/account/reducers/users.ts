import { User } from './../shared/user';
import { IUserState } from './../../app.state';
import { ADD_USER, AUTH_LOGIN_USER } from './../actions/users';

const INITIAL_STATE: IUserState = {
  all: [],
  me: new User(0, 'test', '', '', '', ''),
};

export function usersReducer(state = INITIAL_STATE, action): IUserState {
  switch (action.type) {
    case ADD_USER:
      return {
        all: [...state.all, action.payload],
        me: state.me,
      };

    case AUTH_LOGIN_USER:
      return {
        all: state.all,
        me: action.payload,
      }

    default:
      return state;
  }
}
