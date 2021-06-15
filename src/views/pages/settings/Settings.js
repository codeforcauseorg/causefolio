import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import DrawerLayout from 'src/layouts/DrawerLayout';
import {
  Button,
  Grid,
  Box,
  Typography,
  TextField,
  InputBase,
  Snackbar,
  CircularProgress
} from '@material-ui/core';
import { firebase } from 'src/services/authService';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '98%',
    background: '#FFFFFF',
    borderRadius: '20px',
    fontSize: '16px',
    [theme.breakpoints.down('xs')]: {
      height: '793px',
      width: '353px'
    }
  },
  topContainer: {
    width: '150%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px'
  },
  topText: {
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  text: {
    color: '#FFF',
    textAlign: 'center'
  },
  gallery: {
    width: '20%',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '71px'
    }
  },

  textField: {
    marginBottom: '16px',
    marginTop: '8px',
    backgroundColor: '#CCD2E3',
    borderRadius: '20px',
    borderBlockColor: 'green',
    borderColor: 'green',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#F2F7FF',
      borderRadius: '20px'
    }
  },
  desc: {
    marginBottom: '16px',
    marginTop: '8px',
    backgroundColor: '#CCD2E3',
    borderRadius: '20px',
    borderBlockColor: 'green',
    borderColor: 'green',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#F2F7FF',
      borderRadius: '20px'
    }
  },
  socialLinks: {
    marginBottom: '16px',
    marginTop: '8px',
    backgroundColor: '#CCD2E3',
    borderRadius: '20px',
    padding: '20px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#F2F7FF',
      borderRadius: '20px'
    }
  },
  social: {
    borderBottom: '1.3px solid #291757',
    marginBottom: '10px'
  },
  registerButton: {
    padding: '8px 16px',
    backgroundColor: '#291757',
    borderRadius: '20px',
    marginLeft: '16px',
    marginTop: 12,
    marginBottom: 16
  }
}));

function Settings() {
  const classes = useStyles();
  const user = useSelector((state) => state.account.user);

  const [disable, setDisable] = useState(true);
  const [myProfile, setMyProfile] = useState(null);
  const [snackbar, setSnackbar] = useState(false);

  //  For fetching the user's info
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
  }, [user, disable]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMyProfile({ ...myProfile, [name]: value });
  };

  const handleUpdate = () => {
    const db = firebase.firestore();
    const userId = user.uid;

    db.collection('users')
      .doc(userId)
      .set(myProfile);

    setDisable(true);
    setSnackbar(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar(false);
  };

  if (myProfile === null) {
    return (
      <DrawerLayout>
        <CircularProgress />
      </DrawerLayout>
    );
  }

  return (
    <DrawerLayout>
      <div className={classes.root}>
        <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Your Profile has been Updated!
            <span role="img" aria-label="partying face">
              🥳
            </span>
          </Alert>
        </Snackbar>
        <Grid container>
          <Box display="flex">
            <Box flexGrow={1}>
              <Grid container>
                <Grid item className={classes.topContainer}>
                  <Typography variant="h1" className={classes.topText}>
                    Update Your Profile
                  </Typography>
                </Grid>
              </Grid>
              <Grid container className={classes.event}>
                <Grid className={classes.eventText}>
                  <TextField
                    className={classes.textField}
                    fullWidth
                    disabled={disable}
                    variant="outlined"
                    placeholder="Your Full Name"
                    name="fullName"
                    value={myProfile.fullName}
                    onChange={handleInputChange}
                  />
                  <TextField
                    className={classes.textField}
                    fullWidth
                    disabled={disable}
                    variant="outlined"
                    placeholder="Your Role(Ex: Software Developer)"
                    name="role"
                    value={myProfile.role}
                    onChange={handleInputChange}
                  />
                  <TextField
                    className={classes.textField}
                    multiline
                    disabled={disable}
                    rows={5}
                    fullWidth
                    variant="outlined"
                    placeholder="A Little About You"
                    name="description"
                    value={myProfile.description}
                    onChange={handleInputChange}
                  />
                  {/* Social Links */}
                  <fieldset className={classes.socialLinks}>
                    <InputBase
                      className={classes.social}
                      fullWidth
                      disabled={disable}
                      placeholder="GitHub Link"
                      name="github"
                      value={myProfile.github}
                      onChange={handleInputChange}
                    />
                    <InputBase
                      className={classes.social}
                      fullWidth
                      disabled={disable}
                      placeholder="LinkedIn Link"
                      name="linkedIn"
                      value={myProfile.linkedIn}
                      onChange={handleInputChange}
                    />
                    <InputBase
                      className={classes.social}
                      fullWidth
                      disabled={disable}
                      placeholder="Twitter Link"
                      name="twitter"
                      value={myProfile.twitter}
                      onChange={handleInputChange}
                    />
                    <InputBase
                      fullWidth
                      disabled={disable}
                      placeholder="Personal Website"
                      name="website"
                      value={myProfile.website}
                      onChange={handleInputChange}
                    />
                  </fieldset>
                  <TextField
                    className={classes.textField}
                    fullWidth
                    disabled={disable}
                    variant="outlined"
                    placeholder="Interested In (Separate By Comma(,))"
                    name="interestedIn"
                    value={myProfile.interestedIn}
                    onChange={handleInputChange}
                  />
                  {!disable ? (
                    <>
                      <Button
                        className={classes.registerButton}
                        onClick={() => setDisable(true)}
                      >
                        <Typography style={{ color: '#fff' }}>
                          Cancel
                        </Typography>
                      </Button>
                      <Button
                        className={classes.registerButton}
                        onClick={handleUpdate}
                      >
                        <Typography style={{ color: '#fff' }}>
                          Update
                        </Typography>
                      </Button>
                    </>
                  ) : (
                    <Button
                      className={classes.registerButton}
                      onClick={() => setDisable(false)}
                    >
                      <Typography
                        variant="h6"
                        style={{
                          color: '#fff',
                          padding: '4px 4px',
                          width: '100%'
                        }}
                        noWrap
                      >
                        Click Here to Update
                      </Typography>
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Box>
            <Box maxWidth="28em" minWidth="24em">
              <img
                src=".././static/images/event_img.jpg"
                alt="gallery-icon"
                style={{ marginLeft: '51px', marginTop: '20px' }}
              />
            </Box>
          </Box>
        </Grid>
      </div>
    </DrawerLayout>
  );
}

export default Settings;
