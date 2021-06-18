import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DrawerLayout from 'src/layouts/DrawerLayout';
import { firebase } from 'src/services/authService';
import BookmarkedEvents from './BookmarkedEvents';
import Calendar from './Calendar';
import NewEvents from './NewEvents';
import Publications from './Publications';
import Stats from './Stats';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const user = useSelector((state) => state.account.user);
  const [userEvents, setUserEvents] = useState([]);
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let date = new Date().getDate();
  console.log(`${year}-0${month}-${date}`)
  useEffect(() => {
    const fetchUserEvents = async () => {
      if (user === undefined || user === null) return;
      console.log('Hiiil');
      const userId = user.uid;
      const db = firebase.firestore();
      const userEventCollection = await db.collection('events').where('createdBy', '==', `${userId}`).get()

      setUserEvents(userEventCollection.docs.map((doc) => doc.data()));
    };
    // ${year}-0${month}-${date}
    fetchUserEvents();
  }, [user]);

  return (
    <DrawerLayout>
      <main className={classes.content}>
        <Box display="flex">
          <Box flexGrow={1}>
            {userEvents.length > 0 ? <Calendar /> : ''}
            <Stats />
            <BookmarkedEvents />
          </Box>
          <Box maxWidth="28em" minWidth="24em">
            <NewEvents />
            <Publications />
          </Box>
        </Box>
      </main>
    </DrawerLayout>
  );
}
