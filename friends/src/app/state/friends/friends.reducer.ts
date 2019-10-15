import { Friend } from '../../models/Friend';
import { FriendsActions } from './friends.actions';

export type FriendsState = {
  list: Friend[];
  error: string;
  loading: boolean;
};

const initialState: FriendsState = {
  list: [],
  error: '',
  loading: false,
};

export const friendsReducer = (state = initialState, action: FriendsActions) => {
  switch (action.type) {
    case 'GET_FRIENDS_START':
      return { ...state, error: '', loading: true };
    case 'GET_FRIENDS_SUCCESS':
      return { ...state, error: '', loading: false, list: action.payload };
    case 'GET_FRIENDS_FAILURE':
      return { ...state, error: action.payload, loading: false, list: [] };

    case 'CLEAR_ERROR':
      return { ...state, error: '' };
    default:
      return state;
  }
};
