import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { firebase } from 'src/services/authService';
import { useHistory } from 'react-router';

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
  eventHeading: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical'
  },
  checkOut: {
    borderRadius: '16px',
    color: '#291757',
    fontSize: '10px',
    margin: '0 auto',
    padding: '6px',
    fontWeight: '800'
  }
}));

function UserNewEvents() {
  const classes = useStyles();
  const user = useSelector((state) => state.account.user);
  const history = useHistory();
  const [newEvents, setNewEvents] = useState([]);
  const [eventID, setEventID] = useState([]);

  useEffect(() => {
    const fetchLatestEvents = async () => {
      if (user === undefined) return;
      const db = firebase.firestore();
      // Fetch Latest Events
      const newEventCollection = await db
        .collection('events')
        .orderBy('createdOn')
        .limit(10)
        .get();

      setNewEvents(
        newEventCollection.docs.map((doc) => {
          setEventID((prevState) => [...prevState, doc.id]);
          return doc.data();
        })
      );
    };
    fetchLatestEvents();
  }, [user, history]);

  const handleClick = (idx) => {
    if (eventID.length <= 0) return;
    history.push(`/events/${eventID[idx]}`);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item className={classes.topContainer}>
          <Typography variant="h1" className={classes.topText}>
            New Events
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
        {newEvents?.map((event, idx) => (
          <Grid key={idx} className={classes.bmText}>
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
              <Typography
                className={classes.eventHeading}
                variant="h5"
                style={{ marginBottom: '14px' }}
              >
                {event?.eventName}
              </Typography>
              <div style={{ display: 'inline-block', margin: '0 auto' }}>
                <Typography variant="subtitle1" style={{ fontSize: '10px' }}>
                  {event?.date}
                </Typography>
                <Typography variant="subtitle1" style={{ fontSize: '10px' }}>
                  {event?.time}
                </Typography>
              </div>
              {eventID.length > 0 ? (
                <Button
                  style={
                    event?.eventName.length <= 11
                      ? { marginTop: '21px', backgroundColor: 'white' }
                      : { marginTop: '1px', backgroundColor: 'white' }
                  }
                  className={classes.checkOut}
                  onClick={() => handleClick(idx)}
                >
                  CHECK OUT
                </Button>
              ) : (
                ''
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default UserNewEvents;
