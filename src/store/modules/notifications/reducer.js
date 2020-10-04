import produce from 'immer';
import { NOTIFICATIONS_SUCCESS, NOTIFICATIONS_ERROR } from 'store/types';

export const initialState = {
  error: '',
  success: '',
  alert: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATIONS_ERROR:
      return produce(state, (draft) => {
        draft.error = action.data;
      });

    case NOTIFICATIONS_SUCCESS:
      return produce(state, (draft) => {
        draft.success = action.data;
      });

    default:
      return state;
  }
};
