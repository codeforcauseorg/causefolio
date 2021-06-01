import { makeStyles } from '@material-ui/core';
import React from 'react';
import Page from 'src/components/Page';
// import DrawerLayout from 'src/layouts/DrawerLayout';
import Hero from './Hero';

const useStyles = makeStyles(() => ({
  root: {}
}));

function HomeView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Code for Cause">
      <Hero />

      {/* <Footer /> */}
    </Page>
  );
}

export default HomeView;
