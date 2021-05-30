import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
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
    backgroundColor: '#FFF',
    paddingTop: 50,
    paddingBottom: 60,
    height:'90vh',
    color: '#000',
    
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      paddingTop: 40,
      paddingBottom: 60
    }
  },
  extraPadding: {
    [theme.breakpoints.down('md')]: {
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
      <Container
        width="lg"
        style={{
          paddingTop: '20px',
          position: 'relative'
        }}
      >
        <Grid container spacing={5} style={{ alignItems: 'space-around' }}>
          <Grid itme xs={12} sm={5} style={{ height: '100%' }}>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
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
            </Box>
          </Grid>
        </Grid>
      </Container>
      <div
        style={{
          marginTop:"30vh",
          padding: 0,
          minHeight: '80vh',
          objectFit: 'cover'
        }}
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

Test.propTypes = {
  className: PropTypes.string
};

export default Test;
