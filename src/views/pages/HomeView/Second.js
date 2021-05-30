import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#291755',
    paddingTop: 80,
    paddingBottom: 60,
    color: '#FFFFFF',
    height: '90vh',
    [theme.breakpoints.down('md')]: {
      paddingTop: 40,
      paddingBottom: 60
    }
  },
  extraPadding: {
    // [theme.breakpoints.down('md')]: {
    //   padding: '0 30px'
    // },
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

function Second({ className, ...rest }) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container
        maxWidth="lg"
        style={{ paddingTop: '40px', position: 'relative' }}
      >
        <img
          src="/static/home/blob.svg"
          alt="blob"
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-20%'
          }}
        />
        <Grid container spacing={0}>
          <Grid item xs={10} md={5} style={{ zIndex: '20' }}>
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
              <Box mt={2}>
                <Typography variant="body1">
                  An initiative to contribute to Open Source
                  <br />
                  community by providing training, guidance
                  <br /> and awareness about the possibilities in the
                  <br />
                  software field to students &amp; professionals.
                </Typography>
              </Box>
              <Box mt={2}>
                <Grid container spacing={3}>
                  <Grid item>
                    <Typography variant="h1" color="secondary"></Typography>
                    <Box
                      mt={2}
                      display="flex"
                      justifyContent="center"
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
                        Check out
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={14} md={7}>
            <Box position="relative">
              {/* <div className={classes.shape}>
                <img alt="Shapes" src="/static/home/shapes.svg" />
              </div> */}

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
        </Grid>
      </Container>
    </div>
  );
}

Second.propTypes = {
  className: PropTypes.string
};

export default Second;
