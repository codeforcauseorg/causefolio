import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import DrawerLayout from 'src/layouts/DrawerLayout';
import Badge from './Badge';
import ProfileInfo from './ProfileInfo';
import ProfilePublications from './ProfilePublications';
import ProfileEvents from './ProfileEvents';
import CommitChart from './CommitChart';
import ProjectsCarousel from './ProjectsCarousel';

import firebase from 'src/firebase';
import { useSelector } from 'react-redux';

export default function Profile() {

  const user = useSelector(state => state.account.user);
  const [myProfile, setMyProfile] = useState(null)
  useEffect(() => {
    if (user !== undefined) {
      
    
    let userId = user.uid
    let firebaseDB = firebase.database().ref('/UserInfo/'+userId);

    firebaseDB.on('value',(response) => {
      if (response.val() !== null) {
        let data = response.val()
        console.log('profile', data);
        setMyProfile(data)
        // console.log('pp',myProfile);
      }
    })
  }
  }, [user])
  return (
    <DrawerLayout>
      <Grid>
        { myProfile !== null ? <ProfileInfo myProfile={myProfile} /> : <>No Data</>}
      </Grid>
      <Grid container style={{ marginBottom: '21px' }}>
        <Grid item sm={4} style={{ marginRight: '21px' }}>
          <CommitChart />
        </Grid>
        <Grid item sm>
          <Badge />
        </Grid>
      </Grid>
      <Grid container>
        <Grid sm>
          <ProfileEvents />
        </Grid>
        <Grid sm>
          <ProfilePublications />
        </Grid>
      </Grid>
      <ProjectsCarousel />
    </DrawerLayout>
  );
}
