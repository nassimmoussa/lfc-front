import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { studentsListSelector } from 'store/modules/students/selectors';

import { useStyles } from '../../styles';

const SelectedStudents = () => {
  const classes = useStyles();
  const students = useSelector(studentsListSelector);
  const selectedStudents = students.slice(0, 2);

  return selectedStudents.map((student, index) => (
    <div className={classes.cardStudentLine}>
      <Typography variant="subtitle1" className={classes.cardLineIndex}>
        {index + 1}ª
      </Typography>
      <Typography variant="subtitle1">{student.name}</Typography>
    </div>
  ));
};

export default SelectedStudents;
