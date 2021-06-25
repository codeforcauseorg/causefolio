import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  Typography,
  makeStyles,
  Dialog
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { firebase } from 'src/services/authService';
import Login from '../../../components/Login';
import { login, dismissLogin } from 'src/actions/accountActions';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#291755',
    paddingTop: 30,
    paddingBottom: 60,
    color: '#FFFFFF',
    paddingLeft: 60,
    paddingRight: 60,

    height: 'auto',
    [theme.breakpoints.down('md')]: {
      paddingTop: 15,
      paddingBottom: 15
    },
    [theme.breakpoints.down('sm')]: {
      height: 'auto'
    }
  },
  extraPadding: {
    padding: '0 70px 0px 0px',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    }
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      height: 'auto',
      backfaceVisibility: 'hidden'
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center'
    }
  },
  hide: {
    display: 'none'
  },
  Button: {
    textTransform: 'capitalize'
    // padding :
  }
}));

function Hero({ className, ...rest }) {
  const classes = useStyles();
  const user = useSelector(state => state.account.user);
  const loginFlag = useSelector(state => state.account.login);
  const [text, setText] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user === null || user === undefined) {
      setText('Login and Create Profile');
      return;
    }
    // setText("Go to Dashboard")
    const userId = user.uid;
    const db = firebase.firestore();

    db.collection('users')
      .doc(userId)
      .get()
      .then(doc => {
        if (doc.exists) {
          setText('Go To Dashboard');
        } else {
          setText('Register');
        }
      });
  }, [user]);

  const handleClick = () => {
    if (user !== null && user !== undefined) {
      if (text === 'Go To Dashboard') {
        history.push('/dashboard');
      }
      if (text === 'Register') {
        history.push('/register');
      }
    } else {
      dispatch(login());
    }
  };

  const handleClose = () => {
    dispatch(dismissLogin());
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Dialog
        maxWidth
        open={!user && !!loginFlag}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}
      >
        <Login handleClose={handleClose} />
      </Dialog>
      <Container
        maxWidth="lg"
        style={{ padding: '40px 0px 0px', position: 'relative' }}
      >
        <Hidden mdDown>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              position: 'absolute',
              top: '-35%',
              left: '-15%',
              width: '200%'
            }}
          >
            <Box>
              <div className={classes.image}>
                <img
                  src="/static/home/blob.svg"
                  alt="blob"
                  style={{
                    width: '120%'
                  }}
                />
              </div>
            </Box>
          </Grid>
        </Hidden>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} style={{ zIndex: '20' }}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
              width="100%"
              className={clsx(classes.extraPadding, className)}
            >
              <Typography
                variant="h1"
                color="#fff"
                style={{
                  fontWeight: 800,
                  fontSize: '40px'
                }}
              >
                Code for Cause
              </Typography>
              <Hidden mdUp>
                <Box mt={6} mb={2}>
                  <div className={classes.image}>
                    <img
                      alt="codeforcauseimg"
                      src="/static/home/illus-1.svg"
                      style={{
                        width: '75%'
                      }}
                    />
                  </div>
                </Box>
              </Hidden>
              <Box mt={5}>
                <Typography variant="body1">
                  An initiative to contribute to Open Source
                  <br />
                  community by providing training, guidance
                  <br /> and awareness about the possibilities in the
                  <br />
                  software field to students &amp; professionals.
                </Typography>
              </Box>
              <Box mt={2} mb={3}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant="h1" color="secondary" />
                    <Box>
                      {text.length > 0 && (
                        <Button
                          style={{
                            backgroundColor: '#ffffff',
                            color: '#B20000',
                            textTransform: 'capitalize',
                            fontWeight: 700,
                            borderRadius: '20px'
                          }}
                          component="a"
                          onClick={handleClick}
                          size="large"
                          variant="contained"
                        >
                          {text}
                        </Button>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} md={6}>
              <Box>
                <div className={classes.image}>
                  <img
                    alt="codeforcauseimg"
                    src="/static/home/illus-1.svg"
                    style={{
                      width: '100%'
                    }}
                  />
                </div>
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </div>
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
