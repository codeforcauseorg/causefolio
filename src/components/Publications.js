import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    background: '#CCD2E3',
    borderRadius: '20px',
    padding: '19px',
    color: '#291757',
    fontFamily: 'Montserrat',
    marginBottom: '21px',
    marginLeft: '21px'
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '21px'
  },
  topText: {
    fontWeight: 'bold',
    fontSize: '24px',
    letterSpacing: '0.44px'
  },
  publication: {
    display: 'block',
    fontSize: '17px',
    marginBottom: '10px'
  },
  pubText: {
    display: 'flex',
    fontWeight: 'bold',
    textAlign: 'left',
    alignItems: 'center',
    marginBottom: '10px',
    wordWrap: 'break-word'
  },
  pubHeading: {
    display: 'block',
    fontSize: '14px',
    marginLeft: '10px'
  },
  pubRead: {
    display: 'flex',
    textAlign: 'left',
    fontSize: '12px',
    marginRight: '12px'
  },
  pubDate: {
    display: 'flex',
    textAlign: 'left',
    fontSize: '12px'
  }
}));

function Publications() {
  const classes = useStyles();
  useEffect(() => {
  }, []);
  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item className={classes.topContainer}>
          <Typography variant="h1" className={classes.topText}>
            Publications
          </Typography>
        </Grid>
      </Grid>
      {/* sample blog posts */}
      <Grid container className={classes.publication}>
        <Grid className={classes.pubText}>
          <img style={{ borderRadius: '3px' }} src="./static/images/icons/publication.svg" alt="publication" />
          <Grid className={classes.pubHeading}>
            <Typography style={{ fontSize: '18px', fontWeight: '600' }}>Blog Title</Typography>
            <div style={{ display: 'flex' }}>
              <Typography variant="subtitle1" className={classes.pubRead}>2 MIN</Typography>
              <Typography variant="subtitle1" className={classes.pubDate}>
                <b>•</b>
                &ensp;16 Jan
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid className={classes.pubText}>
          <img style={{ borderRadius: '3px' }} src="./static/images/icons/publication.svg" alt="publication" />
          <Grid className={classes.pubHeading}>
            <Typography style={{ fontSize: '18px', fontWeight: '600' }}>Blog Title</Typography>
            <div style={{ display: 'flex' }}>
              <Typography variant="subtitle1" className={classes.pubRead}>2 MIN</Typography>
              <Typography variant="subtitle1" className={classes.pubDate}>
                <b>•</b>
                &ensp;16 Jan
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid className={classes.pubText}>
          <img style={{ borderRadius: '3px' }} src="./static/images/icons/publication.svg" alt="publication" />
          <Grid className={classes.pubHeading}>
            <Typography style={{ fontSize: '18px', fontWeight: '600' }}>Blog Title</Typography>
            <div style={{ display: 'flex' }}>
              <Typography variant="subtitle1" className={classes.pubRead}>2 MIN</Typography>
              <Typography variant="subtitle1" className={classes.pubDate}>
                <b>•</b>
                &ensp;16 Jan
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Publications;
