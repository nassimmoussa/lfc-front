import produce from 'immer';
import {
  ROOM_CLEANUP,
  ROOM_UPDATE,
  ROOM_STUDENT_LOGIN_SUCCESS,
  ROOM_STUDENT_NEW_LOGIN,
} from 'store/types';

export const initialState = {
  id: null,
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ROOM_STUDENT_NEW_LOGIN:
      return produce(state, (draft) => {
        if (draft.loggedStudent !== action.cpf) {
          draft.data.students = draft.data.students.map((s) =>
            s.cpf === action.cpf ? { ...s, loggedIn: true } : s
          );
        }
      });

    case ROOM_STUDENT_LOGIN_SUCCESS:
      return produce(state, (draft) => {
        draft.loggedStudent = action.cpf;
        draft.data = action.room.data;
        draft.id = action.room.id;
      });

    case ROOM_UPDATE:
      return produce(state, (draft) => {
        draft.data = action.room.data;
        draft.id = action.room.id;
      });
    case ROOM_CLEANUP:
      return initialState;
    default:
      return state;
  }
};
