import {
  STUDENT_ERROR,
  STUDENT_INDEX_SUCCESS,
  STUDENT_IS_LOADING,
  STUDENT_INDEX_LOAD,
  STUDENT_CLEANUP,
  STUDENT_NEW,
  STUDENT_NEW_SUCCESS,
} from '../../types';

export const studentIsLoadingAction = () => ({
  type: STUDENT_IS_LOADING,
});

export const studentErrorAction = (error) => ({
  type: STUDENT_ERROR,
  data: error,
});

export const studentCleanUpAction = () => ({
  type: STUDENT_CLEANUP,
});

export const studentIndexLoadAction = () => ({
  type: STUDENT_INDEX_LOAD,
});

export const studentIndexSuccessAction = (students) => ({
  type: STUDENT_INDEX_SUCCESS,
  data: students,
});

export const studentNewAction = (studentData) => ({
  type: STUDENT_NEW,
  data: studentData,
});

export const studentNewSuccessAction = (student) => ({
  type: STUDENT_NEW_SUCCESS,
  data: student,
});
