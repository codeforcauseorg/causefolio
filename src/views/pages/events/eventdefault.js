import { Box, Button, Grid, makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import BookmarkedEvents from 'src/components/BookmarkedEvents';
import UserNewEvents from 'src/components/UserNewEvents';
import UserUpcomingEvents from 'src/components/UserUpcomingEvents';
import UserEventStats from 'src/components/UserEventStats';
// import SearchBar from 'src/components/search';
import DrawerLayout from 'src/layouts/DrawerLayout';
import { useHistory } from 'react-router-dom';
import { firebase } from 'src/services/authService';
import { useSelector } from 'react-redux';
import Loader from 'src/components/Loader';

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: '120px',
    marginTop: '20px',
    width: '280px',
    height: '55px',
    borderRadius: '20px',
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: '18px',
    background: '#291757',
    [theme.breakpoints.down('sm')]: {
      margin: '0 0 20px 0'
    }
  }
}));

export default function EventDefaultPage() {
  const classes = useStyles();
  const [bookmarkEvent] = useState(null);
  const history = useHistory();
  const handleClick = () => {
    history.push('/createEvent');
  };
  const [eventsAttended, setEventsAttended] = useState(0);
  const [loading, setLoading] = useState(true);

  const [userEvents, setUserEvents] = useState([]);
  const user = useSelector(state => state.account.user);

  useEffect(() => {
    const fetchUserEvents = () => {
      if (user === undefined || user === null) return;

      const userId = user.uid;
      const db = firebase.firestore();

      // For getting the user's total attending events
      db.collection('users')
        .doc(userId)
        .get()
        .then(doc => {
          if (doc.exists) {
            let data = doc.data();
            setEventsAttended(data.attending.length);
          }
        });

      // For getting user's upcoming events
      db.collection('events')
        .where('createdBy', '==', `${userId}`)
        .get()
        .then(userEventCollection => {
          setUserEvents(
            userEventCollection.docs.map(doc => doc.data()),
            setLoading(false)
          );
        });
    };
    fetchUserEvents();
  }, [user]);

  return (
    <DrawerLayout>
      {!loading ? (
        <>
          <Grid container>
            <Grid justify="center" md={8} sm={12} xs={12}>
              {bookmarkEvent !== null && <BookmarkedEvents />}
              {/* <SearchBar /> */}
              <UserNewEvents />
              <Box textAlign="center">
                <Button className={classes.button} onClick={handleClick}>
                  Create New Event
                </Button>
              </Box>
            </Grid>
            <Grid md={4} sm={12} xs={12}>
              {userEvents.length > 0 && (
                <UserUpcomingEvents userEvents={userEvents} />
              )}
              <UserEventStats
                conducted={userEvents.length}
                attended={eventsAttended}
              />
            </Grid>
          </Grid>
        </>
      ) : (
        <Loader></Loader>
      )}
    </DrawerLayout>
  );
}
