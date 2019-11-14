import { combineReducers } from 'redux';

import { authReducer, AuthState } from './auth/auth.reducer';
import { friendsReducer, FriendsState } from './friends/friends.reducer';

export type State = { auth: AuthState; friends: FriendsState };
export const reducer = combineReducers({ auth: authReducer, friends: friendsReducer });
