import produce from 'immer';
import {
  ROOM_CLEANUP,
  ROOM_UPDATE,
  ROOM_STUDENT_LOGIN_SUCCESS,
} from 'store/types';

export const initialState = {
  id: null,
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ROOM_STUDENT_LOGIN_SUCCESS:
      return produce(state, (draft) => {
        draft.loggedStudent = true;
        draft.data = action.data.data;
        draft.id = action.data.id;
      });

    case ROOM_UPDATE:
      return produce(state, (draft) => {
        draft.data = action.data.data;
        draft.id = action.data.id;
      });
    case ROOM_CLEANUP:
      return initialState;
    default:
      return state;
  }
};
