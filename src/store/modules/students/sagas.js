import { takeLatest, put } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { STUDENT_INDEX_LOAD, STUDENT_NEW } from 'store/types';

import {
  successNotificationAction,
  errorNotificationAction,
} from 'store/modules/notifications/actions';

import {
  studentIsLoadingAction,
  studentIndexSuccessAction,
  studentNewSuccessAction,
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
    yield put(errorNotificationAction('Ocorreu um erro ao buscar os alunos!'));
  }
}

function* newStudent({ data }) {
  yield put(studentIsLoadingAction());
  try {
    const savedStudent = {
      id: uuidv4(),
      ...data,
    };

    yield put(studentNewSuccessAction(savedStudent));
    yield put(successNotificationAction('Aluno adicionado com sucesso!'));
  } catch (e) {
    yield put(
      errorNotificationAction('Ocorreu um erro ao adicionar o alunos!')
    );
  }
}

const studentSaga = [
  takeLatest(STUDENT_INDEX_LOAD, index),
  takeLatest(STUDENT_NEW, newStudent),
];

export default studentSaga;
