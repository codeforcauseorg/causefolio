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

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'Montserrat'
  },
  cards: {
    color: '#291757',
    background: '#CCD2E3',
    borderRadius: '25px',
    padding: '20px',
    margin: '70px 20px 20px 20px',
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
    marginLeft: '55px',
    position: 'absolute',
    width: theme.spacing(20),
    height: theme.spacing(20)
  },
  tiny: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  }
}));

const AntSwitch = withStyles(theme => ({
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
        backgroundColor: theme.palette.primary.main,
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

function ProfileInfo() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container>
        <Grid sm={2} md={2} lg={2}>
          <Avatar
            alt="ProfileIcon"
            src="./static/profile/icons/icons.png"
            className={classes.medium}
          />
        </Grid>
        <Grid sm={6} md={6} lg={6} />
        <Grid sm={3} md={3} lg={3}>
          <Typography variant="h2">Public View</Typography>
        </Grid>
        <Grid sm={1} md={1} lg={1}>
          <AntSwitch />
        </Grid>
      </Grid>
      <Card className={classes.cards}>
        <Box display="flex" justifyContent="flex-end">
          <Box flexGrow={1} />
          <Box xs={12} sm={8}>
            <IconButton>
              <img
                className={classes.tiny}
                alt="LinkedIn"
                src="./static/profile/icons/Vector.png"
              />
            </IconButton>
            <IconButton>
              <img
                className={classes.tiny}
                alt="Twitter"
                src="./static/profile/icons/Vector-1.png"
              />
            </IconButton>
            <IconButton>
              <img
                className={classes.tiny}
                alt="GitHub"
                src="./static/profile/icons/Vector-3.png"
              />
            </IconButton>
            <IconButton>
              <img
                className={classes.tiny}
                alt="Website"
                src="./static/profile/icons/Vector-2.png"
              />
            </IconButton>
          </Box>
        </Box>

        <Box display="flex" flexWrap="wrap">
          <Box flexGrow={1} minWidth={320}>
            <Typography variant="h1">John Doe</Typography>
            <Typography variant="h3">Software Developer</Typography>
            <Typography
              variant="body2"
              style={{ maxWidth: '400px', marginTop: '16px' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quos blanditiis tenetur
            </Typography>
          </Box>
          <Box flexGrow={1.5} maxWidth={400} mt={1}>
            <Typography variant="h2">Interested in:</Typography>
            <Chip className={classes.tags} label="Machine Learning" />
            <Chip className={classes.tags} label="ui/ux" />
            <Chip className={classes.tags} label="DevOps" />
            <Chip className={classes.tags} label="Public Speaking" />
            <Chip className={classes.tags} label="BlockChain" />
            <Chip className={classes.tags} label="Web Dev" />
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}

export default ProfileInfo;
