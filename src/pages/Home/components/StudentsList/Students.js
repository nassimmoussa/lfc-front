import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import {
  studentsListSelector,
  hasFilteredStudentsSelector,
  filteredStudentsSelector,
  roomStudentsSelector,
} from 'store/modules/students/selectors';
import {
  removeStudentFromRoom,
  addStudentToRoom,
} from 'store/modules/students/actions';

import { useStyles } from '../../styles';

const Students = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const students = useSelector(studentsListSelector);
  const hasFilteredStudents = useSelector(hasFilteredStudentsSelector);
  const filteredStudents = useSelector(filteredStudentsSelector) || [];
  const selectedStudents = useSelector(roomStudentsSelector);

  const checkIfSelected = (id) =>
    !!selectedStudents.find((student) => student.id === id);

  const toggleStudentCheckbox = (student, selected) => {
    if (selected) {
      return dispatch(removeStudentFromRoom(student));
    }
    return dispatch(addStudentToRoom(student));
  };

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

  return hasFilteredStudents
    ? filteredStudents.map(renderStudent)
    : students.map(renderStudent);
};

export default Students;
