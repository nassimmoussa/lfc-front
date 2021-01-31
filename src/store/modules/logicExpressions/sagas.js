import { takeLatest, put } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { indexLEs } from 'services/logicExpressions';
import { LE_INDEX_LOAD, LE_DELETE, LE_NEW, LE_EDIT } from 'store/types';

import {
  errorNotificationAction,
  successNotificationAction,
} from 'store/modules/notifications/actions';

import {
  lEIsLoadingAction,
  lEIndexSuccessAction,
  deleteLESuccessAction,
  lENewSuccessAction,
  editLESuccessAction,
} from './actions';

function* index() {
  yield put(lEIsLoadingAction());
  try {
    const lEs = yield indexLEs();

    yield put(lEIndexSuccessAction(lEs));
  } catch (e) {
    yield put(
      errorNotificationAction(
        'Ocorreu um erro ao buscar as expressões logicas!'
      )
    );
  }
}

function* deleteLE({ data }) {
  yield put(lEIsLoadingAction());
  try {
    yield put(deleteLESuccessAction(data));
    yield put(
      successNotificationAction('Expressão Lógica excluída com sucesso!')
    );
  } catch (e) {
    yield put(
      errorNotificationAction('Ocorreu um erro ao excluir a Expressão Lógica!')
    );
  }
}

function* newLE({ data }) {
  yield put(lEIsLoadingAction());
  try {
    const savedLE = {
      id: uuidv4(),
      ...data,
    };

    yield put(lENewSuccessAction(savedLE));
    yield put(
      successNotificationAction('Expressão lógica adicionada com sucesso!')
    );
  } catch (e) {
    yield put(
      errorNotificationAction(
        'Ocorreu um erro ao adicionar a Expressão lógica!'
      )
    );
  }
}

function* editLE({ data }) {
  yield put(lEIsLoadingAction());
  try {
    yield put(editLESuccessAction(data));
    yield put(
      successNotificationAction('Expressão lógica atualizada com sucesso!')
    );
  } catch (e) {
    yield put(
      errorNotificationAction(
        'Ocorreu um erro ao atualizar a Expressão lógica!'
      )
    );
  }
}

const studentSaga = [
  takeLatest(LE_INDEX_LOAD, index),
  takeLatest(LE_DELETE, deleteLE),
  takeLatest(LE_NEW, newLE),
  takeLatest(LE_EDIT, editLE),
];

export default studentSaga;
