import { takeLatest, put, call } from 'redux-saga/effects';
import isEmpty from 'lodash.isempty';
import {
  AUTH_LOGIN_LOAD,
  AUTH_LOGOUT,
  AUTH_SIGN_UP_LOAD,
  AUTH_FORGOT_PASSWORD,
  AUTH_UPDATE_LOAD,
} from 'store/types';
import ROUTER_PATHS from 'constants/router';
import history from 'services/history';
import {
  loginUserService,
  signUpUserService,
  forgotPasswordService,
  updateProfessorService,
} from 'services/auth';
import axios from 'utils/axios';

import {
  successNotificationAction,
  errorNotificationAction,
} from 'store/modules/notifications/actions';

import {
  authIsLoadingAction,
  authLoginSuccessAction,
  authErrorAction,
  authSignUpSuccessAction,
  authUpdateSuccessAction,
} from './actions';
import { deleteEmptyAttributes } from './serializers';

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

function* forgotPassword({ data }) {
  forgotPasswordService({ email: data.email });
  yield put(successNotificationAction('Nova senha enviada por email'));
  yield call(history.push, ROUTER_PATHS.LOGIN);
}

function* updateProfessor({ data }) {
  yield put(authIsLoadingAction());
  try {
    deleteEmptyAttributes(data);
    if (isEmpty(data)) {
      const error = {
        message: 'deve atualizar pelo menos um campo',
      };
      throw error;
    }

    const response = yield updateProfessorService({ professorData: data });

    yield put(successNotificationAction('Profile was updated successfully'));
    yield put(authUpdateSuccessAction(response));
    yield call(history.push, ROUTER_PATHS.HOME);
  } catch (e) {
    yield put(errorNotificationAction(e.message));
    yield put(authErrorAction(e));
  }
}

const authSagas = [
  takeLatest('persist/REHYDRATE', setAuthHeaders),
  takeLatest(AUTH_LOGIN_LOAD, login),
  takeLatest(AUTH_LOGOUT, logout),
  takeLatest(AUTH_SIGN_UP_LOAD, signUp),
  takeLatest(AUTH_FORGOT_PASSWORD, forgotPassword),
  takeLatest(AUTH_UPDATE_LOAD, updateProfessor),
];

export default authSagas;
