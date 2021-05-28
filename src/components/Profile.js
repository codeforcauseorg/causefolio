import Box from '@material-ui/core/Box';
import React from 'react';
import DrawerLayout from 'src/layouts/DrawerLayout';
import Badge from './Badge';
import ProfileInfo from './ProfileInfo'
import ProfilePublications from './ProfilePublications';
import ProfileEvents from './ProfileEvents';

export default function Dashboard() {
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
