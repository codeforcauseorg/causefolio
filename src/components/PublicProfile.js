import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { makeStyles } from '@material-ui/styles';
import { firebase } from 'src/services/authService';
import Grid from '@material-ui/core/Grid';
import ProfileInfo from './ProfileInfo';
import CommitChart from './CommitChart';
import ProfileEvents from './ProfileEvents';
import ProjectsCarousel from './ProjectsCarousel';
import Loader from './Loader';
import Badge from './Badge';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#291757',
    fontFamily: 'Montserrat',
    padding: '0px 100px',
    [theme.breakpoints.down('md')]: {
      padding: 0
    }
  }
}));
const PublicProfile = () => {
  const classes = useStyles();
  const user = useSelector(state => state.account.user);
  const [myProfile, setMyProfile] = useState(null);
  const [userEvents, setUserEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profileType] = useState('public');
  const { userID } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (user === undefined || userID === undefined) return;
    const db = firebase.firestore();

    const userRef = db.collection('users').doc(userID);

    userRef
      .get()
      .then(doc => {
        if (doc.exists) {
          const data = doc.data();
          setMyProfile(data);
          setLoading(false);
        } else {
          history.push('/*');
          return;
        }
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });

    // For getting user's upcoming events
    db.collection('events')
      .where('createdBy', '==', `${userID}`)
      .limit(2)
      .get()
      .then(userEventCollection => {
        setUserEvents(userEventCollection.docs.map(doc => doc.data()));
      });
  }, [user, userID, history]);

  return (
    <>
      {!loading ? (
        <Grid className={classes.root}>
          <Grid>
            {myProfile !== null ? (
              <ProfileInfo myProfile={myProfile} profileType={profileType} />
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
              {userEvents.length > 0 && (
                <ProfileEvents userEvents={userEvents} />
              )}
            </Grid>
            <Grid xs={12} sm={6}>
              {/* <ProfilePublications /> */}
            </Grid>
          </Grid>
          <ProjectsCarousel />
        </Grid>
      ) : (
        <Loader></Loader>
      )}
    </>
  );
};

export default PublicProfile;
