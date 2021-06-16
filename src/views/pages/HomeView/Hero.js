import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#291755',
    paddingTop: 80,
    paddingBottom: 60,
    color: '#FFFFFF',
    paddingLeft: 60,
    paddingRight: 60,

    height: '90.3vh',
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
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container
        maxWidth="lg"
        style={{ padding: '40px 0px 0px', position: 'relative' }}
      >
        {/* <img
          src="/static/home/blob.svg"
          alt="blob"
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-20%'
          }}
        /> */}
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
                  <br />
                  {' '}
                  and awareness about the possibilities in the
                  <br />
                  software field to students &amp; professionals.
                </Typography>
              </Box>
              <Box mt={2} mb={3}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant="h1" color="secondary" />
                    <Box>
                      <Button
                        style={{
                          backgroundColor: '#ffffff',
                          color: '#B20000',
                          textTransform: 'capitalize',
                          fontWeight: 700,
                          borderRadius: '20px'
                        }}
                        component="a"
                        href="/register"
                        size="large"
                        variant="contained"
                      >
                        Check out
                      </Button>
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
