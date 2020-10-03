import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    signUpedirect: {
      justifyContent: 'flex-end',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
    },
  };
});
