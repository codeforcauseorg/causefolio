import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  Grid,
  Box,
  Typography,
  Divider
} from '@material-ui/core';
import GalleryIcon from "./GalleryIcon"
const useStyles = makeStyles(theme => ({
  
  root: {
    display: 'flex',
    width: '750px',
    height: '473px',
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
    fontSize: '16px',
    [theme.breakpoints.down('xs')]: {
      height: '793px',
      width: '353px'
    }
  },
  inputDiv:{
    background:'rgba(42, 23, 89, 0.25)',
    borderRadius: '17px',
    width: '451px',
    marginBottom:'10px',
  },
  divider: {
    width: '430px',
    height: '2px',
    backgroundColor: '#291757'
  },
  cancelbtn:{
    background: '#291757',
    color: '#FFF',
    width: '200px',
    height: '38px',
    borderRadius: '20px',
    marginRight:'15px',
  },
  createbtn:{
    marginTop:'60px',
    marginLeft:'40px',
  },
  addbtn:{
    background: '#291757',
    color: '#FFF',
    width: '200px',
    height: '38px',
    borderRadius: '20px',
    // marginRight:'60px',
  },
  input: {
    background:'rgba(42, 23, 89, 0.25)',
    borderRadius: '15px',
    border: 'none',
    width: '450px',
    height: '43px',
    fontWeight: 'bold',
    color: '#3291755',
    padding: '0px 13px 0px 15px',
    '&:focus': {
      outline: 'none'
    },
    marginBottom: '12px'
  },
  date:{
    background: 'rgba(42, 23, 89, 0.25)',
    borderRadius: '25px',
    border: 'none',
    width: '200px',
    height: '43px',
    fontWeight: 'bold',
    color: '#3291755',
    padding: '0px 13px 0px 15px',
    '&:focus': {
      outline: 'none'
    },
    marginBottom: '12px',
  },
  image :{
    display: 'flex',
    width: '350px',
    height: '173px',
    marginTop: '55px',
    background: '#473672',
    borderRadius: '40px',
  },
  description: {
    background: 'rgba(42, 23, 89, 0.25)',
    borderRadius: '25px',
    border: 'none',
    width: '450px',
    height: '75px',
    fontWeight: 'bold',
    color: '#3291755',
    padding: '0px 13px 0px 15px',
    '&:focus': {
      outline: 'none'
    },
    marginBottom: '4px'
  },
  topText:{
      marginBottom:'20px',
      fontWeight:'bold',
  },
  bottomPart: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px'
  },
  text:{
      color: '#FFF',
      fontWeight:'light!important',
      marginTop: '100px'
  },
  button: {
    marginTop: '8px',
    width: '200px',
    height: '38px',
    borderRadius: '20px',
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: '13px',
    background: '#291757',
    [theme.breakpoints.down('xs')]: {
      marginTop: '29px',
      marginLeft: '215px'
    }
  }
}));

function CreateNewEvent() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );
  const classes = useStyles();

  useEffect(() => {}, []);
  return (
    <>
     <Box display="flex">
      <Box flexGrow={1}>
        <Grid container>
          <Grid item className={classes.topContainer}>
            <Typography variant="h1" className={classes.topText}>
              New Event
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.event}>
          <Grid className={classes.eventText}>
            <input
              placeholder="Enter name of the event"
              className={classes.input}
              name="email"
              type="email"
              variant="outlined"
              //   onChange={handleChange}
            />

            <input
              placeholder="Add Description of the event"
              className={classes.description}
              name="email"
              type="email"
              variant="outlined"
              //   onChange={handleChange}
            />
            
            <input
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              className={classes.date}
              InputLabelProps={{
                shrink: true
              }}
              style={{'marginRight' : '30px'}}
            />
          <input
              placeholder="Event Time"
              className={classes.date}
              name="time"
              type="time"
              variant="outlined"
              //   onChange={handleChange}
            />
          
            <input
              placeholder="Event link / Registration link"
              className={classes.input}
              name="email"
              type="email"
              variant="outlined"
              //   onChange={handleChange}
            />
            <div className={classes.inputDiv}>
            <input
              placeholder="Speaker name"
              className={classes.input}
              name="email"
              type="email"
              variant="outlined"
              //   onChange={handleChange}
            />
             <Divider className={classes.divider} />
             <input
              placeholder="Speaker LinkedIn profile link" 
              className={classes.input}
              name="email"
              type="email"
              variant="outlined"
              //   onChange={handleChange}
            />
            </div>
            {/* <div className={classes.bottomPart}> */}
              <input
                placeholder="Add a description for the event"
                className={classes.description}
                name="email"
                type="email"
                variant="outlined"
                //   onChange={handleChange}
              />
           
              <Button className={classes.button}>Add Speaker</Button>
            {/* </div> */}
          </Grid>
        </Grid>
        <div className={classes.createbtn}>
        <Button className={classes.cancelbtn}>Cancel</Button>
        <Button className={classes.addbtn}>Create</Button>
        </div>
       </Box>
        <Box maxWidth="28em" minWidth="24em">
        <Card className={classes.image}>
            <img src={GalleryIcon} alt="gallery-icon" />
            <h3 className={classes.text}>Add a banner image</h3>
            </Card>
        </Box>
      </Box>
    </>
  );
}

export default CreateNewEvent;
