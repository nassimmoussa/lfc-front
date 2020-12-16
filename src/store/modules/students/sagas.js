import { takeLatest, put } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { STUDENT_INDEX_LOAD, STUDENT_NEW, STUDENT_DELETE } from 'store/types';

import {
  successNotificationAction,
  errorNotificationAction,
} from 'store/modules/notifications/actions';

import {
  studentIsLoadingAction,
  studentIndexSuccessAction,
  studentNewSuccessAction,
  deleteStudentSuccessAction,
} from './actions';

function* index() {
  yield put(studentIsLoadingAction());
  try {
    const students = [
      { id: uuidv4(), name: 'Primeiro Aluno', cpf: '11111111111' },
      { id: uuidv4(), name: 'Segundo Aluno', cpf: '22222222222' },
      { id: uuidv4(), name: 'Terceiro Aluno', cpf: '33333333333' },
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
    yield put(errorNotificationAction('Ocorreu um erro ao adicionar o aluno!'));
  }
}

function* deleteStudent({ data }) {
  yield put(studentIsLoadingAction());
  try {
    yield put(deleteStudentSuccessAction(data));
    yield put(successNotificationAction('Aluno excluído com sucesso!'));
  } catch (e) {
    yield put(errorNotificationAction('Ocorreu um erro ao excluir o aluno!'));
  }
}

const studentSaga = [
  takeLatest(STUDENT_INDEX_LOAD, index),
  takeLatest(STUDENT_NEW, newStudent),
  takeLatest(STUDENT_DELETE, deleteStudent),
];

export default studentSaga;
