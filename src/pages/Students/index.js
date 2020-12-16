import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';

import useModal from 'hooks/useModal';

import {
  studentIndexLoadAction,
  studentCleanUpAction,
} from 'store/modules/students/actions';

import StudentsList from './components/StudentsList';
import AddStudentModal from './components/AddStudentModal';

import { useStyles } from './styles';

const StudentsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [
    isOpenAddStudentModal,
    closeAddStudentModal,
    openAddStudentModal,
  ] = useModal();

  useEffect(() => {
    dispatch(studentIndexLoadAction());
    return () => {
      dispatch(studentCleanUpAction());
    };
  }, [dispatch]);

  return (
    <div>
      <div className={classes.navRight}>
        <Button className={classes.addButton} onClick={openAddStudentModal}>
          + NOVO ALUNO
        </Button>
      </div>
      <StudentsList />
      <AddStudentModal
        open={isOpenAddStudentModal}
        closeHandler={closeAddStudentModal}
      />
    </div>
  );
};

export default StudentsPage;
