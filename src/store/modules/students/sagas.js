import { takeLatest, put } from 'redux-saga/effects';
import { STUDENT_INDEX_LOAD } from 'store/types';

import {
  studentIsLoadingAction,
  studentErrorAction,
  studentIndexSuccessAction,
} from './actions';

function* index() {
  yield put(studentIsLoadingAction());
  try {
    const students = [
      { id: '1', name: 'Primeiro Aluno', cpf: '11111111111' },
      { id: '2', name: 'Segundo Aluno', cpf: '22222222222' },
      { id: '3', name: 'Terceiro Aluno', cpf: '33333333333' },
    ];

    yield put(studentIndexSuccessAction(students));
  } catch (e) {
    yield put(
      studentErrorAction({
        message: 'Ocorreu um erro ao buscar os alunos!',
      })
    );
  }
}

const studentSaga = [takeLatest(STUDENT_INDEX_LOAD, index)];

export default studentSaga;
