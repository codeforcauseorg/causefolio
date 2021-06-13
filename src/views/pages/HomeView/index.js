import { makeStyles } from '@material-ui/core';
import React from 'react';
import Page from 'src/components/Page';
// import DrawerLayout from 'src/layouts/DrawerLayout';
import Hero from './Hero';
import Footer from '../common/Footer';
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#291755',
    overflowX: 'hidden',
    display: "flex",
    flexDirection: "column",
    minHeight: 'calc(100vh - 64px)'
  },
  hero: {
    flexGrow: 1
  }
}));

function HomeView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Code for Cause">
      <Hero className={classes.hero} />
      <Footer />
    </Page>
  );
}

export default HomeView;
