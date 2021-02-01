import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { roomStudentsSelector } from 'store/modules/students/selectors';

import { useStyles } from '../../styles';

const SelectedStudents = () => {
  const classes = useStyles();
  const selectedStudents = useSelector(roomStudentsSelector);

  return selectedStudents.map((student, index) => (
    <div className={classes.cardStudentLine} key={student.id}>
      <Typography variant="subtitle1" className={classes.cardLineIndex}>
        {index + 1}ª
      </Typography>
      <Typography variant="subtitle1">{student.name}</Typography>
    </div>
  ));
};

export default SelectedStudents;
