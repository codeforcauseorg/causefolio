import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  heading: {
    color: '#291755',
    marginBottom: '10px'
  },
  main: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  box: {
    display: 'flex',
    height: '80px',
    width: '250px',
    backgroundColor: '#291755',
    color: 'white',
    borderRadius: '20px',
    padding: '20px',
    alignItems: 'center',
    position: 'relative',
    fontWeight: '500',
    fontSize: '20px',
    [theme.breakpoints.down('xs')]: {
      height: '70px'
    }
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90px',
    width: '90px',
    borderRadius: '50%',
    backgroundColor: 'white',
    color: '#291755',
    position: 'absolute',
    border: '2px solid #291755',
    right: '-10px',
    fontWeight: '900',
    [theme.breakpoints.down('xs')]: {
      height: '85px',
      width: '85px'
    }
  }
}));

const Stats = ({ conducted, attending }) => {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.heading}>Statistics</h2>
      <div className={classes.main}>
        <div className={classes.box}>
          <p>
            events
            <br />
            conducted
          </p>
          <div className={classes.circle}>{conducted}</div>
        </div>
        <div className={classes.box}>
          <p>
            events
            <br />
            attended
          </p>
          <div className={classes.circle}>{attending}</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
