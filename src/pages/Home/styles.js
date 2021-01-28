import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      width: '100%',
    },
    justifyContent: 'center',
    padding: theme.spacing(3),
  },
  content: {
    marginRight: theme.spacing(4),
    width: '35%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  cardButtons: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
  },
  studentsPaper: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  input: {
    width: '90%',
    margin: theme.spacing(2),
  },
  studentsListContainer: {
    maxHeight: '350px',
    overflowY: 'auto',
    [theme.breakpoints.up('xl')]: {
      maxHeight: '600px',
    },
  },
  studentListItem: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: `1px solid #BCBCBC`,
  },
  studentListTitle: {
    marginLeft: theme.spacing(2),
  },
  paperPadding: {
    padding: theme.spacing(2),
  },
  cardStudentLine: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    borderBottom: `1px solid #BCBCBC`,
  },
  cardLineIndex: {
    color: theme.palette.secondary.light,
    marginRight: theme.spacing(2),
  },
}));
