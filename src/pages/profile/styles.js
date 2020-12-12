import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 600,
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 350,
    },
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
