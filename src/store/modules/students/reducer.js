import produce from 'immer';
import {
  STUDENT_ERROR,
  STUDENT_CLEANUP,
  STUDENT_IS_LOADING,
  STUDENT_INDEX_SUCCESS,
} from 'store/types';

export const initialState = {
  isLoading: false,
  hasLoaded: false,
  error: {},
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
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
