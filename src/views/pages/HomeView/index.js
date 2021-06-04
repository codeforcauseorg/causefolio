import { makeStyles } from '@material-ui/core';
import React from 'react';
import Page from 'src/components/Page';
// import Second from './Second';
import Test from './Test';


const useStyles = makeStyles(() => ({
  root: {}
}));

function HomeView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Code for Cause">
      <Test />
    </Page>
  );
}

export default HomeView;
