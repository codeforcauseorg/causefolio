import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DrawerLayout from 'src/layouts/DrawerLayout';
import { firebase } from 'src/services/authService';
import BookmarkedEvents from './BookmarkedEvents';
import Calendar from './Calendar';
import Loader from './Loader';
import NewEvents from './NewEvents';
// import Publications from './Publications';
import Stats from './Stats';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const user = useSelector(state => state.account.user);
  const [userEvents, setUserEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [attending, setAttending] = useState(0);

  useEffect(() => {
    const fetchUserEvents = async () => {
      if (user === undefined || user === null) return;
      const userId = user.uid;
      const db = firebase.firestore();
      const userEventCollection = await db
        .collection('events')
        .where('createdBy', '==', `${userId}`)
        .get();

      const userRef = await db.collection('users').doc(userId);
      userRef.get().then(doc => {
        if (doc.exists) {
          let data = doc.data();
          setAttending(data.attending.length);
        }
      });

      setUserEvents(
        userEventCollection.docs.map(doc => doc.data()),
        setLoading(false)
      );
    };
    fetchUserEvents();
  }, [user]);

  return (
    <DrawerLayout>
      {!loading ? (
        <main className={classes.content}>
          <Grid container>
            {/* <Box display="flex"> */}
            <Grid justify="center" md={8} sm={12} xs={12}>
              <Box flexGrow={1}>
                {userEvents.length > 0 && <Calendar userEvents={userEvents} />}
                <Stats conducted={userEvents.length} attending={attending} />
                <BookmarkedEvents />
              </Box>
            </Grid>
            <Grid md={4} sm={12} xs={12}>
              <Box>
                <NewEvents />
                {/* <Publications /> */}
              </Box>
            </Grid>
            {/* </Box> */}
          </Grid>
        </main>
      ) : (
        <Loader></Loader>
      )}
    </DrawerLayout>
  );
}
