import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import DrawerLayout from 'src/layouts/DrawerLayout';
import Badge from './Badge';
import ProfileInfo from './ProfileInfo';
import ProfilePublications from './ProfilePublications';
import ProfileEvents from './ProfileEvents';
import CommitChart from './CommitChart';
import ProjectsCarousel from './ProjectsCarousel';

import { firebase } from 'src/services/authService';
import { useSelector } from 'react-redux';

export default function Profile() {
  const user = useSelector(state => state.account.user);
  const [myProfile, setMyProfile] = useState(null);

  useEffect(() => {
    if (user !== undefined) {
      let userId = user.uid;
      let db = firebase.firestore();

      let docRef = db.collection('users').doc(userId);

      docRef
        .get()
        .then(doc => {
          if (doc.exists) {
            let data = doc.data();
            setMyProfile(data);
          } else {
            console.log('No such document!');
          }
        })
        .catch(error => {
          console.log('Error getting document:', error);
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
