import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card, Grid, Typography, Paper
} from '@material-ui/core';
import { Chart, Bar } from 'react-chartjs-2';

Chart.defaults.global.legend.display = false;

const useStyles = makeStyles(() => ({
  root: {
    background: '#291757',
    borderRadius: '20px',
    padding: '10px 16px 13px 16px',
    color: 'white',
    fontFamily: 'Montserrat'
  },
  topContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '27px',
    '& > h1:nth-child(1)': {
      marginRight: '20px'
    }
  },
  topText: {
    fontWeight: 'bold',
    fontSize: '24px',
    letterSpacing: '0.44px'
  }
}));

function CommitChart() {
  const [commitHistory, setCommitHistory] = useState([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);

  useEffect(() => {
    setCommitHistory([
      4,
      2,
      1,
      1,
      2,
      5,
      11,
      8,
      9,
      3,
      0,
      2,
      4,
      5,
      5,
      1,
      7,
      11,
      13,
      8,
      2,
      12,
      9,
      3,
      5,
      6,
      5,
      0,
      2,
      6
    ]);
  }, []);

  const classes = useStyles();
  const now = new Date();

  const days = [];

  for (let i = 29; i >= 0; i--) {
    const y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(
      now - i * 86400000
    );
    const m = new Intl.DateTimeFormat('en', { month: 'short' }).format(
      now - i * 86400000
    );
    const d = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(
      now - i * 86400000
    );
    days.push(`${d}-${m}-${y}`);
  }

  const data = {
    labels: days,
    datasets: [
      {
        label: 'Commits',
        borderWidth: 0,
        backgroundColor: '#74C7E550',
        data: commitHistory
      }
    ]
  };

  const commitSum = commitHistory.reduce((a, b) => a + b);

  return (
    <Card className={classes.root}>
      <Grid className={classes.topContainer}>
        <Typography className={classes.topText}>Monthly Commits</Typography>
        <Typography className={classes.topText}>{commitSum}</Typography>
      </Grid>
      <Paper>
        <Bar
          data={data}
          options={{
            layout: {
              padding: {
                left: -10
              }
            },
            responsive: true,
            scales: {
              xAxes: [
                {
                  barThickness: 5,
                  ticks: {
                    display: false
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    display: false
                  },
                  gridLines: {
                    display: false
                  }
                }
              ]
            },
            maintainAspectRatio: false
          }}
        />
      </Paper>
    </Card>
  );
}

export default CommitChart;
