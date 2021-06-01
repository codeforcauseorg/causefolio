import { Box ,Button} from '@material-ui/core';
import React from 'react';
import BookmarkedEvents from 'src/components/BookmarkedEvents';
// import UpcomingEvents from 'src/components/NewEvents';
import {useHistory} from "react-router-dom";
// import Publications from 'src/components/Publications';
import SearchBar from 'src/components/search';
import DrawerLayout from 'src/layouts/DrawerLayout';
import { makeStyles } from '@material-ui/core/styles';
// import Logo from 'src/components/Logo1';
const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: '120px',
    marginTop: '20px',
    width: '280px',
    height: '55px',
    borderRadius: '20px',
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: '18px',
    background: '#291757',
    [theme.breakpoints.down('xs')]: {
      marginTop: '29px',
      marginLeft: '215px'
    }
  }
}));


export default function EventDefaultPage() {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () =>{
    history.push('/createEvent')
    console.log("clicked");
  }
  return (
    <DrawerLayout>
      <Box display="flex">
        <Box flexGrow={1}>
          <BookmarkedEvents />
          <SearchBar />
          <BookmarkedEvents />
          <Button className={classes.button} onClick={handleClick}>
              Create New Event
            </Button>
        </Box>

        <Box maxWidth="28em" minWidth="24em">
          {/* 
          <Publications /> */}
        </Box>
      </Box>
    </DrawerLayout>
  );
}
