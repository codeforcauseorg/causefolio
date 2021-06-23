import React from 'react';
import { Box } from '@material-ui/core';

const UserEventStats = ({ conducted, attended }) => {
  const box = {
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
    fontSize: '20px'
  };

  const circle = {
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
    fontWeight: '900'
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '21px'
      }}
    >
      <Box style={box}>
        <p>
          events
          <br />
          conducted
        </p>
        <div style={circle}>{conducted}</div>
      </Box>
      <Box style={box}>
        <p>
          events
          <br />
          attended
        </p>
        <div style={circle}>{attended}</div>
      </Box>
    </Box>
  );
};

export default UserEventStats;
