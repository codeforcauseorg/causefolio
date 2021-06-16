import React from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import {
  Avatar,
  Grid,
  Switch,
  IconButton,
  Card,
  Typography,
  Box,
  Chip
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Montserrat',
    color: '#291757'
  },
  cards: {
    color: '#291757',
    background: '#CCD2E3',
    borderRadius: '25px',
    padding: '20px',
    margin: '90px 5px 20px 0px',
    width: '100%'
  },
  tags: {
    backgroundColor: '#291757',
    color: 'white',
    borderRadius: '20px',
    padding: '10px 10px',
    fontWeight: '700',
    margin: '4px'
  },
  medium: {
    marginLeft: '75px',
    position: 'absolute',
    width: theme.spacing(20),
    height: theme.spacing(20),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(18),
      height: theme.spacing(18),
      fontSize: '24px',
      marginLeft: '35px'
    }
  },
  tiny: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  profiledesc: {
    maxWidth: '250px',
    marginTop: '10px',
    wordBreak: 'break-all',
    whiteSpace: 'no-warp',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '5',
    lineHeight: '1',
    maxHeight: '1.5'
  },
  publictext: {
    fontWeight: '650',
    paddingRight: '10px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '25px'
    }
  }
}));

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 56,
    height: 32,
    padding: 0
  },
  switchBase: {
    padding: 1,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(24px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: '#291757',
        borderColor: theme.palette.primary.main
      }
    }
  },
  thumb: {
    width: 29,
    height: 29,
    boxShadow: 'none'
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 32 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white
  },
  checked: {}
}))(Switch);

function ProfileInfo({ myProfile }) {
  const classes = useStyles();
  const interestedInArr = myProfile.interestedIn.split(',');

  return (
    <Grid container className={classes.root}>
      <Box>
        <Avatar
          alt="ProfileIcon"
          src="./static/profile/icons/icons.png"
          className={classes.medium}
        />
      </Box>

      <Box
        display="flex"
        justifyContent="flex-end"
        style={{ position: 'absolute', right: '60px', paddingTop: '50px' }}
      >
        <Typography variant="h2" className={classes.publictext}>
          Public View
        </Typography>

        <AntSwitch />
      </Box>

      <Card className={classes.cards}>
        <Box display="flex" justifyContent="flex-end">
          <Box flexGrow={1} />
          <Box xs={12} sm={8}>
            <IconButton href={myProfile.linkedIn}>
              <img
                className={classes.tiny}
                alt="LinkedIn"
                src="./static/profile/icons/Vector.png"
              />
            </IconButton>
            <IconButton href={myProfile.twitter}>
              <img
                className={classes.tiny}
                alt="Twitter"
                src="./static/profile/icons/Vector-1.png"
              />
            </IconButton>
            <IconButton href={myProfile.github}>
              <img
                className={classes.tiny}
                alt="GitHub"
                src="./static/profile/icons/Vector-3.png"
              />
            </IconButton>
            <IconButton href={myProfile.website}>
              <img
                className={classes.tiny}
                alt="Website"
                src="./static/profile/icons/Vector-2.png"
              />
            </IconButton>
          </Box>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          style={{ paddingLeft: '60px', paddingTop: '10px' }}
        >
          <Box flexGrow={1} minWidth={200}>
            <Typography variant="h1" style={{ fontWeight: '650' }}>
              {myProfile.fullName}
            </Typography>
            <Typography variant="body2" style={{ fontWeight: '650' }}>
              {myProfile.role}
            </Typography>
            <Typography variant="body2" className={classes.profiledesc}>
              {myProfile.description}
            </Typography>
          </Box>
          <Box
            flexGrow={1.5}
            maxWidth={380}
            mt={1}
            style={{ marginTop: '50px' }}
          >
            <Typography variant="h2" style={{ fontWeight: '650' }}>
              Interested in:
            </Typography>
            {interestedInArr
              .filter((e) => String(e).trim())
              .map((tagName) => <Chip className={classes.tags} label={tagName} />)}
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}

export default ProfileInfo;
