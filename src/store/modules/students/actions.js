import {
  STUDENT_ERROR,
  STUDENT_INDEX_SUCCESS,
  STUDENT_IS_LOADING,
  STUDENT_INDEX_LOAD,
  STUDENT_CLEANUP,
  STUDENT_NEW,
  STUDENT_NEW_SUCCESS,
  STUDENT_DELETE,
  STUDENT_DELETE_SUCCESS,
  STUDENT_SELECT,
  STUDENT_CLEAR_SELECT,
  STUDENT_EDIT,
  STUDENT_EDIT_SUCCESS,
  STUDENT_SEARCH_FILTER,
  STUDENT_REMOVE_SEARCH_FILTER,
  STUDENT_ADD_TO_ROOM,
  STUDENT_REMOVE_FROM_ROOM,
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

export const deleteStudentAction = (studentId) => ({
  type: STUDENT_DELETE,
  data: studentId,
});

export const deleteStudentSuccessAction = (studentId) => ({
  type: STUDENT_DELETE_SUCCESS,
  data: studentId,
});

export const selectStudentAction = (student) => ({
  type: STUDENT_SELECT,
  data: student,
});

export const clearSelectedStudentAction = (student) => ({
  type: STUDENT_CLEAR_SELECT,
  data: student,
});

export const editStudentAction = (student) => ({
  type: STUDENT_EDIT,
  data: student,
});

export const editStudentSuccessAction = (student) => ({
  type: STUDENT_EDIT_SUCCESS,
  data: student,
});

export const studentSearchAction = (searchText) => {
  if (searchText) {
    return {
      type: STUDENT_SEARCH_FILTER,
      data: searchText,
    };
  }
  return {
    type: STUDENT_REMOVE_SEARCH_FILTER,
  };
};

export const addStudentToRoom = (student) => ({
  type: STUDENT_ADD_TO_ROOM,
  data: student,
});

export const removeStudentFromRoom = (student) => ({
  type: STUDENT_REMOVE_FROM_ROOM,
  data: student,
});
