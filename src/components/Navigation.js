import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Logo1 from './Logo1';
import Stats from './Stats';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: 'white',
    color: '#291755'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  const myStyles = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  const drawerStyle = {
    backgroundColor: '#291755',
    color: 'white'
  };

  const textStyle = {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: '25px',
    letterSpacing: '2px'
  };

  const navItems = [
    'Dashboard',
    'Profiles',
    'Events',
    'Blogs',
    'Settings',
    'Log out'
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={myStyles}>
          <Logo1 />
          <Typography variant="h6" noWrap>
            User Name
          </Typography>
        </Toolbar>
      </AppBar>
      <div
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
        style={drawerStyle}
      >
        <List>
          {navItems.map((text, index) => (
            <ListItem button key={index} style={{ paddingLeft: '20%' }}>
              <ListItemText
                disableTypography
                primary={
                  <Typography type="body2" style={textStyle}>
                    {text}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Stats />
      </main>
    </div>
  );
}
