import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '750px',
    height: '450px',
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
    fontSize: '16px'
  },
  details: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: 'rgba(42, 23, 89, 0.25)',
    marginBottom: '22px',
    marginTop: '18px'
  },
  cover: {
    width: '354px',
    height: '413px'
  },
  input: {
    background: 'rgba(42, 23, 89, 0.25)',
    borderRadius: '20px',
    border: 'none',
    width: '250px',
    height: '30px',
    fontWeight: 'bold',
    color: '#3291755',
    padding: '0px 13px 0px 13px',
    '&:focus': {
      outline: 'none'
    },
    marginBottom: '4px'
  },
  divider: {
    position: 'absolute',
    width: '308px',
    height: '2px',
    left: '371px',
    top: '340px',
    borderRadius: '25px',
    backgroundColor: '#291757'
  },
  bottomPart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '55px'
  },
  checkbox: {
    width: '11.5px',
    height: '11px',
    marginRight: '6.5px'
  },
  button: {
    position: 'absolute',
    left: '628px',
    top: '411px',
    width: '100px',
    height: '28px',
    borderRadius: '20px',
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: '18px',
    background: 'linear-gradient(180deg, #5731BA 0%, #291757 100%)'
  }
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="/static/images/login-illustration.svg"
        title="Login Image"
      />
      <CardContent className={classes.content}>
        <Typography
          style={{ fontSize: '36px', fontWeight: 'bold', marginTop: '12px' }}
        >
          Login
        </Typography>
        <Typography className={classes.details}>
          Welcome back,
          <br />
          please login to your account
        </Typography>
        <Typography>Email Id</Typography>
        <input className={classes.input} variant="outlined" />
        <Typography>Password</Typography>
        <input className={classes.input} variant="outlined" />
        <Divider className={classes.divider} />
        <div className={classes.bottomPart}>
          <Checkbox className={classes.checkbox} />
          <Typography style={{ marginRight: '21px' }}>Remember Me</Typography>
          <Typography style={{ color: '#B20000' }}>
            Forgot password ?
          </Typography>
        </div>
        <Button className={classes.button}>Login</Button>
      </CardContent>
    </Card>
  );
}
