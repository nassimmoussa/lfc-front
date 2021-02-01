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
  STUDENT_SEARCH_FILTER,
  STUDENT_REMOVE_SEARCH_FILTER,
  STUDENT_ADD_TO_ROOM,
  STUDENT_REMOVE_FROM_ROOM,
} from 'store/types';

export const initialState = {
  isLoading: false,
  hasLoaded: false,
  error: {},
  data: {
    roomStudents: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_REMOVE_FROM_ROOM:
      return produce(state, (draft) => {
        draft.data.roomStudents = draft.data.roomStudents.filter(
          (student) => student.id !== action.data.id
        );
      });

    case STUDENT_ADD_TO_ROOM:
      return produce(state, (draft) => {
        draft.data.roomStudents.push(action.data);
      });

    case STUDENT_SEARCH_FILTER:
      return produce(state, (draft) => {
        draft.data.filteredStudents = draft.data.studentsList.filter(
          (student) =>
            student.name.toLowerCase().includes(action.data.toLowerCase())
        );
      });

    case STUDENT_REMOVE_SEARCH_FILTER:
      return produce(state, (draft) => {
        draft.data.filteredStudents = [];
      });

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
