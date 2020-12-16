import produce from 'immer';
import {
  STUDENT_ERROR,
  STUDENT_CLEANUP,
  STUDENT_IS_LOADING,
  STUDENT_INDEX_SUCCESS,
  STUDENT_NEW_SUCCESS,
  STUDENT_DELETE_SUCCESS,
  STUDENT_SELECT,
  STUDENT_CLEAR_SELECT,
  STUDENT_EDIT_SUCCESS,
} from 'store/types';

export const initialState = {
  isLoading: false,
  hasLoaded: false,
  error: {},
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_EDIT_SUCCESS:
      return produce(state, (draft) => {
        draft.data.studentsList = draft.data.studentsList.map((student) =>
          student.id !== action.data.id ? student : action.data
        );
      });

    case STUDENT_CLEAR_SELECT:
      return produce(state, (draft) => {
        delete draft.data.selectedStudent;
      });

    case STUDENT_SELECT:
      return produce(state, (draft) => {
        draft.data.selectedStudent = action.data;
      });

    case STUDENT_DELETE_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.hasLoaded = true;
        draft.data.studentsList = draft.data.studentsList.filter(
          (student) => student.id !== action.data
        );
      });

    case STUDENT_NEW_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.hasLoaded = true;
        draft.data.studentsList.push(action.data);
      });

    case STUDENT_INDEX_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.hasLoaded = true;
        draft.data.studentsList = action.data;
      });

    case STUDENT_IS_LOADING:
      return produce(state, (draft) => {
        draft.isLoading = true;
        draft.hasLoaded = false;
        draft.error = {};
      });

    case STUDENT_ERROR:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.hasLoaded = true;
        draft.error = action.data;
      });

    case STUDENT_CLEANUP:
      return initialState;
    default:
      return state;
  }
};
