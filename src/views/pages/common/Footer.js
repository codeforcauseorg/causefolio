import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Link
} from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#291755',

    paddingLeft: 10,
    paddingRight: 10,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 10,
      paddingRight: 10
    },
    color: '#000000'
  },
  iconBtn: {
    display: 'inline-flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    border: '2px solid #fff'
  },

  iconSocialMedia: {
    color: 'white',
    margin: '0',
    padding: '0'
  },
  centerCls: {
    paddingLeft: '5px',
    paddingRight: '5px',
    marginTop: '-10px'
  },
  circleCls: {
    // padding: '10px',
    backgroundColor: '#fff',

    // border: '2px solid red',
    borderRadius: '50%'
  },
  extraMarginTop: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4)
  },
  extraMargin: {
    margin: '0'
  },
  copyRightPadding: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4)
  }
}));

function Footer({ className, ...rest }) {
  const classes = useStyles();
  const flexColumn = {
    display: 'flex',
    flexDirection: 'column',
    padding: 0
  };

  const disbase = {
    display: 'flex',
    color: 'white',
    alignItems: 'flex-end'
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid style={disbase} container component="dl">
          <Grid
            className={classes.copyRightPadding}
            xs={12}
            sm={12}
            md={9}
            lg={9}
          >
            <Typography display="block" variant="body2" color="textSecondary">
              {'Copyright © '}
              {new Date().getFullYear()}{' '}
              <Link color="inherit" href="https://codeforcause.org">
                Code For Cause
              </Link>
              {'. All rights reserved.'}
            </Typography>

            <Typography
              display="block"
              guitterBottom
              variant="body2"
              color="textSecondary"
            >
              <Link color="inherit" component={RouterLink} to="/privacy">
                Privacy Policy
              </Link>
              {' | '}

              <Link color="inherit" component={RouterLink} to="/terms">
                Terms of Use
              </Link>
              {' | '}

              <Link color="inherit" component={RouterLink} to="/refundpolicies">
                Refund &amp; Cancellation Policy
              </Link>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={2}
            className={classes.extraMarginTop}
          >
            <Typography variant="h4" gutterBottom>
              Contact us
            </Typography>
            <Grid item xs={3} sm={3} md={3}>
              <List style={flexColumn}>
                <ListItem
                  className={classes.centerCls}
                  component="a"
                  href="mailto:team@codeforcause.org"
                >
                  <ListItemIcon className={classes.iconSocialMedia}>
                    <FontAwesomeIcon icon="envelope" size="md" />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.iconSocialMedia}
                    primary="team@codeforcause.org"
                  />
                </ListItem>
                <ListItem
                  className={classes.centerCls}
                  component="a"
                  href="mailto:events@codeforcause.org"
                >
                  <ListItemIcon className={classes.iconSocialMedia}>
                    <FontAwesomeIcon icon="envelope" size="md" />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.iconSocialMedia}
                    primary="events@codeforcause.org"
                  />
                </ListItem>
                <ListItem
                  className={classes.centerCls}
                  component="a"
                  href="mailto:career@codeforcause.org"
                >
                  <ListItemIcon className={classes.iconSocialMedia}>
                    <FontAwesomeIcon icon="envelope" size="md" />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.iconSocialMedia}
                    primary="career@codeforcause.org"
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
