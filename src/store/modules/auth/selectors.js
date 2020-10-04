import { createSelector } from 'reselect';
import isEmpty from 'lodash.isempty';

export const authSelector = (state) => state.auth;

export const authDataSelector = createSelector(
  authSelector,
  (auth) => auth.data
);

export const authIsLoadingSelector = createSelector(
  authSelector,
  (auth) => auth.isLoading
);

export const authHasLoadedSelector = createSelector(
  authSelector,
  (auth) => auth.hasLoaded
);

export const authErrorSelector = createSelector(
  authSelector,
  (auth) => auth.error
);

export const authHasErrorSelector = createSelector(
  authErrorSelector,
  (error) => !isEmpty(error)
);
