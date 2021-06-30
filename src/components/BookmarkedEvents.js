import React, { useEffect, useState } from 'react';
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
  const user = useSelector(state => state.account.user);
  const [bookmarkEvent, setBookmarkEvent] = useState([]);
  const [eventID, setEventID] = useState(null);
  const history = useHistory();

  const readIds = async (collection, ids) => {
    setEventID(ids);
    const reads = ids.map(id => collection.doc(id).get());
    const result = await Promise.all(reads);
    return result.map(r => r.data());
  };

  useEffect(() => {
    const fetchBookmarkEvents = async () => {
      if (user === undefined || user === null) return;

      const userID = user.uid;
      const db = firebase.firestore();
      const userRef = await db.collection('users').doc(userID);
      userRef.get().then(doc => {
        if (doc.exists) {
          let data = doc.data();
          readIds(db.collection('events'), data.bookmarked).then(result =>
            setBookmarkEvent(result)
          );
        }
      });
    };
    fetchBookmarkEvents();
  }, [user]);

  const handleClick = idx => {
    if (eventID.length <= 0) return;
    history.push(`/events/${eventID[idx]}`);
  };

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
        {bookmarkEvent.length > 0 &&
          bookmarkEvent.map((event, idx) => (
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
                  {event.eventName}
                </Typography>
                <div style={{ display: 'inline-block', margin: '0 auto' }}>
                  <Typography variant="subtitle1" style={{ fontSize: '10px' }}>
                    {event.date}
                  </Typography>
                  <Typography variant="subtitle1" style={{ fontSize: '10px' }}>
                    {event.time}
                  </Typography>
                </div>
                <Button
                  className={classes.checkOut}
                  onClick={() => handleClick(idx)}
                  style={
                    event?.eventName.length <= 11
                      ? { marginTop: '21px', backgroundColor: 'white' }
                      : { marginTop: '1px', backgroundColor: 'white' }
                  }
                >
                  CHECK OUT
                </Button>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default BookmarkedEvents;
