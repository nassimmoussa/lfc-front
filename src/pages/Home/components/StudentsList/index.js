import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { studentIndexLoadAction } from 'store/modules/students/actions';

import { useStyles } from '../../styles';
import Students from './Students';

const StudentsList = () => {
  const classes = useStyles();
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentIndexLoadAction());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(trapsSearchAction(search));
  // }, [dispatch, search]);

  return (
    <Paper elevation={3} className={classes.studentsPaper}>
      <Typography variant="h5" gutterBottom>
        Alunos Cadastrados
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Selecione quais alunos deseja adicionar à nova sala virtual
      </Typography>
      <TextField
        variant="outlined"
        type="text"
        id="search"
        label="Pesquisar"
        color="secondary"
        className={classes.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={classes.studentsListContainer}>
        <Students />
      </div>
    </Paper>
  );
};

export default StudentsList;
