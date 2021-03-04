/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PORTUGUES_TYPES } from 'constants/activityTypes';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import ConfirmModal from 'components/ConfirmModal';
import useModal from 'hooks/useModal';

import { activityStartedSelector } from 'store/modules/room/selectors';

import { useStyles } from '../../styles';

const ActivityTableItem = ({ activity, socket }) => {
  const { roomId } = useParams();
  const classes = useStyles();
  const activityStarted = useSelector(activityStartedSelector);
  const [deleteModalIsOpen, deleteModalClose, deleteModalOpen] = useModal();

  const deleteClickHandler = () => {
    socket.emit('room:remove:activity', { roomId, activityId: activity.id });
    deleteModalClose();
  };

  const renderStudents = () =>
    activity.responses.map((response, index) => (
      <span
        className={
          response.correct ? classes.correctResponse : classes.wrongResponse
        }
      >
        {response.name} {index === activity.responses.length - 1 ? null : ' - '}
      </span>
    ));

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
          <Button
            className={classes.deleteButton}
            onClick={deleteModalOpen}
            disabled={activityStarted}
          >
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
