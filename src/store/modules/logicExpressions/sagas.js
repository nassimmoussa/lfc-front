import { takeLatest, put } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { LE_INDEX_LOAD } from 'store/types';

import { errorNotificationAction } from 'store/modules/notifications/actions';

import { lEIsLoadingAction, lEIndexSuccessAction } from './actions';

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

const studentSaga = [takeLatest(LE_INDEX_LOAD, index)];

export default studentSaga;
