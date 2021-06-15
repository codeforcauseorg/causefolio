import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Checkbox,
  Button,
  Grid
} from '@material-ui/core';
import auth from '../services/authService';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '750px',
    height: '473px',
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
    fontSize: '16px',
    [theme.breakpoints.down('xs')]: {
      height: '793px',
      width: '353px'
    }
  },
  content: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '-76px',
      marginLeft: '6px'
    }
  },
  details: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: 'rgba(42, 23, 89, 0.25)',
    marginBottom: '22px',
    marginTop: '18px'
  },
  cover: {
    width: '354px',
    height: '413px',
    marginTop: '-5px'
  },
  input: {
    background: 'rgba(42, 23, 89, 0.25)',
    borderRadius: '20px',
    border: 'none',
    width: '250px',
    height: '30px',
    fontWeight: 'bold',
    color: '#3291755',
    padding: '0px 13px 0px 13px',
    '&:focus': {
      outline: 'none'
    },
    marginBottom: '4px'
  },
  divider: {
    width: '308px',
    height: '2px',
    marginTop: '45px',
    borderRadius: '25px',
    backgroundColor: '#291757'
  },
  bottomPart: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px'
  },
  checkbox: {
    width: '11.5px',
    height: '11px',
    marginRight: '6.5px'
  },
  button: {
    marginLeft: '246px',
    marginTop: '40px',
    width: '100px',
    height: '28px',
    borderRadius: '20px',
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: '18px',
    background: 'linear-gradient(180deg, #5731BA 0%, #291757 100%)',
    [theme.breakpoints.down('xs')]: {
      marginTop: '29px',
      marginLeft: '215px'
    }
  },
  cross: {
    width: '12px',
    height: '12px',
    marginLeft: '718px',
    marginTop: '21px',
    marginBottom: '2px',
    '&:hover': {
      cursor: 'pointer'
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '317px'
    }
  }
}));

export default function Login({ handleClose }) {
  const classes = useStyles();
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: ''
  });

  const handleLogin = () => {
    const { email, password } = loginCredentials;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => (
        result.user.updateProfile({
          displayName: 'Dummy Name'
        })
      ));
  };

  const handleChange = (event) => {
    setLoginCredentials({
      ...loginCredentials,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Card className={classes.root}>
      <Grid container>
        <img
          src="/static/images/icons/cross.svg"
          className={classes.cross}
          alt="cross icon"
          onClick={handleClose}
          role="presentation"
        />
        <Grid item xs={12} sm={6}>
          <CardMedia
            className={classes.cover}
            image="/static/images/login-illustration.svg"
            title="Login Image"
          />
        </Grid>
        <Grid item sm={6}>
          <CardContent className={classes.content}>
            <Typography
              style={{
                fontSize: '36px',
                fontWeight: 'bold'
              }}
            >
              Login
            </Typography>
            <Typography className={classes.details}>
              Welcome back,
              <br />
              please login to your account
            </Typography>
            <Typography>Email Id</Typography>
            <input
              className={classes.input}
              name="email"
              type="email"
              variant="outlined"
              onChange={handleChange}
            />
            <Typography>Password</Typography>
            <input
              className={classes.input}
              name="password"
              type="password"
              variant="outlined"
              onChange={handleChange}
            />
            <Divider className={classes.divider} />
            <div className={classes.bottomPart}>
              <Checkbox className={classes.checkbox} />
              <Typography style={{ marginRight: '21px' }}>
                Remember Me
              </Typography>
              <Typography style={{ color: '#B20000' }}>
                Forgot password ?
              </Typography>
            </div>
            <Button onClick={handleLogin} className={classes.button}>
              Login
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
