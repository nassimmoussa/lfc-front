import produce from 'immer';
import {} from 'store/types';

export const initialState = {
  isLoading: false,
  hasLoaded: false,
  error: {},
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
