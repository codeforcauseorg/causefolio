import { Drawer, Hidden, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import { Box, Typography, Avatar } from '@material-ui/core';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import clsx from 'clsx';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Logo1 from '../../components/Logo1';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faCogs,
  faUser,
  faColumns,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { faBloggerB } from '@fortawesome/free-brands-svg-icons';
const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: 'white',
    color: '#291755',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  itemicon: {
    color: 'white',
    fontSize: '18px',
    marginRight: '15px'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#291755'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#291755'
  },
  textStyle: {
    color: '#FFFFFF',
    fontWeight: '550',
    fontSize: '25px'
  },
  disabled: {
    color: 'rgb(255,255,255,0.5)'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    padding: theme.spacing(3),
    marginTop: '80px',
    width: '100%',
    maxWidth: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%'
    }
  },
  buttoncon: {
    backgroundColor: 'rgb(88,74,124)'
  },
  idHeading: {
    display: 'block',
    fontSize: '14px',
    color: 'white',
    marginLeft: '10px',
    marginTop: '20px',
    marginBottom: '20px'
  },
  idtext: {
    display: 'flex',
    textAlign: 'left',
    color: 'white',
    fontWeight: '600',
    fontSize: '12px',
    marginRight: '5px'
  },
  iduser: {
    display: 'flex',
    textAlign: 'left',
    color: 'white',
    fontSize: '12px'
  },
  idavatar: {
    marginLeft: '0px',
    marginRight: '12px',
    width: theme.spacing(6),
    height: theme.spacing(6)
  },

  idbtn: {
    backgroundColor: 'rgba(254,254,254,0.2)',
    '&:hover': {
      backgroundColor: 'rgba(254,254,254,0.2)'
    }
  },
  disablebtn: {
    backgroundColor: 'inherit',
    '&:hover': {
      backgroundColor: 'rgba(21, 9, 52, 0.2)'
    }
  }
}));
export default function DrawerLayout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  const myStyles = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const navItems = [
    { name: 'Dashboard', link: '/dashboard', icon: faColumns },
    { name: 'Profile', link: '/profile', icon: faUser },
    { name: 'Events', link: '/events', icon: faCalendarAlt },
    { name: 'Blogs', link: '/blogs', icon: faBloggerB },
    { name: 'Settings', link: '/settings', icon: faCogs },
    { name: 'Log out', link: '/logout', icon: faSignOutAlt }
  ];
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={myStyles}>
          <Logo1 />
          {/* <Typography variant="h6" noWrap>
            User Name
          </Typography> */}
          <Hidden mdUp>
            <IconButton size="small" onClick={handleToggle}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden mdDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <Box className={classes.idHeading} display="flex">
            <Box display="flex" alignItems="center">
              <Avatar
                className={classes.idavatar}
                alt="ProfileIcon"
                src="./static/profile/icons/icons.png"
              />
              <div style={{ display: 'block', marginLeft: '10px' }}>
                <Typography style={{ fontSize: '18px', fontWeight: '600' }}>
                  John Doe
                </Typography>
                <div style={{ display: 'flex' }}>
                  <Typography variant="subtitle1" className={classes.idtext}>
                    ID
                  </Typography>
                  <Typography variant="subtitle1" className={classes.iduser}>
                    <b>:</b>
                    &ensp;10294DEW83A
                  </Typography>
                </div>
              </div>
            </Box>
          </Box>
          <List>
            {navItems.map(({ name, link, icon }, idx) => (
              <ListItem
                button
                key={idx}
                className={clsx(
                  classes.idbtn,
                  window.location.pathname !== link ? classes.disablebtn : ''
                )}
              >
                <ListItemIcon
                  className={clsx(
                    classes.itemicon,
                    window.location.pathname !== link ? classes.disabled : ''
                  )}
                >
                  <FontAwesomeIcon icon={icon} size="lg" />
                </ListItemIcon>
                <ListItemText
                  onClick={() => {
                    history.push(link);
                  }}
                  primary={
                    <Typography
                      type="body2"
                      className={clsx(
                        classes.textStyle,
                        window.location.pathname !== link
                          ? classes.disabled
                          : ''
                      )}
                    >
                      {name}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <Drawer open={toggle}>
          <Box className={classes.idHeading} display="flex">
            <Box display="flex" alignItems="center">
              <Avatar
                className={classes.idavatar}
                alt="ProfileIcon"
                src="./static/profile/icons/icons.png"
              />
              <div style={{ display: 'block', marginLeft: '10px' }}>
                <Typography style={{ fontSize: '18px', fontWeight: '600' }}>
                  John Doe
                </Typography>
                <div style={{ display: 'flex' }}>
                  <Typography variant="subtitle1" className={classes.idtext}>
                    ID
                  </Typography>
                  <Typography variant="subtitle1" className={classes.iduser}>
                    <b>:</b>
                    &ensp;10294DEW83A
                  </Typography>
                </div>
              </div>
            </Box>
          </Box>
          <List>
            {navItems.map(({ name, link, icon }, idx) => (
              <ListItem
                button
                key={idx}
                className={clsx(
                  classes.idbtn,
                  window.location.pathname !== link ? classes.disablebtn : ''
                )}
              >
                <ListItemIcon
                  className={clsx(
                    classes.itemicon,
                    window.location.pathname !== link ? classes.disabled : ''
                  )}
                >
                  <FontAwesomeIcon icon={icon} size="lg" />
                </ListItemIcon>
                <ListItemText
                  onClick={() => {
                    history.push(link);
                  }}
                  primary={
                    <Typography
                      type="body2"
                      className={clsx(
                        classes.textStyle,
                        window.location.pathname !== link
                          ? classes.disabled
                          : ''
                      )}
                    >
                      {name}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Hidden>
      <div className={classes.content}>{children}</div>
    </div>
  );
}
