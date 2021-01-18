import produce from 'immer';
import {
  LE_ERROR,
  LE_CLEANUP,
  LE_IS_LOADING,
  LE_INDEX_SUCCESS,
  LE_NEW_SUCCESS,
  LE_DELETE_SUCCESS,
  LE_SELECT,
  LE_CLEAR_SELECT,
  LE_EDIT_SUCCESS,
} from 'store/types';

export const initialState = {
  isLoading: false,
  hasLoaded: false,
  error: {},
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LE_EDIT_SUCCESS:
      return produce(state, (draft) => {
        draft.data.lEsList = draft.data.lEsList.map((lE) =>
          lE.id !== action.data.id ? lE : action.data
        );
      });

    case LE_CLEAR_SELECT:
      return produce(state, (draft) => {
        delete draft.data.selectedLE;
      });

    case LE_SELECT:
      return produce(state, (draft) => {
        draft.data.selectedLE = action.data;
      });

    case LE_DELETE_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.hasLoaded = true;
        draft.data.lEsList = draft.data.lEsList.filter(
          (lE) => lE.id !== action.data
        );
      });

    case LE_NEW_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.hasLoaded = true;
        draft.data.lEsList.push(action.data);
      });

    case LE_INDEX_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.hasLoaded = true;
        draft.data.lEsList = action.data;
      });

    case LE_IS_LOADING:
      return produce(state, (draft) => {
        draft.isLoading = true;
        draft.hasLoaded = false;
        draft.error = {};
      });

    case LE_ERROR:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.hasLoaded = true;
        draft.error = action.data;
      });

    case LE_CLEANUP:
      return initialState;
    default:
      return state;
  }
};
