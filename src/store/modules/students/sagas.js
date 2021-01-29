import { takeLatest, put } from 'redux-saga/effects';
import { getStudents, postStudents } from 'services/students';

import {
  STUDENT_INDEX_LOAD,
  STUDENT_NEW,
  STUDENT_DELETE,
  STUDENT_EDIT,
} from 'store/types';

import {
  successNotificationAction,
  errorNotificationAction,
} from 'store/modules/notifications/actions';

import {
  studentIsLoadingAction,
  studentIndexSuccessAction,
  studentNewSuccessAction,
  deleteStudentSuccessAction,
  editStudentSuccessAction,
} from './actions';

function* index() {
  yield put(studentIsLoadingAction());
  try {
    const students = yield getStudents();

    yield put(studentIndexSuccessAction(students));
  } catch (e) {
    yield put(errorNotificationAction('Ocorreu um erro ao buscar os alunos!'));
  }
}

function* newStudent({ data }) {
  yield put(studentIsLoadingAction());
  try {
    const savedStudent = yield postStudents(data);

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

function* editStudent({ data }) {
  yield put(studentIsLoadingAction());
  try {
    yield put(editStudentSuccessAction(data));
    yield put(successNotificationAction('Aluno atualizado com sucesso!'));
  } catch (e) {
    yield put(errorNotificationAction('Ocorreu um erro ao atualizar o aluno!'));
  }
}

const studentSaga = [
  takeLatest(STUDENT_INDEX_LOAD, index),
  takeLatest(STUDENT_NEW, newStudent),
  takeLatest(STUDENT_DELETE, deleteStudent),
  takeLatest(STUDENT_EDIT, editStudent),
];

export default studentSaga;
