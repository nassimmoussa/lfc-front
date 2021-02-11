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
  addAtcivityForm: {
    minHeight: 600,
  },
  navRight: {
    display: 'flex',
    paddingRight: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      width: '100%',
      paddingRight: theme.spacing(0),
    },
    justifyContent: 'flex-end',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  addButton: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    width: '180px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  cardButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
  cardButton: {
    [theme.breakpoints.up('md')]: {
      minWidth: '180px',
    },
  },
  lESelect: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  typeSelect: {
    marginBottom: theme.spacing(1),
  },

  previewDiv: {
    minHeight: 400,
    backgroundColor: '#ccc',
  },
  activityContainer: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      width: '100%',
    },
  },

  activityCard: {
    padding: theme.spacing(2),
  },
  activityLeftCard: {
    flex: '1 1 65%',
    marginRight: '1rem',
  },
  activityRightCard: {
    flex: '1 1 35%',
    [theme.breakpoints.down('sm')]: {
      marginRight: '1rem',
      marginTop: '1rem',
    },
  },

  activityExpression: {
    margin: theme.spacing(2, 2),
    padding: theme.spacing(1, 2),
    borderRadius: '0.8em 0.3em',
    background: 'transparent',
    backgroundImage: `linear-gradient(
      to right,
      rgba(255, 225, 0, 0.1),
      rgba(255, 225, 0, 0.7) 4%,
      rgba(255, 225, 0, 0.3)
    )`,
  },
  activityBtnsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  activityBtn: {
    width: '45%',
  },
  activityVariables: {
    fontSize: '22px',
    display: 'block',
    marginBottom: '.25rem',
  },
}));
