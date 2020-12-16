import { createSelector } from 'reselect';
import isEmpty from 'lodash.isempty';

export const studentsSelector = (state) => state.students;

export const studentsDataSelector = createSelector(
  studentsSelector,
  (students) => students.data
);

export const studentsIsLoadingSelector = createSelector(
  studentsSelector,
  (students) => students.isLoading
);

export const studentsHasLoadedSelector = createSelector(
  studentsSelector,
  (students) => students.hasLoaded
);

export const studentsErrorSelector = createSelector(
  studentsSelector,
  (students) => students.error
);

export const studentsHasErrorSelector = createSelector(
  studentsErrorSelector,
  (error) => !isEmpty(error)
);

export const studentsListSelector = createSelector(
  studentsDataSelector,
  (data) => data.studentsList || []
);
