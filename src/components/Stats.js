import React from 'react';

const Stats = () => {
  const heading = {
    color: '#291755',
    marginBottom: '10px'
  };

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
    <div>
      <h2 style={heading}>Statistics</h2>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <div style={box}>
          <p>
            events
            <br />
            conducted
          </p>
          <div style={circle}>2</div>
        </div>
        <div style={box}>
          <p>
            events
            <br />
            attended
          </p>
          <div style={circle}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
