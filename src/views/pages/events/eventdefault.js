import { Box } from '@material-ui/core';
import React from 'react';
import BookmarkedEvents from 'src/components/BookmarkedEvents';
import NewEvents from 'src/components/NewEvents';
import Publications from 'src/components/Publications';
import SearchBar from 'src/components/search';
import DrawerLayout from 'src/layouts/DrawerLayout';

export default function EventDefaultPage() {
  return (
    <DrawerLayout>
      <Box display="flex">
        <Box flexGrow={1}>
          <BookmarkedEvents />
          <SearchBar />
          <BookmarkedEvents />
        </Box>
        <Box maxWidth="28em" minWidth="24em">
          <NewEvents />
          <Publications />
        </Box>
      </Box>
    </DrawerLayout>
  );
}
