import { takeLatest, put, call } from 'redux-saga/effects';
import { AUTH_LOGIN_LOAD, AUTH_LOGOUT, AUTH_SIGN_UP_LOAD } from 'store/types';
import ROUTER_PATHS from 'constants/router';
import history from 'services/history';
import { loginUserService, signUpUserService } from 'services/auth';
import axios from 'utils/axios';

import {
  authIsLoadingAction,
  authLoginSuccessAction,
  authErrorAction,
  authSignUpSuccessAction,
} from './actions';

function* login({ data }) {
  yield put(authIsLoadingAction());
  try {
    const response = yield loginUserService(data);
    axios.defaults.headers.Authorization = `Bearer ${response.token}`;

    yield put(authLoginSuccessAction(response));

    yield call(history.push, ROUTER_PATHS.HOME);
  } catch (e) {
    yield put(
      authErrorAction({
        message: 'Login inválido',
      })
    );
  }
}

function setAuthHeaders({ payload }) {
  if (!payload) return;

  const { token } = payload.auth.data;

  if (token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

function* logout() {
  yield call(history.push, ROUTER_PATHS.LOGIN);
}

function* signUp({ data }) {
  yield put(authIsLoadingAction());
  try {
    const response = yield signUpUserService({
      email: data.email,
      password: data.password,
      name: data.name,
    });
    axios.defaults.headers.Authorization = `Bearer ${response.token}`;

    yield put(authSignUpSuccessAction(response));

    yield call(history.push, ROUTER_PATHS.HOME);
  } catch (e) {
    if (e.response) {
      yield put(
        authErrorAction({
          message: 'email já possui conta',
        })
      );
    } else {
      yield put(
        authErrorAction({
          message: 'erro ao criar a conta',
        })
      );
    }
  }
}

const authSagas = [
  takeLatest('persist/REHYDRATE', setAuthHeaders),
  takeLatest(AUTH_LOGIN_LOAD, login),
  takeLatest(AUTH_LOGOUT, logout),
  takeLatest(AUTH_SIGN_UP_LOAD, signUp),
];

export default authSagas;
