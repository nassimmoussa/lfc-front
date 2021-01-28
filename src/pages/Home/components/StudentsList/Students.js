import React from 'react';
import { useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import { studentsListSelector } from 'store/modules/students/selectors';

import { useStyles } from '../../styles';

const Students = () => {
  const classes = useStyles();
  const students = useSelector(studentsListSelector);
  const selectedStudents = students.slice(0, 2);

  const checkIfSelected = (id) =>
    !!selectedStudents.find((student) => student.id === id);

  const toggleStudentCheckbox = (student, selected) => {};

  const renderStudent = (student) => {
    const selected = checkIfSelected(student.id);
    return (
      <div className={classes.studentListItem} key={student.id}>
        <Typography variant="subtitle1" className={classes.studentListTitle}>
          {student.name}
        </Typography>
        <Checkbox
          color="primary"
          checked={selected}
          onClick={() => toggleStudentCheckbox(student, selected)}
        />
      </div>
    );
  };

  return students.map(renderStudent);
};

export default Students;
