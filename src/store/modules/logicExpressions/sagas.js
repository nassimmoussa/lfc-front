import { takeLatest, put } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { LE_INDEX_LOAD, LE_DELETE } from 'store/types';

import {
  errorNotificationAction,
  successNotificationAction,
} from 'store/modules/notifications/actions';

import {
  lEIsLoadingAction,
  lEIndexSuccessAction,
  deleteLESuccessAction,
} from './actions';

function* index() {
  yield put(lEIsLoadingAction());
  try {
    const lEs = [
      {
        id: uuidv4(),
        text: 'x < y',
        variables: [
          { name: 'x', value: '1' },
          { name: 'y', value: '2' },
        ],
        result: true,
      },
      {
        id: uuidv4(),
        text: 'x < y && x > 0',
        variables: [
          { name: 'x', value: '1' },
          { name: 'y', value: '2' },
        ],
        result: true,
      },
      {
        id: uuidv4(),
        text: 'x < y && x < 0',
        variables: [
          { name: 'x', value: '1' },
          { name: 'y', value: '2' },
        ],
        result: false,
      },
    ];

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

const studentSaga = [
  takeLatest(LE_INDEX_LOAD, index),
  takeLatest(LE_DELETE, deleteLE),
];

export default studentSaga;
