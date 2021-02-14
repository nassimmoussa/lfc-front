/* eslint-disable react/prop-types */
import React from 'react';
import { PORTUGUES_TYPES } from 'constants/activityTypes';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import ConfirmModal from 'components/ConfirmModal';
import useModal from 'hooks/useModal';
import { useParams } from 'react-router-dom';

import { useStyles } from '../../styles';

const ActivityTableItem = ({ activity, socket }) => {
  const { roomId } = useParams();
  const classes = useStyles();
  const [deleteModalIsOpen, deleteModalClose, deleteModalOpen] = useModal();

  const deleteClickHandler = () => {
    socket.emit('room:remove:activity', { roomId, activityId: activity.id });
    deleteModalClose();
  };

  const renderStudents = () =>
    activity.students && activity.students.join(', ');

  const renderExtraLE = () =>
    activity.logicExpression2 &&
    activity.logicExpression2.title &&
    `e ${activity.logicExpression2.title}`;

  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1}>
        <TableCell>
          {activity.logicExpression.title} {renderExtraLE()}
        </TableCell>
        <TableCell>{PORTUGUES_TYPES[activity.activityType]}</TableCell>
        <TableCell>{renderStudents()}</TableCell>
        <TableCell>
          <Button className={classes.deleteButton} onClick={deleteModalOpen}>
            <DeleteIcon />
          </Button>
        </TableCell>
      </TableRow>
      <ConfirmModal
        open={deleteModalIsOpen}
        closeHandler={deleteModalClose}
        confirmHandler={deleteClickHandler}
        titleText="Deseja realmente excluir a atividade?"
        cancelText="CANCELAR"
        confirmText="EXCLUIR"
        variant="error"
      />
    </>
  );
};

export default ActivityTableItem;
