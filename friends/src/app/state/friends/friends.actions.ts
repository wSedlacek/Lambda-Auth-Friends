import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { Friend } from '../../models/Friend';

type GetFriendsStart = { type: 'GET_FRIENDS_START' };
type GetFriendsSuccess = { type: 'GET_FRIENDS_SUCCESS'; payload: Friend[] };
type GetFriendsFailure = { type: 'GET_FRIENDS_FAILURE'; payload: string };

export type ClearError = { type: 'CLEAR_ERROR' };

export type GetFriends = GetFriendsStart | GetFriendsSuccess | GetFriendsFailure;

export type FriendsActions = GetFriends | ClearError;

export const getFriends = () => async (dispatch: (action: GetFriends) => void) => {
  dispatch({ type: 'GET_FRIENDS_START' });

  try {
    const res = await axiosWithAuth().get<Friend[]>('/api/friends');
    dispatch({ type: 'GET_FRIENDS_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'GET_FRIENDS_FAILURE', payload: err.toString() });
  }
};
