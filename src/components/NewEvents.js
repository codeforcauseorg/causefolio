import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Card, Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { firebase } from 'src/services/authService';

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
  rsvp: {
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

function NewEvents() {
  const classes = useStyles();
  const user = useSelector(state => state.account.user);
  const [attendingEvent, setAttendingEvent] = useState([]);

  const readIds = async (collection, ids) => {
    const reads = ids.map(id => collection.doc(id).get());
    const result = await Promise.all(reads);
    return result.map(r => r.data());
  };

  useEffect(() => {
    const fetchAttendingEvents = async () => {
      if (user === undefined || user === null) return;

      const userID = user.uid;
      const db = firebase.firestore();
      const userRef = await db.collection('users').doc(userID);
      userRef.get().then(doc => {
        if (doc.exists) {
          let data = doc.data();
          readIds(db.collection('events'), data.attending).then(result =>
            setAttendingEvent(result)
          );
        }
      });
    };
    fetchAttendingEvents();
  }, [user]);

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
            Attending Events
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.event}>
        {attendingEvent.length > 0 &&
          attendingEvent.map((event, idx) => (
            <Grid key={idx} className={classes.eventText}>
              <img
                style={{ borderRadius: '8px', width: '74px', height: '71px' }}
                src={event.bannerImg}
                alt="event"
              />
              <Grid className={classes.eventInfo}>
                <Typography variant="h5">{event.eventName}</Typography>
                <div style={{ display: 'flex' }}>
                  <Typography variant="subtitle2" className={classes.eventDate}>
                    {event.date}
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  style={{ backgroundColor: 'white' }}
                  className={classes.rsvp}
                  onClick={() => handleClick(`${event.eventLink}`)}
                >
                  <img
                    src=".././static/images/icons/event_calendar.svg"
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

export default NewEvents;
