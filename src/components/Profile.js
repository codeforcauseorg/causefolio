import Grid from '@material-ui/core/Grid';
import React from 'react';
import DrawerLayout from 'src/layouts/DrawerLayout';
import Badge from './Badge';
import ProfileInfo from './ProfileInfo';
import ProfilePublications from './ProfilePublications';
import ProfileEvents from './ProfileEvents';
import CommitChart from './CommitChart';

export default function Profile() {
  return (
    <DrawerLayout>
      <Box display="flex">
        <ProfileInfo />
      </Box>
      <Box display="flex" style={{ marginBottom: '21px' }}>
        <Box flexGrow={1}>
          <Badge />
        </Box>
      </Box>
      <Box display="flex" style={{ marginBottom: '21px' }}>
        <Box flexGrow={1}>
          <ProfileEvents />
        </Box>
        <Box maxWidth="26em" minWidth="24em">
          <ProfilePublications />
        </Box>
      </Box>
    </DrawerLayout>
  );
}
