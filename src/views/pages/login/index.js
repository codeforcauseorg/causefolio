import { makeStyles, Typography, Button } from '@material-ui/core';
import React from 'react';
import { signInWithGoogle } from 'src/services/authService';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    background:
      'linear-gradient(269.76deg, #180255 0.18%, #000000 53.35%, #000000 107.44%)',
    height: '100vh',
    textAlign: 'center'
  },
  container: {
    color: '#fff',
    margin: 'auto',
    textAlign: 'center',
    verticalAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    msTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    maxWidth: 450
  },
  typography: {
    margin: '40px 0px 10px'
  },
  btn: {
    backgroundColor: '#cccccc',
    color: '#000',
    '&:hover': {
      backgroundColor: '#ceeeee'
    }
  },
  parentbtn: {
    backgroundColor: '#A60000',
    color: '#ffffff',
    padding: '8px 16px',
    fontWeight: 700,
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    '&:hover': {
      backgroundColor: 'rgba(166, 0, 0, 0.8)'
    }
  }
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        history.push('/');
      })
      .catch(e => {
        console.log('error', e);
      });
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h2" className={classes.typography}>
          Sign In / Sign Up
        </Typography>
        <Typography style={{ marginBottom: '40px' }}>
          Login to Manage your events with CauseFolio
        </Typography>
        <ButtonComponent
          title="Sign In with Google"
          className={classes.btn}
          onClick={handleSignInWithGoogle}
          fullWidth
          icon={
            <img
              src={'https://image.flaticon.com/icons/png/32/2702/2702602.png'}
              style={{ marginRight: '16px' }}
              alt="G-Icon"
            />
          }
        />
        <Typography
          variant="caption"
          style={{ display: 'block', marginTop: '40px', fontSize: '10px' }}
        >
          By continuing, you agree to Code For Cause Terms of Use & Privacy
          policy.
        </Typography>
      </div>
    </div>
  );
}

function ButtonComponent({ className, title, icon = '', ...rest }) {
  const classes = useStyles();
  return (
    <Button className={clsx(classes.btn, className)} {...rest}>
      {icon}
      {title}
    </Button>
  );
}
