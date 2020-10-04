import { takeLatest, put, call } from 'redux-saga/effects';
import { AUTH_LOGIN_LOAD, AUTH_LOGOUT } from 'store/types';
import ROUTER_PATHS from 'constants/router';
import history from 'services/history';
import { loginUserService } from 'services/auth';
import axios from 'utils/axios';

import {
  authIsLoadingAction,
  authLoginSuccessAction,
  authErrorAction,
  logoutAction,
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

function* setAuthHeaders({ payload }) {
  if (!payload) return;

  const { token } = payload.auth.data;

  if (token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    yield put(logoutAction());
  }
}

function* logout() {
  yield call(history.push, ROUTER_PATHS.LOGIN);
}

const authSagas = [
  takeLatest('persist/REHYDRATE', setAuthHeaders),
  takeLatest(AUTH_LOGIN_LOAD, login),
  takeLatest(AUTH_LOGOUT, logout),
];

export default authSagas;
