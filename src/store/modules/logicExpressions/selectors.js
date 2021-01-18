import { createSelector } from 'reselect';
import isEmpty from 'lodash.isempty';

export const lEsSelector = (state) => state.lEs;

export const lEsDataSelector = createSelector(lEsSelector, (lEs) => lEs.data);

export const lEsIsLoadingSelector = createSelector(
  lEsSelector,
  (lEs) => lEs.isLoading
);

export const lEsHasLoadedSelector = createSelector(
  lEsSelector,
  (lEs) => lEs.hasLoaded
);

export const lEsErrorSelector = createSelector(lEsSelector, (lEs) => lEs.error);

export const lEsHasErrorSelector = createSelector(
  lEsErrorSelector,
  (error) => !isEmpty(error)
);

export const lEsListSelector = createSelector(
  lEsDataSelector,
  (data) => data.lEsList || []
);

export const selectedlESelector = createSelector(
  lEsDataSelector,
  (data) => data.selectedLE
);
