import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card, Grid, Typography, Button
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    background: '#CCD2E3',
    borderRadius: '20px',
    padding: '10px 16px 13px 16px',
    color: '#291757',
    fontFamily: 'Montserrat'
  },
  topContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '27px',
    '& > h1:nth-child(1)': {
      marginRight: '20px'
    }
  },
  topText: {
    fontWeight: 'bold',
    fontSize: '24px',
    letterSpacing: '0.44px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0px 10px'
  },
  badges: {
    display: 'flex',
    textAlign: 'center',
    fontSize: '17px',
    justifyContent: 'flex-start',
    marginRight: '8px',
    '& > div:not(:last-child)': {
      marginRight: '8px'
    }
  },
  badgesText: {
    width: '84px',
    height: '48px',
    lineHeight: '24px',
    wordWrap: 'break-word',
    marginBottom: '14px'
  },
  button: {
    backgroundColor: '#291757',
    width: '117px',
    height: '30px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
    letterSpacing: '0.05em',
    borderRadius: '20px'
  }
}));

function Badge() {
  const classes = useStyles();
  const [numberOfBadgesUnlocked, setNumberOFBadgeUnlocked] = useState(0);

  useEffect(() => {
    // for demo purpose set to 6
    setNumberOFBadgeUnlocked(6);
  }, []);

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item className={classes.topContainer}>
          <Typography variant="h1" className={classes.topText}>
            Badges Earned
          </Typography>
          <Typography variant="h1" className={classes.topText}>
            {numberOfBadgesUnlocked}
            {' '}
            Unlocked
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.badges}>
        {/* for demo purpose added badges statically */}
        <Grid item>
          <img
            src="./static/images/icons/star_yellow.svg"
            alt="badge"
            height="60px"
          />
          <Typography className={classes.badgesText}>Super Blogger</Typography>
        </Grid>
        <Grid item>
          <img
            src="./static/images/icons/star_orange.svg"
            alt="badge"
            height="60px"
          />
          <Typography className={classes.badgesText}>GitHub Hero</Typography>
        </Grid>
        <Grid item>
          <img
            src="./static/images/icons/star_blue.svg"
            alt="badge"
            height="60px"
          />
          <Typography className={classes.badgesText}>I am Famous</Typography>
        </Grid>
        <Grid item>
          <img
            src="./static/images/icons/star_yellow.svg"
            alt="badge"
            height="60px"
          />
          <Typography className={classes.badgesText}>Organizer</Typography>
        </Grid>
      </Grid>
      <div className={classes.buttonContainer}>
        <Button variant="contained" className={classes.button}>
          VIEW ALL
        </Button>
      </div>
    </Card>
  );
}

export default Badge;
