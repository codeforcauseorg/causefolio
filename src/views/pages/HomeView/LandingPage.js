import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import {
  Box,
  Grid,
  Typography,
  makeStyles,
  Button,
  AppBar
} from '@material-ui/core';
import TopBar from 'src/layouts/MainLayout/TopBar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFF',
    height: '90vh',
    color: '#000',

    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  extraPadding: {
    [theme.breakpoints.down('sm')]: {
      padding: '0 30px'
    },
    textAlign: 'justify'
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    width: '60vh',
    display: 'flex',
    '& > img': {
      maxWidth: '100%',

      backfaceVisibility: 'hidden'
      // boxShadow: theme.shadows[16]
      // transform: 'rotateY(-35deg) rotateX(15deg)'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '40vh'
    }
  },
  hide: {
    display: 'none'
  },
  Button: {
    textTransform: 'capitalize'
    // padding :
  },
  container: {
    paddingTop: '10vh',
    margin: '0 5px',
    [theme.breakpoints.down('sm')]: {
      margin: '0',
      paddingTop: '2vh',
      padding: '0 4vw',
      display: 'flex',
      justifyContent: 'center'
    }
  },
  footer: {
    padding: 0,
    objectFit: 'cover',
    position: 'fixed',
    left: 0,
    bottom: 0,
    height: '30vh',
    [theme.breakpoints.down('sm')]: {
      height: '8vh'
    }
  }
}));

function LandingPage({ className, ...rest }) {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <TopBar variant="black" />
      </AppBar>
      <div className={clsx(classes.root, className)} {...rest}>
        <Grid
          container
          spacing={2}
          className={classes.container}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sm={6}
            style={{ height: '80%' }}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Box
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box
                display="flex"
                style={{ justifyContent: 'center', flexDirection: 'column' }}
              >
                <Box mt={10} display="flex">
                  <Typography variant="h1" style={{ fontWeight: '700' }}>
                    A Heading for the
                    <br />
                    {' '}
                    Landing Page
                  </Typography>
                </Box>
                <Box mt={3} display="flex">
                  <Typography variant="h6">
                    A brief introduction about platform , what is the purpose of
                    thisand what our
                    <br />
                    {' '}
                    platform representstwo to three
                    lines will work
                  </Typography>
                </Box>
                <Box mt={3} display="flex">
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
                    Get Started
                    {' '}
                    <ArrowForwardOutlinedIcon />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className={classes.image}>
              <img
                alt="codeforcauseimg"
                src="/static/home/serviceGirl.png"
                style={{ width: '55vh' }}
              />
            </div>
          </Grid>
        </Grid>

        <Grid container xs={12} sm={12}>
          <Grid item className={classes.footer}>
            <img
              alt="codeforcauseimg"
              src="/static/home/Footer.svg"
              style={{
                width: '100vw'
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

LandingPage.propTypes = {
  className: PropTypes.string
};

export default LandingPage;
