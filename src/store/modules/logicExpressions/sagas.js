import { takeLatest, put } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { LE_INDEX_LOAD, LE_DELETE, LE_NEW } from 'store/types';

import {
  errorNotificationAction,
  successNotificationAction,
} from 'store/modules/notifications/actions';

import {
  lEIsLoadingAction,
  lEIndexSuccessAction,
  deleteLESuccessAction,
  lENewSuccessAction,
} from './actions';

function* index() {
  yield put(lEIsLoadingAction());
  try {
    const lEs = [
      {
        id: uuidv4(),
        title: 'expressão simples',
        text: 'x < y',
        variables: [
          { name: 'x', value: '1' },
          { name: 'y', value: '2' },
        ],
        result: true,
      },
      {
        id: uuidv4(),
        title: 'expressão com and verdadeira',
        text: 'x < y && x > 0',
        variables: [
          { name: 'x', value: '1' },
          { name: 'y', value: '2' },
        ],
        result: true,
      },
      {
        id: uuidv4(),
        title: 'expressão com and falsa',
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

const studentSaga = [
  takeLatest(LE_INDEX_LOAD, index),
  takeLatest(LE_DELETE, deleteLE),
  takeLatest(LE_NEW, newLE),
];

export default studentSaga;
