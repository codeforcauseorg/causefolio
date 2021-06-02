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
      <Grid>
        <ProfileInfo />
      </Grid>
      <Grid
        container
        style={{ marginBottom: '21px' }}
      >
        <Grid item sm={4} style={{ marginRight: '21px' }}>
          <CommitChart />
        </Grid>
        <Grid item sm>
          <Badge />
        </Grid>
      </Grid>
      <Grid
        container
        style={{ marginBottom: '21px' }}
      >
        <Grid sm>
          <ProfileEvents />
        </Grid>
        <Grid sm>
          <ProfilePublications />
        </Grid>
      </Grid>
    </DrawerLayout>
  );
}
