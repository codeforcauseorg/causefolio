import {
  Box,
  Button,
  Grid,
  makeStyles
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import BookmarkedEvents from 'src/components/BookmarkedEvents';
import UserNewEvents from 'src/components/UserNewEvents';
import UserUpcomingEvents from 'src/components/UserUpcomingEvents';
import UserEventStats from 'src/components/UserEventStats';
import SearchBar from 'src/components/search';
import DrawerLayout from 'src/layouts/DrawerLayout';

const useStyles = makeStyles(() => ({
  createEvent: {
    color: 'white',
    backgroundColor: '#291757',
    borderRadius: '20px',
    fontWeight: '700',
    marginBottom: 16,
    padding: '16px 48px',
    '&:hover': {
      backgroundColor: '#101c4c'
    }
  }
}));

export default function EventDefaultPage() {
  const classes = useStyles();
  const [eventsConducted, setEventsConducted] = useState(0);
  const [eventsAttended, setEventsAttended] = useState(0);

  useEffect(() => {
    setEventsConducted(2);
    setEventsAttended(2);
  }, []);

  return (
    <DrawerLayout>
      <Grid container>
        <Grid justify="center" md={8} sm={12} xs={12}>
          <BookmarkedEvents />
          <SearchBar />
          <UserNewEvents />
          <Box textAlign="center">
            <Button className={classes.createEvent}>Create New Event</Button>
          </Box>
        </Grid>
        <Grid md={4} sm={12} xs={12}>
          <UserUpcomingEvents />
          <UserEventStats conducted={eventsConducted} attended={eventsAttended} />
        </Grid>
      </Grid>
    </DrawerLayout>
  );
}
