import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import { Box, Grid, Typography, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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
    '& > img': {
      maxWidth: '100%',
      height: 'auto',
      backfaceVisibility: 'hidden'
      // boxShadow: theme.shadows[16]
      // transform: 'rotateY(-35deg) rotateX(15deg)'
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

function Test({ className, ...rest }) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      
      <Grid
        container
        spacing={5}
        style={{
          display: 'flex',
          height: '70vh',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        <Grid item xs={10} sm={5} style={{ height: '80%' }}>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'column',
              height: '100%',
              width: '100%'
            }}
          >
            <Box mt={10} style={{ display: 'flex' }}>
              <Typography variant="h1" style={{ fontWeight: '700' }}>
                A Heading for the<br></br> Landing Page
              </Typography>
            </Box>
            <Box mt={2} style={{ display: 'flex' }}>
              <Typography variant="body1">
                A brief introduction about platform , what is the purpose of
                this and what our platform represents two to three lines will
                work
              </Typography>
            </Box>
            <Box
              mt={1}
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
            >
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
                Get Started <ArrowForwardOutlinedIcon />
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} sm={5}>
          <div className={classes.image}>
            <img
              alt="codeforcauseimg"
              src="/static/home/serviceGirl.png"
              style={{ height: '50vh' }}
            />
          </div>
        </Grid>
      </Grid>

      <Grid container xs={12} sm={12}>
        <Grid
          item
          style={{
            padding: 0,
            objectFit: 'cover',
            position: 'fixed',
            left: 0,
            bottom: 0,
            height: '30vh'
          }}
        >
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
  );
}

Test.propTypes = {
  className: PropTypes.string
};

export default Test;
