import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      width: '100%',
    },
    justifyContent: 'center',
    padding: theme.spacing(3),
  },
  content: {
    marginRight: theme.spacing(4),
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  cardStudentLine: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: `1px solid #BCBCBC`,
  },
  online: {
    color: theme.palette.primary.light,
  },
  offline: {
    color: theme.palette.error.main,
  },
}));
