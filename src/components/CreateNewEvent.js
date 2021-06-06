import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import DrawerLayout from 'src/layouts/DrawerLayout';
import {
  Button,
  Grid,
  Box,
  Typography,
  InputBase,
  TextField
} from '@material-ui/core';
import ImageUploader from 'react-images-upload';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    background: '#FFFFFF',
    borderRadius: '20px',
    fontSize: '16px'
  },
  social: {
    borderBottom: '1.3px solid #291757',
    marginBottom: '10px'
  },
  socialLinks: {
    marginBottom: '16px',
    marginTop: '8px',
    backgroundColor: '#CCD2E3',
    borderRadius: '20px',
    padding: '20px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#F2F7FF',
      borderRadius: '20px'
    }
  },
  cancelbtn: {
    background: '#291757',
    color: '#FFF',
    width: '200px',
    height: '38px',
    borderRadius: '20px',
    marginRight: '15px',
    '&:hover': {
      backgroundColor: '#101c4c',
    },
  },
  createbtn: {
    marginTop: '60px',
    marginLeft: '40px',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'row-reverse'
    }
  },
  addbtn: {
    background: '#291757',
    color: '#FFF',
    width: '200px',
    height: '38px',
    borderRadius: '20px',
    marginRight: '60px',
    '&:hover': {
      backgroundColor: '#101c4c',
    },
  },
  inputDiv: {
    background: 'rgba(42, 23, 89, 0.25)',
    borderRadius: '17px',
    width: '451px',
    marginBottom: '10px',
    height: '70px'
  },
  input1: {
    border: '0',
    // padding: '10px',
    font: 'inherit',
    width: '100%',
    backgroundColor: '#CCD2E3',
    borderRadius: '20px',
    outline: '0',
    borderBlockColor: 'green',
    borderColor: 'green',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#F2F7FF',
      borderRadius: '20px',
      [theme.breakpoints.down('md')]: {
        width: '50%'
      }
    }
  },
  image: {
    marginLeft: '71px',
    width: '350px',
    height: '183px',
    marginTop: '55px',
    cursor: 'pointer',
    background: '#473672',
    borderRadius: '40px',
    [theme.breakpoints.down('xs')]: {
      height: '220px',
      marginTop: '45px',
      width: '253px'
    }
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
  topContainer: {
    width: '150%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px'
  },
  topText: {
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  text: {
    color: '#fff',
    marginLeft: '70px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
      marginLeft: '30px'
    }
  },
  gallery: {
    marginLeft: '124px',
    width: '100px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '71px'
    }
  },
  button: {
    marginTop: '8px',
    width: '200px',
    height: '38px',
    borderRadius: '20px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '13px',
    background: '#291757',
    '&:hover': {
      backgroundColor: '#101c4c'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '29px',
      marginLeft: '45px'
    }
  },
  date: {
    marginBottom: '16px',
    backgroundColor: '#CCD2E3',

    borderRadius: '20px',
    padding: '12.5px 14px',
    '&:focus': {
      outline: 'none'
    },

    '& .MuiOutlinedInput-notchedOutline': {
      // borderColor: '#F2F7FF',
      borderRadius: '20px'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  textField: {
    marginBottom: '16px',
    marginTop: '8px',
    backgroundColor: '#CCD2E3',
    borderRadius: '20px',
    borderBlockColor: 'green',
    borderColor: 'green',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#F2F7FF',
      borderRadius: '20px'
    }
  },
  paddingRight: {
    paddingRight: '80px',
    marginLeft: '40px'
  },
  imagePreview: {
    '& .uploadPictureContainer': {
      width: '60%'
    }
  }
}));

function CreateNewEvent() {
  const classes = useStyles();

  // file upload

  const handleChange = e => {
    // let selectedFile = e.target.files[0];
  };

  function onDrop(picture) {
    console.log(picture);
  }

  useEffect(() => {}, []);
  return (
    <DrawerLayout>
      <div className={classes.root}>
        <Box display="flex" style={{ width: '100%' }}>
          <Box flexGrow={1}>
            <Grid container>
              <Grid item className={classes.topContainer}>
                <Typography variant="h1" className={classes.topText}>
                  New Event
                </Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.event}>
              <Grid style={{ width: '100%' }}>
                <TextField
                  placeholder="Enter name of the event"
                  className={classes.textField}
                  fullWidth
                  name="eventName"
                  type="eventName"
                  variant="outlined"
                  onChange={handleChange}
                />

                <TextField
                  placeholder="Add Description of the event"
                  className={classes.textField}
                  multiline
                  fullWidth
                  name="email"
                  type="email"
                  variant="outlined"
                  onChange={handleChange}
                />

                <Grid container>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      id="date"
                      type="date"
                      defaultValue="2017-05-24"
                      className={classes.date}
                      InputLabelProps={{
                        shrink: true
                      }}
                      style={{ marginRight: '30px' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      fullWidth
                      className={classes.input1}
                      placeholder="Event Time"
                      name="time"
                      type="time"
                      id="time"
                      defaultValue="07:30"
                      variant="outlined"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  className={classes.textField}
                  placeholder="Event link / Registration link"
                  name="link"
                  type="link"
                  variant="outlined"
                  onChange={handleChange}
                />
                <fieldset className={classes.socialLinks}>
                  <InputBase
                    className={classes.social}
                    fullWidth
                    placeholder="Speaker Name"
                  />
                  <InputBase
                    className={classes.social}
                    fullWidth
                    placeholder="Speaker LinkedIn Profile Link"
                  />
                </fieldset>

                <Button className={classes.button}>Add Speaker</Button>
                {/* </div> */}
              </Grid>
            </Grid>
            <div className={classes.createbtn}>
              <Button className={classes.cancelbtn}>Cancel</Button>
              <Button className={classes.addbtn}>Create</Button>
            </div>
          </Box>
          <Box maxWidth="28em" minWidth="24em" className={classes.paddingRight}>
            <ImageUploader
              withIcon={true}
              buttonText="Choose image"
              onChange={onDrop}
              withPreview
              singleImage
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
              fileContainerStyle={{
                boxShadow: '2px 2px 3px 1px rgb(0, 0, 0, 0.5)'
              }}
              className={classes.imagePreview}
            />
            <img
              src="/static/images/event_img.svg"
              alt="gallery-icon"
              style={{ marginLeft: '10px', marginTop: '20px' }}
            />
          </Box>
        </Box>
      </div>
    </DrawerLayout>
  );
}

export default CreateNewEvent;
