import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    color: '#291757',
    fontFamily: 'Montserrat',
    marginBottom: '21px',
    marginTop: '21px'
  },
  topContainer: {
    width: '150%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px'
  },
  topText: {
    fontWeight: 'bold',
    fontSize: '24px',
    letterSpacing: '0.44px'
  },
  bmEvents: {
    display: 'flex',
    fontSize: '17px',
    marginBottom: '10px',
    letterSpacing: '0.44px'
  },
  bmText: {
    display: 'flex',
    fontWeight: 'bold',
    alignItems: 'center',
    wordWrap: 'break-word',
    color: 'white',
    textAlign: 'center',
    backgroundImage: `url(${'./static/images/bmevents.png'})`,
    backgroundRepeat: 'no-repeat',
    borderRadius: '20px',
    width: '114px',
    height: '147px',
    marginRight: '16px',
    marginBottom: '16px'
  },
  checkOut: {
    borderRadius: '16px',
    marginTop: '21px',
    color: '#291757',
    fontSize: '10px',
    margin: '0 auto',
    padding: '6px',
    fontWeight: '800'
  }
}));

function BookmarkedEvents() {
  const classes = useStyles();
  useEffect(() => {}, []);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item className={classes.topContainer}>
          <Typography variant="h1" className={classes.topText}>
            Bookmarked Events
          </Typography>
          <Typography>
            <Button
              style={{
                backgroundColor: 'white',
                fontWeight: 'bold',
                padding: '0px 6px'
              }}
            >
              SEE MORE
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.bmEvents}>
        {/* sample bookmarked events */}
        <Grid className={classes.bmText}>
          <Grid
            container
            style={{
              backgroundColor: '#291757CC',
              width: '114px',
              height: '147px',
              borderRadius: '20px'
            }}
            align="center"
            justify="center"
            direction="column"
          >
            <Typography variant="h5" style={{ marginBottom: '14px' }}>
              Event-1
            </Typography>
            <div style={{ display: 'inline-block', margin: '0 auto' }}>
              <Typography variant="subtitle1" style={{ fontSize: '10px' }}>
                29TH MARCH
              </Typography>
              <Typography variant="subtitle1" style={{ fontSize: '10px' }}>
                6:00 PM
              </Typography>
            </div>
            <Button
              style={{ backgroundColor: 'white' }}
              className={classes.checkOut}
            >
              CHECK OUT
            </Button>
          </Grid>
        </Grid>
        <Grid className={classes.bmText}>
          <Grid
            container
            style={{
              backgroundColor: '#291757CC',
              width: '114px',
              height: '147px',
              borderRadius: '20px'
            }}
            align="center"
            justify="center"
            direction="column"
          >
            <Typography variant="h5" style={{ marginBottom: '14px' }}>
              Event-2
            </Typography>
            <div style={{ display: 'inline-block', margin: '0 auto' }}>
              <Typography variant="subtitle1" style={{ fontSize: '10px' }}>
                29TH MARCH
              </Typography>
              <Typography variant="subtitle1" style={{ fontSize: '10px' }}>
                6:00 PM
              </Typography>
            </div>
            <Button
              style={{ backgroundColor: 'white' }}
              className={classes.checkOut}
            >
              CHECK OUT
            </Button>
          </Grid>
        </Grid>
        <Grid className={classes.bmText}>
          <Grid
            container
            style={{
              backgroundColor: '#291757CC',
              width: '114px',
              height: '147px',
              borderRadius: '20px'
            }}
            align="center"
            justify="center"
            direction="column"
          >
            <Typography variant="h5" style={{ marginBottom: '14px' }}>
              Event-3
            </Typography>
            <div style={{ display: 'inline-block', margin: '0 auto' }}>
              <Typography variant="subtitle1" style={{ fontSize: '10px' }}>
                29TH MARCH
              </Typography>
              <Typography variant="subtitle1" style={{ fontSize: '10px' }}>
                6:00 PM
              </Typography>
            </div>
            <Button
              style={{ backgroundColor: 'white' }}
              className={classes.checkOut}
            >
              CHECK OUT
            </Button>
          </Grid>
        </Grid>
        <Grid className={classes.bmText}>
          <Grid
            container
            style={{
              backgroundColor: '#291757CC',
              width: '114px',
              height: '147px',
              borderRadius: '20px'
            }}
            align="center"
            justify="center"
            direction="column"
          >
            <Typography variant="h5" style={{ marginBottom: '14px' }}>
              Event-4
            </Typography>
            <div style={{ display: 'inline-block', margin: '0 auto' }}>
              <Typography variant="subtitle1" style={{ fontSize: '10px' }}>
                29TH MARCH
              </Typography>
              <Typography variant="subtitle1" style={{ fontSize: '10px' }}>
                6:00 PM
              </Typography>
            </div>
            <Button
              style={{ backgroundColor: 'white' }}
              className={classes.checkOut}
            >
              CHECK OUT
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default BookmarkedEvents;
