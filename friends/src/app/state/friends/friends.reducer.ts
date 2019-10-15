import { Friend } from '../../models/Friend';
import { FriendsActions } from './friends.actions';

export type FriendsState = {
  list: Friend[];
  loading: boolean;
  error: string;
};

const initialState: FriendsState = {
  list: [],
  loading: false,
  error: '',
};

export const friendsReducer = (state = initialState, action: FriendsActions) => {
  switch (action.type) {
    case 'GET_FRIENDS_START':
      return { ...state, loading: true, error: '' };
    case 'GET_FRIENDS_SUCCESS':
      return { ...state, list: action.payload, loading: false, error: '' };
    case 'GET_FRIENDS_FAILURE':
      return { ...state, list: [], loading: false, error: action.payload };

    case 'CLEAR_ERROR':
      return { ...state, error: '' };
    default:
      return state;
  }
};
