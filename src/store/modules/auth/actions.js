import {
  AUTH_IS_LOADING,
  AUTH_ERROR,
  AUTH_LOGIN_LOAD,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_SIGN_UP_LOAD,
  AUTH_SIGN_UP_SUCCESS,
  AUTH_FORGOT_PASSWORD,
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

export const authSignUpLoadAction = (userInfo) => ({
  type: AUTH_SIGN_UP_LOAD,
  data: userInfo,
});

export const authSignUpSuccessAction = (data) => ({
  type: AUTH_SIGN_UP_SUCCESS,
  data,
});

export const forgotPasswordAction = (data) => ({
  type: AUTH_FORGOT_PASSWORD,
  data,
});
