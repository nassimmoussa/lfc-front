import {
  AUTH_IS_LOADING,
  AUTH_ERROR,
  AUTH_LOGIN_LOAD,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
} from 'store/types';

export const authIsLoadingAction = () => ({
  type: AUTH_IS_LOADING,
});

export const authErrorAction = (error) => ({
  type: AUTH_ERROR,
  data: error,
});

export const authLoginLoadAction = (userInfo) => ({
  type: AUTH_LOGIN_LOAD,
  data: userInfo,
});

export const authLoginSuccessAction = (data) => ({
  type: AUTH_LOGIN_SUCCESS,
  data,
});

export const logoutAction = () => ({
  type: AUTH_LOGOUT,
});
