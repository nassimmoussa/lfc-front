import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import SelectedStudents from './SelectedStudents';

import { useStyles } from '../../styles';

const SelectedStudentsList = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paperPadding}>
      <Typography variant="h5" gutterBottom>
        Alunos selecionados
      </Typography>
      <SelectedStudents />
    </Paper>
  );
};

export default SelectedStudentsList;
