import React from 'react';

import StudentListItem from './StudentListItem';
import { useStyles } from '../../styles';

const StudentsList = () => {
  const classes = useStyles();
  const students = [
    { id: '1', name: 'Primeiro Aluno', cpf: '11111111111' },
    { id: '2', name: 'Segundo Aluno', cpf: '22222222222' },
    { id: '3', name: 'Terceiro Aluno', cpf: '33333333333' },
  ];

  return (
    <div className={classes.listContainer}>
      {students.map((student) => (
        <StudentListItem key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentsList;
