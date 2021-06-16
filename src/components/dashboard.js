import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import DrawerLayout from 'src/layouts/DrawerLayout';
import BookmarkedEvents from './BookmarkedEvents';
import Calendar from './Calendar';
import NewEvents from './NewEvents';
import Publications from './Publications';
import Stats from './Stats';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <DrawerLayout>
      <main className={classes.content}>
        <Box display="flex">
          <Box flexGrow={1}>
            <Calendar />
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
