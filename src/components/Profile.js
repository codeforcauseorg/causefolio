import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import DrawerLayout from 'src/layouts/DrawerLayout';
import { firebase } from 'src/services/authService';
import { useSelector } from 'react-redux';
import Badge from './Badge';
import ProfileInfo from './ProfileInfo';
import ProfilePublications from './ProfilePublications';
import ProfileEvents from './ProfileEvents';
import CommitChart from './CommitChart';
import ProjectsCarousel from './ProjectsCarousel';

export default function Profile() {
  const user = useSelector((state) => state.account.user);
  const [myProfile, setMyProfile] = useState(null);

  useEffect(() => {
    if (user !== undefined && user !== null) {
      const userId = user.uid;
      const db = firebase.firestore();

      const docRef = db.collection('users').doc(userId);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            setMyProfile(data);
          }
        });
    }
  }, [user]);

  return (
    <DrawerLayout>
      <Grid>
        {myProfile !== null ? (
          <ProfileInfo myProfile={myProfile} />
        ) : (
          <>No Data</>
        )}
      </Grid>
      <Grid container spacing={2} style={{ marginBottom: '21px' }}>
        <Grid item xs={12} sm={12} md={5} style={{ marginBottom: '21px' }}>
          <CommitChart />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <Badge />
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} sm={6}>
          <ProfileEvents />
        </Grid>
        <Grid xs={12} sm={6}>
          <ProfilePublications />
        </Grid>
      </Grid>
      <ProjectsCarousel />
    </DrawerLayout>
  );
}
