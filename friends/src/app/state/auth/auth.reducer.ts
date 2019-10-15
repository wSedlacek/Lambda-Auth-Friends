import { AuthActions } from './auth.actions';

export type AuthState = {
  token: string;
  error: string;
};

const initialState: AuthState = {
  token: '',
  error: '',
};

export const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case 'CHECK_TOKEN_START':
      return {
        ...state,
      };
    case 'CHECK_TOKEN_SUCCESS':
      return {
        ...state,
        token: action.payload,
        error: '',
      };
    case 'CHECK_TOKEN_FAILURE':
      localStorage.removeItem('token');
      return {
        ...state,
        token: '',
        error: action.payload,
      };

    case 'LOGIN_START':
      return {
        ...state,
      };
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        error: '',
      };
    case 'LOGIN_FAILURE':
      localStorage.removeItem('token');
      return {
        ...state,
        token: '',
        error: action.payload,
      };

    case 'SIGN_OUT_START':
      return {
        ...state,
      };
    case 'SIGN_OUT_SUCCESS':
      localStorage.removeItem('token');
      return {
        ...state,
        token: '',
        error: '',
      };
    case 'SIGN_OUT_FAILURE':
      return {
        ...state,
      };

    case 'CLEAR_ERROR':
      return { ...state, error: '' };
    default:
      return state;
  }
};
