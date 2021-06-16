import {
  Avatar, Box, Button, Grid, Typography
} from '@material-ui/core';
// import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { makeStyles } from '@material-ui/styles';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import NewEvents from 'src/components/NewEvents';
import DrawerLayout from 'src/layouts/DrawerLayout';
import { firebase } from 'src/services/authService';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#291757',
    fontFamily: 'Montserrat',
    marginBottom: '21px',
    minWidth: '0px'
  },
  banner: {
    width: '100%',
    height: '201px',
    borderRadius: '20px'
  },
  topContainer: {
    width: '150%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px'
  },
  topText: {
    fontWeight: 'normal',
    fontSize: '18px',
    letterSpacing: '0.44px'
  },
  intro: {
    display: 'flex',
    alignItems: 'baseline',
    width: '100%',
    justifyContent: 'space-between'
  },
  introduction: {
    color: 'black',
    fontSize: '32px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '26px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '22px',
      marginBottom: '10px'
    }
  },

  register: {
    width: '160px',
    backgroundColor: '#291757',
    borderRadius: '20px',
    marginTop: 12,
    marginBottom: 16
  },
  desc: {
    marginTop: '10px',
    marginBottom: '10px',
    color: '#576886',
    wordWrap: 'anywhere',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '10px'
    }
  },
  speaker: {
    marginTop: '5px',
    display: 'flex',
    background: '#576886',
    borderRadius: '20px',
    color: 'white',
    width: '200px',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px'
  },

  hidden: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}));

export default function IndividualEvent() {
  const classes = useStyles();
  const { eventID } = useParams();
  const history = useHistory();
  const [event, setEvent] = useState(null);
  const user = useSelector((state) => state.account.user);

  useEffect(() => {
    const fetchUserEvent = async () => {
      if (user === undefined || eventID === undefined) return;

      const db = firebase.firestore();
      const userEvent = await db.collection('events').doc(eventID).get();

      // 404
      if (!userEvent.exists) {
        history.push('/*');
      }

      setEvent(userEvent.data());
    };
    fetchUserEvent();
  }, [user, eventID, history]);

  return (
    <DrawerLayout>
      <Box display="flex">
        <Box flexGrow={1} minWidth="0">
          <div className={classes.root}>
            <img
              className={classes.banner}
              src={event?.bannerImg}
              alt="Banner"
              srcSet=""
            />
            <Grid container>
              <Grid item className={classes.topContainer}>
                <Typography className={classes.topText}>
                  {event?.date}
                  {' '}
                  |
                  {event?.time}
                </Typography>
              </Grid>
              <Grid item className={classes.intro}>
                <Typography className={classes.introduction} variant="h1">
                  {event?.eventName}
                </Typography>
                <Button href={event?.eventLink} className={classes.register}>
                  <Typography style={{ color: '#fff', fontWeight: 'bold' }}>
                    Register
                  </Typography>
                </Button>
              </Grid>

              <Grid container>
                <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </Grid>
              <Grid container className={classes.desc}>
                <Typography variant="h5">
                  Description of event : 2 to 3 lines:
                  <br />
                  {event?.description}
                </Typography>
              </Grid>

              <Grid container>
                <Typography variant="h2" fontWeight="bold">
                  Speaker
                </Typography>

                <Grid container>
                  <Grid item>
                    {event?.speakers.map((speaker) => (
                      <Typography
                        className={classes.speaker}
                        variant="p"
                        fontWeight="bold"
                      >
                        {speaker.speakerName}
                        <a href={speaker.speakerLinkedIn}>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.91002 0C2.87302 0 1.87849 0.421427 1.14522 1.17157C0.411948 1.92172 0 2.93913 0 4V16C0 17.0609 0.411948 18.0783 1.14522 18.8284C1.87849 19.5786 2.87302 20 3.91002 20H15.6401C16.6771 20 17.6716 19.5786 18.4049 18.8284C19.1382 18.0783 19.5501 17.0609 19.5501 16V4C19.5501 2.93913 19.1382 1.92172 18.4049 1.17157C17.6716 0.421427 16.6771 0 15.6401 0H3.91002ZM1.95501 4C1.95501 3.46957 2.16098 2.96086 2.52762 2.58579C2.89426 2.21071 3.39152 2 3.91002 2H15.6401C16.1586 2 16.6559 2.21071 17.0225 2.58579C17.3891 2.96086 17.5951 3.46957 17.5951 4V16C17.5951 16.5304 17.3891 17.0391 17.0225 17.4142C16.6559 17.7893 16.1586 18 15.6401 18H3.91002C3.39152 18 2.89426 17.7893 2.52762 17.4142C2.16098 17.0391 1.95501 16.5304 1.95501 16V4ZM6.84254 9C6.84254 8.73478 6.73955 8.48043 6.55623 8.29289C6.37292 8.10536 6.12428 8 5.86503 8C5.60578 8 5.35715 8.10536 5.17383 8.29289C4.99051 8.48043 4.88753 8.73478 4.88753 9V15C4.88753 15.2652 4.99051 15.5196 5.17383 15.7071C5.35715 15.8946 5.60578 16 5.86503 16C6.12428 16 6.37292 15.8946 6.55623 15.7071C6.73955 15.5196 6.84254 15.2652 6.84254 15V9ZM7.33129 5.5C7.33129 5.89782 7.17681 6.27936 6.90183 6.56066C6.62686 6.84196 6.25391 7 5.86503 7C5.47616 7 5.10321 6.84196 4.82823 6.56066C4.55326 6.27936 4.39877 5.89782 4.39877 5.5C4.39877 5.10218 4.55326 4.72064 4.82823 4.43934C5.10321 4.15804 5.47616 4 5.86503 4C6.25391 4 6.62686 4.15804 6.90183 4.43934C7.17681 4.72064 7.33129 5.10218 7.33129 5.5ZM9.77505 8C10.1074 8 10.4007 8.17 10.5766 8.428C11.0804 8.1471 11.645 7.99995 12.2188 8C14.3302 8 15.6401 9.926 15.6401 11.571V15C15.6401 15.2652 15.5371 15.5196 15.3538 15.7071C15.1705 15.8946 14.9218 16 14.6626 16C14.4033 16 14.1547 15.8946 13.9714 15.7071C13.7881 15.5196 13.6851 15.2652 13.6851 15V11.57C13.6851 10.802 13.0399 9.999 12.2188 9.999C11.7066 9.999 11.1406 10.284 10.7526 10.962V15C10.7526 15.2652 10.6496 15.5196 10.4663 15.7071C10.2829 15.8946 10.0343 16 9.77505 16C9.5158 16 9.26717 15.8946 9.08385 15.7071C8.90054 15.5196 8.79755 15.2652 8.79755 15V9C8.79755 8.73478 8.90054 8.48043 9.08385 8.29289C9.26717 8.10536 9.5158 8 9.77505 8Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Box>

        <div className={classes.hidden}>
          <Box maxWidth="28em" minWidth="24em">
            <NewEvents />
          </Box>
        </div>
      </Box>
    </DrawerLayout>
  );
}
