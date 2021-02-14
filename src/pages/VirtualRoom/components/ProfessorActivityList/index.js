import React from 'react';
import { useSelector } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { activitySelector } from 'store/modules/room/selectors';

import ActivityTableItem from './ActivityTableItem';
import { useStyles } from '../../styles';

const ProfessorActivityList = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const activities = useSelector(activitySelector);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 200 }} className={classes.boldText}>
                Expressão lógica
              </TableCell>
              <TableCell style={{ minWidth: 140 }} className={classes.boldText}>
                Tipo de atividade
              </TableCell>
              <TableCell style={{ minWidth: 260 }} className={classes.boldText}>
                alunos já responderam
              </TableCell>
              <TableCell style={{ minWidth: 80 }} className={classes.boldText}>
                Ações
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((activity) => (
                <ActivityTableItem activity={activity} key={activity.id} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={activities.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage="atividades por página"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} de ${count !== -1 ? count : `mais que ${to}`}`
        }
      />
    </div>
  );
};

export default ProfessorActivityList;
