import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PersonIcon from '@material-ui/icons/Person';

import {
  Typography,
  Dialog,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Hidden,
  CircularProgress,
  makeStyles
} from '@material-ui/core';
import { login, dismissLogin, logout } from 'src/actions/accountActions';
import Login from 'src/components/Login';

const useStyles = makeStyles(() => ({
  button: {
    minWidth: '120px'
  },
  dialog: {
    '& .MuiDialog-paper': {
      borderRadius: '20px'
    }
  }
}));

function Account() {
  const user = useSelector((state) => state.account.user);
  const loginFlag = useSelector((state) => state.account.login);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleCloseMenu();
    dispatch(logout());
    dispatch(dismissLogin());
  };

  const handleClose = () => {
    dispatch(dismissLogin());
  };

  const handleLoginOpen = () => {
    dispatch(login());
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const truncate = (input) => {
    const first = input.split(' ')[0];
    if (first.length > 13) {
      return `${first.substring(0, 10)}...`;
    }
    return first;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 64
      }}
    >
      <div
        style={{
          padding: '10% 10px',
          whiteSpace: 'nowrap',
          color: '#000000'
        }}
      >
        {user ? (
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            onClick={handleOpenMenu}
            style={{
              cursor: 'pointer'
            }}
          >
            <Avatar
              style={{
                height: '35px',
                width: 'auto',
                marginRight: '16px'
              }}
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="avatar"
                  style={{
                    height: '35px'
                  }}
                />
              ) : (
                <PersonIcon
                  style={{
                    height: '35px',
                    width: '35px',
                    padding: '5px'
                  }}
                />
              )}
            </Avatar>
            <Hidden smDown>
              <Typography variant="h6">
                <Box
                  style={{
                    color: '#fff'
                  }}
                >
                  {`Hello ${truncate(user.displayName)}`}
                </Box>
              </Typography>
            </Hidden>
          </Box>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleLoginOpen}
            style={{
              backgroundColor: '#ffffff',
              color: '#291755',
              borderRadius: '20px',
              fontWeight: 800
            }}
          >
            {user === undefined ? (
              <CircularProgress size="24px" color="inherit" />
            ) : (
              <Typography variant="h5">Login</Typography>
            )}
          </Button>
        )}

        <Dialog
          maxWidth
          open={!user && !!loginFlag}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          className={classes.dialog}
        >
          <Login handleClose={handleClose} />
        </Dialog>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          keepMounted
          open={!!anchorEl}
          onClose={handleCloseMenu}
        >
          <MenuItem
            style={{
              backgroundColor: 'rgb(255, 255, 255, 0.95)',
              fontWeight: 500
            }}
            onClick={handleLogout}
          >
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Account;
