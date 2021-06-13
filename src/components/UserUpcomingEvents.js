import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Card, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    background: '#CCD2E3',
    borderRadius: '20px',
    padding: '19px',
    color: '#291757',
    fontFamily: 'Montserrat',
    marginBottom: '21px',
    marginLeft: '21px'
  },
  topContainer: {
    display: 'flex',
    marginBottom: '21px'
  },
  topText: {
    fontWeight: 'bold',
    fontSize: '20px',
    letterSpacing: '0.44px'
  },
  event: {
    display: 'block',
    fontSize: '17px',
    marginBottom: '10px'
  },
  eventText: {
    display: 'flex',
    fontWeight: 'bold',
    alignItems: 'center',
    marginBottom: '10px',
    wordWrap: 'break-word'
  },
  eventInfo: {
    display: 'block',
    fontSize: '10px',
    marginLeft: '10px',
    letterSpacing: '0.44px'
  },
  eventDate: {
    display: 'flex',
    textAlign: 'left',
    fontSize: '10px',
    marginRight: '12px',
    marginBottom: '5px'
  },
  button: {
    display: 'flex',
    textAlign: 'left',
    fontSize: '12px',
    background: 'white',
    borderRadius: '5px',
    fontWeight: '800',
    padding: '1px 8px',
    letterSpacing: '0.44px'
  }
}));

function UserUpcomingEvents() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item className={classes.topContainer}>
          <Typography variant="h1" className={classes.topText}>
            Your Upcoming Events
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.event}>
        <Grid className={classes.eventText}>
          <img
            style={{ borderRadius: '8px' }}
            src=".././static/images/icons/event.svg"
            alt="event"
          />
          <Grid className={classes.eventInfo}>
            <Typography variant="h5">Intro to Open Source</Typography>
            <div style={{ display: 'flex' }}>
              <Typography variant="subtitle2" className={classes.eventDate}>
                16 Jan 2021 (2 days left)
              </Typography>
            </div>
            <Button
              variant="contained"
              style={{ backgroundColor: 'white' }}
              className={classes.button}
            >
              30 Registrations
            </Button>
          </Grid>
        </Grid>
        <Grid className={classes.eventText}>
          <img
            style={{ borderRadius: '8px' }}
            src=".././static/images/icons/event.svg"
            alt="event"
          />
          <Grid className={classes.eventInfo}>
            <Typography variant="h5">Intro to Open Source</Typography>
            <div style={{ display: 'flex' }}>
              <Typography variant="subtitle2" className={classes.eventDate}>
                16 Jan 2021 (2 days left)
              </Typography>
            </div>
            <Button
              variant="contained"
              style={{ backgroundColor: 'white' }}
              className={classes.button}
            >
              300 Registrations
            </Button>
          </Grid>
        </Grid>
        <Grid className={classes.eventText}>
          <img
            style={{ borderRadius: '8px' }}
            src=".././static/images/icons/event.svg"
            alt="event"
          />
          <Grid className={classes.eventInfo}>
            <Typography variant="h5">Intro to Open Source</Typography>
            <div style={{ display: 'flex' }}>
              <Typography variant="subtitle2" className={classes.eventDate}>
                16 Jan 2021 (2 days left)
              </Typography>
            </div>
            <Button
              variant="contained"
              style={{ backgroundColor: 'white' }}
              className={classes.button}
            >
              300 Registrations
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export default UserUpcomingEvents;
