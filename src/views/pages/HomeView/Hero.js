import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#FFF',
    paddingTop: 50,
    paddingBottom: 60,
    color: '#000',
    height: '92vh',
    overflow: 'hidden',
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
        style={{
          paddingTop: '20px',
          position: 'relative'
        }}
      >
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
                  fontWeight: 700,
                  fontSize: '2rem'
                }}
              >
                A Heading for the landing page
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
                  A brief introduction about platform , what is
                  <br />
                  the purpose of this and what our platform
                  <br /> represents . two to three lines will work
                  <br />
                </Typography>
              </Box>
              <Box mt={2} mb={3}>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant="h1" color="secondary"></Typography>
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
                        Get Started <ArrowForwardOutlinedIcon />
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={14}
            md={7}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Box position="relative">
              {/* <div className={classes.shape}>
                <img alt="Shapes" src="/static/home/shapes.svg" />
              </div> */}

              <div className={classes.image}>
                <img
                  alt="codeforcauseimg"
                  src="/static/home/serviceGirl.png"
                  style={{
                    width: '100%'
                  }}
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <div
        style={{ margin: 0, padding: 0, height: '50vh', objectFit: 'cover' }}
      >
        <img
          alt="codeforcauseimg"
          src="/static/home/Footer.svg"
          style={{
            width: '100%'
          }}
        />
      </div>
    </div>
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
