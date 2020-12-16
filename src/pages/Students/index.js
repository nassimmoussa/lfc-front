import React from 'react';

import Button from '@material-ui/core/Button';

import useModal from 'hooks/useModal';

import StudentsList from './components/StudentsList';
import AddStudentModal from './components/AddStudentModal';

import { useStyles } from './styles';

const StudentsPage = () => {
  const classes = useStyles();
  const [
    isOpenAddStudentModal,
    closeAddStudentModal,
    openAddStudentModal,
  ] = useModal(true);

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
