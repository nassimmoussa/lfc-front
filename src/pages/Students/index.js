import React from 'react';

import Button from '@material-ui/core/Button';

import useModal from 'hooks/useModal';

import StudentsList from './components/StudentsList';

import { useStyles } from './styles';

const StudentsPage = () => {
  const classes = useStyles();
  const [
    isOpenAddStudentModal,
    closeAddStudentModal,
    openAddStudentModal,
  ] = useModal();

  return (
    <div>
      <div className={classes.navRight}>
        <Button className={classes.addButton} onClick={openAddStudentModal}>
          + NOVO ALUNO
        </Button>
      </div>
      <StudentsList />
    </div>
  );
};

export default StudentsPage;
