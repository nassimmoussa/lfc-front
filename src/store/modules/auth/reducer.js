import produce from 'immer';
import {
  AUTH_IS_LOADING,
  AUTH_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_SIGN_UP_SUCCESS,
} from 'store/types';

export const initialState = {
  isLoading: false,
  hasLoaded: false,
  error: {},
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGN_UP_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.hasLoaded = true;
        draft.data = action.data;
      });

    case AUTH_LOGIN_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.hasLoaded = true;
        draft.data = action.data;
      });

    case AUTH_IS_LOADING:
      return produce(state, (draft) => {
        draft.isLoading = true;
        draft.hasLoaded = false;
        draft.error = {};
      });

    case AUTH_ERROR:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.hasLoaded = true;
        draft.error = action.data;
      });

    case AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
