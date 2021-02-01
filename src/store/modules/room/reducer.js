import { ROOM_CLEANUP, ROOM_UPDATE } from 'store/types';

export const initialState = {
  id: null,
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ROOM_UPDATE:
      return action.data;
    case ROOM_CLEANUP:
      return initialState;
    default:
      return state;
  }
};
