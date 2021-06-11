import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import DrawerLayout from 'src/layouts/DrawerLayout';
import {useForm } from "react-hook-form";
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
  speakerInput: {
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
    marginRight: '15px'
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
    marginRight: '60px'
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
  input1: {
    border: '0',
    marginBottom:'15px',
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

  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  useEffect(() => {}, []);
  return (

    <DrawerLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  control={control}
                  variant="outlined"
                  onChange={handleChange}
                  {...register("eventName", {required: true,minLength:2,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i
                  })} 
                  />
                    {errors?.eventName?.type === "required" && <p className={classes.red}>This field is required</p>}
                    {errors?.eventName?.type === "maxLength" && (
                    <p className={classes.red}>First name cannot exceed 20 characters</p>
                  )}
                  {errors?.eventName?.type === "pattern" && (
                    <p className={classes.red}>Alphabetical characters only</p>
                  )}
     
                <TextField
                  placeholder="Add Description of the event"
                  className={classes.textField}
                  multiline
                  control={control}
                  fullWidth
                  name="eventDescription"
                  type="text"
                  variant="outlined"
                  onChange={handleChange}
                  {...register("eventDescription", { required: true , maxLength: 60 })}
                  />
                    {errors.eventDescription && (
                <p className={classes.red}>
                  This field is required
                </p>
              )}

                <Grid container>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      id="date"
                      type="date"
                      control={control}
                      name="eventDate"
                      defaultValue="2017-05-24"
                      className={classes.date}
                      InputLabelProps={{
                        shrink: true
                      }}
                      style={{ marginRight: '30px' }}
                      {...register("eventDate", { required: true })}
                      />
                        {errors.eventDate && (
                    <p className={classes.red}>
                      This field is required
                    </p>
                  )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      fullWidth
                      control={control}
                      className={classes.input1}
                      placeholder="Event Time"
                      name="eventTime"
                      type="time"
                      id="time"
                      defaultValue="07:30"
                      variant="outlined"
                      onChange={handleChange}
                      {...register("eventTime", { required: true })}
                      />
                        {errors.eventTime && (
                    <p className={classes.red}>
                      This field is required
                    </p>
                  )}
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  control={control}
                  className={classes.textField}
                  placeholder="Event link / Registration link"
                  name="eventLink"
                  type="link"
                  variant="outlined"
                  onChange={handleChange}
                  {...register("eventLink", { required: true })}
                  />
                    {errors.eventLink && (
                <p className={classes.red}>
                  This field is required
                </p>
              )}
                <fieldset className={classes.socialLinks}>
                  <InputBase
                   control={control}
                    className={classes.speakerInput}
                    fullWidth
                    placeholder="Speaker Name"
                    name="speakerName"
                    {...register("speakerName", { required: true ,minLength:2,
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/i
                    })} 
                    />
                      {errors?.eventName?.type === "required" && <p className={classes.red}>This field is required</p>}
                      {errors?.eventName?.type === "maxLength" && (
                      <p className={classes.red}>Speaker name cannot exceed 20 characters</p>
                    )}
                    {errors?.eventName?.type === "pattern" && (
                      <p className={classes.red}>Alphabetical characters only</p>
                    )}
       
                  <InputBase
                    className={classes.speakerInput}
                    fullWidth
                    control={control}
                    name="eventProfileLink"
                    placeholder="Speaker LinkedIn Profile Link"
                    {...register("eventProfileLink", { required: true })}
                    />
                      {errors.eventProfileLink && (
                  <p className={classes.red}>
                    This field is required
                  </p>
                )}
                </fieldset>
                 <Button  className={classes.button}>Add Speaker</Button>
             </Grid>
            </Grid>
            <div className={classes.createbtn}>
              <Button className={classes.cancelbtn}>Cancel</Button>
              <Button type="submit" className={classes.addbtn}>Create</Button>
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
              {...register("eventLink", { required: true })}
              />
                {errors.eventLink && (
            <p className={classes.red}>
              Please add a Image
            </p>
          )}
            <img
              src="/static/images/event_img.svg"
              alt="gallery-icon"
              name="galleryIcon"
              style={{ marginLeft: '10px', marginTop: '20px' }}
              />
           
          </Box>
        </Box>
      </div>
      </form>
    </DrawerLayout>
  );
}

export default CreateNewEvent;