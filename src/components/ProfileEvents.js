import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Card, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    background: '#CCD2E3',
    borderRadius: '20px',
    padding: '19px',
    color: '#291757',
    fontFamily: 'Montserrat',
    marginBottom: '21px'
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '21px'
  },
  topText: {
    fontWeight: 'bold',
    fontSize: '24px',
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
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: '10px',
    wordWrap: 'break-word'
  },
  eventInfo: {
    display: 'block',
    fontSize: '10px',
    textAlign: 'left',
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
  eventButton: {
    display: 'flex',
    textAlign: 'left',
    fontSize: '12px',
    background: '#291755',
    color: 'white',
    borderRadius: '5px',
    fontWeight: '800',
    padding: '1px 8px',
    letterSpacing: '0.44px'
  }
}));

function ProfileEvents({ userEvents }) {
  const classes = useStyles();
  useEffect(() => {}, []);

  const handleClick = link => {
    if (link.length <= 0) return;
    const win = window.open(`${link}`, '_blank');
    win.focus();
  };

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item className={classes.topContainer}>
          <Typography variant="h1" className={classes.topText}>
            Events
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.event}>
        {userEvents?.map((event, idx) => (
          <Grid key={idx} className={classes.eventText}>
            <img
              style={{ borderRadius: '8px', width: '74px', height: '71px' }}
              src={event.bannerImg}
              alt="event"
            />
            <Grid className={classes.eventInfo}>
              <Typography variant="h5">{event.eventName}</Typography>
              <Typography variant="subtitle2" className={classes.eventDate}>
                {event.date}
                <br />
                {event.totalAttendees} RSVPs
              </Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: '#291755' }}
                className={classes.eventButton}
                onClick={() => handleClick(`${event.eventLink}`)}
              >
                <img
                  src=".././static/images/icons/event_calendar_w.svg"
                  alt="rsvp"
                  height="12px"
                  style={{ marginRight: '6px' }}
                />
                RSVP
              </Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}

export default ProfileEvents;
