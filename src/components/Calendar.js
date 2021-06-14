import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '20px',
    background: '#CCD2E3',
    padding: '19px',
    fontFamily: 'Montserrat',
    marginBottom: '21px'
  },
  text: {
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#292C3D'
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '18px'
  },
  roundedLabel: {
    background: '#291757',
    borderRadius: '20px',
    textTransform: 'lowercase',
    padding: '1px 16px 1px 16px',
    color: '#FFFFFF',
    fontSize: '18px'
  },
  days: {
    fontSize: '18px',
    color: '#292C3D',
    display: 'flex',
    width: '60px',
    height: '30px',
    justifyContent: 'center'
  },
  dates: {
    fontSize: '15px',
    color: '#291757',
    fontWeight: 'bold',
    display: 'flex',
    width: '60px',
    height: '30px',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  grid: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  lightColorText: {
    color: '#576886'
  },
  event: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    background: 'linear-gradient(180deg, #FFFFFF 0%, #CCD2E3 100%)',
    border: '1px solid #291757',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  }
}));

function Calendar() {
  const [monthNameIndex, setMonthNameIndex] = useState();
  const [year, setYear] = useState();
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);
  const [thirdRow, setThirdRow] = useState([]);
  const [fourthRow, setFourthRow] = useState([]);
  const [fifthRow, setFifthRow] = useState([]);
  const now = new Date();
  const monthsName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const daysName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentMonthTotalDays = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();
  let currentDate = 0;
  //  for demo purpose this events variable is created
  const events = {
    [now.getMonth()]: {
      5: true,
      19: true,
      24: true
    }
  };
  const getFirstRow = () => {
    const dates = [];
    let currentMonthGapInGrid = new Date(
      now.getFullYear(),
      now.getMonth(),
      1
    ).getDay();
    --currentMonthGapInGrid;
    const previousMonthTotalDays = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();
    for (let i = 0; i < 7; i++) {
      if (i < currentMonthGapInGrid) {
        dates.push(previousMonthTotalDays - (currentMonthGapInGrid - (i + 1)));
      } else {
        dates.push(++currentDate);
      }
    }
    return dates;
  };
  const getSecondRow = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      dates.push(++currentDate);
    }
    return dates;
  };
  const getThirddRow = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      dates.push(++currentDate);
    }
    return dates;
  };
  const getFourthdRow = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      if (currentDate === currentMonthTotalDays) {
        currentDate = 0;
      }
      dates.push(++currentDate);
    }
    return dates;
  };
  const getFifthRow = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      if (currentDate === currentMonthTotalDays) {
        currentDate = 0;
      }
      dates.push(++currentDate);
    }
    return dates;
  };
  const setInformation = () => {
    setMonthNameIndex(now.getMonth());
    setYear(now.getFullYear());
    setFirstRow(getFirstRow());
    setSecondRow(getSecondRow());
    setThirdRow(getThirddRow());
    setFourthRow(getFourthdRow());
    setFifthRow(getFifthRow());
  };
  useEffect(setInformation, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <Typography variant="h4" className={classes.text}>
          Calendar
        </Typography>
        <div style={{ display: 'flex' }}>
          <Typography
            variant="h6"
            className={classes.roundedLabel}
            style={{ marginRight: '5px' }}
          >
            {monthsName[monthNameIndex]}
          </Typography>
          <Typography variant="h6" className={classes.roundedLabel}>
            {year}
          </Typography>
        </div>
      </div>
      <Grid container className={classes.grid}>
        {daysName.map((day) => (
          <Grid item>
            <Typography
              display="inline"
              variant="subtitle1"
              key={day}
              className={classes.days}
            >
              {day}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container className={classes.grid}>
        {firstRow.map((date) => (
          <Grid item>
            <Typography
              display="inline"
              variant="subtitle1"
              key={date}
              className={clsx(
                classes.dates,
                date > 7 && classes.lightColorText
              )}
            >
              <div className={events[monthNameIndex][date] && classes.event}>
                {date}
              </div>
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container className={classes.grid}>
        {secondRow.map((date) => (
          <Grid item>
            <Typography
              display="inline"
              variant="subtitle1"
              key={date}
              className={clsx(classes.dates)}
            >
              <div className={events[monthNameIndex][date] && classes.event}>
                {date}
              </div>
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container className={classes.grid}>
        {thirdRow.map((date) => (
          <Grid item>
            <Typography
              display="inline"
              variant="subtitle1"
              key={date}
              className={clsx(classes.dates)}
            >
              <div className={events[monthNameIndex][date] && classes.event}>
                {date}
              </div>
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container className={classes.grid}>
        {fourthRow.map((date) => (
          <Grid item>
            <Typography
              display="inline"
              variant="subtitle1"
              key={date}
              className={clsx(classes.dates)}
            >
              <div className={events[monthNameIndex][date] && classes.event}>
                {date}
              </div>
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container className={classes.grid}>
        {fifthRow.map((date) => (
          <Grid item>
            <Typography
              display="inline"
              variant="subtitle1"
              key={date}
              className={clsx(
                classes.dates,
                date < 8 && classes.lightColorText
              )}
            >
              <div className={events[monthNameIndex][date] && classes.event}>
                {date}
              </div>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Calendar;
